<template>
  <div>
    <DashboardHeader header-name="Product Bulk Upload" :link="false" />
    <div class="main-dashboard-table-data">

      <div class="mb-3">
        <label class="form-label">Excel File (Max-Rows: 20)</label>
        <b-form-file
        v-model="excel"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        ></b-form-file>
      </div>

      <div class="mb-3">
        <label class="form-label">Images (Max-Upload: 20 Images)</label>
        <b-form-file
        v-model="image"
        multiple
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        ></b-form-file>
      </div>

      <div class="mt-5 mb-3">
        <button class="btn btn-primary custom-btn" @click="bulkUpload">Upload</button>
        <button v-b-modal.modal-scrollable class="btn btn-success"> Guide For Bulk Upload</button>
      </div>
      
    </div>
    <b-modal id="modal-scrollable" title="Guide For Bulk Upload"  hide-footer>
      <h5>Step 1:</h5>
      <p>First upload an excel file and fill the rows in the given format below. Please note that for the category and sub category for a particular product you need to place the id of it respectively. You can get the id of the category from the category page and sub category id from the sub category page of the particular category </p>
      <a href="/file.xlsx" download>Download Excel Format</a><br/>
      <p><code>Note :</code> Images given below helps you to understand how to get the category and sub category ID</p>
      <code>Category ID :</code> <br/>
      <img src="/category.png" style="width:100%;" />
      <br/><code>Sub-Category ID :</code> <br/>
      <img src="/subcategory.png" style="width:100%;" />
      <br/>
      <h5>Step 2:</h5>
      <p>Select the images you want to upload and make sure the name of the image is unique and doesnt contain any special character else than _(underscore). If possible try to add numbers in between the text and please do not put spaces in the name.</p>
      <h5>Step 3:</h5>
      <p>Press the upload button.</p>
    </b-modal>
    
  </div>
</template>

<script>
export default {
  name: 'ProductBulkUploadPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      image:[],
      excel:null,
    }
  },
  methods: {

      bulkUpload() {
          if (this.excel === null) {
                 this.$toast.error("Please enter an excel file")
                return false;
            } else if (this.excel.type != 'application/vnd.ms-excel' && this.excel.type !='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') { // eslint-disable-line
                this.$toast.error("Please enter a valid excel file")
                return false;
            }

          if(this.image.length===0){
            this.$toast.error("Please enter an image")
            return false;
        }

        let imageErrorCount = 0
      for (let index = 0; index < this.image.length; index++) {
          switch (this.image[index]?.type) {
                case 'image/png':
                    break;
                case 'image/jpg':
                    break;
                case 'image/jpeg':
                    break;
                case 'image/webp':
                    break;

                default:
                    imageErrorCount++;
                    break;
            }
          
      }

      if(imageErrorCount>0){
        this.$toast.error("Please enter valid images")
        return false;
      }

      this.excelUpload()

      },

      async excelUpload() {

          const formData = new FormData()
            formData.append('upload',this.excel)

            this.$store.commit('loaders/show')
            try {
                const response = await this.$api.post(`/product/create-via-excel`, formData ) // eslint-disable-line
                this.imageUpload()
            } catch (err) {
                console.log(err.response)// eslint-disable-line
                if (err?.response?.data?.message) {
                    this.$toast.error(err?.response?.data?.message)
                }
                if (err?.response?.data?.errors?.upload) {
                    this.$toast.error(err?.response?.data?.errors?.upload?.msg)
                }
            } finally{
                this.$store.commit('loaders/hide')
            }

      },

    async imageUpload() {

        const formData = new FormData()
      for (let index = 0; index < this.image.length; index++) {
        formData.append('upload',this.image[index])
      }

      this.$store.commit('loaders/show')
      try {
          const response = await this.$api.post(`/product/bulk-upload-images`, formData ) // eslint-disable-line
          this.$toast.success('Date Uploaded Successfully')
          this.image=[];
            this.excel=null;
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.upload) {
              this.$toast.error(err?.response?.data?.errors?.upload?.msg)
          }
      } finally{
        this.$store.commit('loaders/hide')
      }
    },
  },
}
</script>

<style scoped>
.main-dashboard-counters {
  padding: 10px 20px;
  width: 100%;
}

.main-dashboard-counters .main-dashboard-counters-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.main-dashboard-table-data {
  padding: 10px 20px;
  display: block;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 30px;
}

.main-dashboard-table-data table {
  /* Make sure the inner table is always as wide as needed */
  width: 100%;
  border-spacing: 0;
  text-align: center;
}

.main-dashboard-table-data table th {
  border-width: 0px !important;
}

.main-dashboard-table-data .editBtn,
.main-dashboard-table-data .viewBtn {
  background-color: rgb(5, 141, 34);
  color: white !important;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 16px;
  transition: all 0.3s ease-in-out;
}

.main-dashboard-table-data .editBtn {
  margin-left: 5px;
  background-color: rgb(30, 5, 141) !important;
}
.main-dashboard-table-data .deleteBtn {
  background-color: rgb(141, 5, 28);
  color: white !important;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 16px;
  outline: none;
  border: none;
  margin-left: 5px;
  transition: all 0.3s ease-in-out;
}

.main-dashboard-table-data .deleteBtn:hover,
.main-dashboard-table-data .viewBtn:hover,
.main-dashboard-table-data .editBtn:hover {
  box-shadow: 2px 2px 6px 0px #818181;
}

.main-dashboard-table-data .page-item.active .page-link {
  background-color: #42b8f4;
  border-color: #42b8f4;
}

.page-link {
  font-size: 15px;
}

.pagination--nav {
  display: inline-block;
}
</style>