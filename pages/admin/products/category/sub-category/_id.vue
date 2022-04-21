<template>
  <div>
    <DashboardHeader :header-name="'Sub-category for '+productCategoryName" :link="false" />
    <div class="main-dashboard-table-data">
      <div style="width:100%;text-align:right;">
        <button v-b-modal.modal-1 style="margin-left:auto;margin-bottom:20px;" class="btn btn-primary"> Add Sub-Category</button>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr class="table-primary">
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in category" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ new Date(item.created_at).getDate() }}-{{ new Date(item.created_at).getMonth()+1 }}-{{ new Date(item.created_at).getFullYear() }}</td>
            <td>
              <button class="editBtn" title="edit" style="outline:none;border:none;"  @click="editEnquiry(item.id)">
                <font-awesome-icon :icon="['fa', 'pen-to-square']" />
              </button>
              <button class="deleteBtn" title="delete" @click="deleteEnquiry(item.id)">
                <font-awesome-icon :icon="['fa', 'trash']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="text-align: center">
        <nav aria-label="..." class="pagination--nav">
          <ul class="pagination">
            <li
              :class="
                totalPages === 0 || currentPage === 0
                  ? 'page-item disabled'
                  : 'page-item'
              "
            >
              <button
                class="page-link"
                tabindex="-1"
                :aria-disabled="
                  totalPages === 0 || currentPage === 0 ? 'true' : 'false'
                "
                @click="getCategory(currentPage - 1)"
              >
                Previous
              </button>
            </li>
            <li class="page-item active" aria-current="page">
              <button class="page-link" href="#">
                {{ currentPage + 1 }} of {{ totalPages }}
              </button>
            </li>
            <li
              :class="
                totalPages === 0 || currentPage === totalPages - 1
                  ? 'page-item disabled'
                  : 'page-item'
              "
            >
              <button
                class="page-link"
                tabindex="-1"
                :aria-disabled="
                  totalPages === 0 || currentPage === totalPages - 1
                    ? 'true'
                    : 'false'
                "
                @click="getCategory(currentPage + 1)"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <b-modal id="modal-1" title="Create Sub-category"  hide-footer>
      <b-form @submit.prevent="createSubCategory">

        <b-form-group id="input-group-2" label="Sub-category:" label-for="input-2">
          <b-form-input
            v-model="name"
            placeholder="Enter sub-category"
            required
          ></b-form-input>
           <p v-if="error" style="color:red;text-align:left">{{errorMessage}}</p>
        </b-form-group>

        <b-button type="submit" variant="primary">Create</b-button>
      </b-form>
    </b-modal>
    <b-modal id="modal-2" title="Edit Sub-category"  hide-footer>
      <b-form @submit.prevent="updateSubCategory">

        <b-form-group id="input-group-2" label="Sub-category:" label-for="input-2">
          <b-form-input
            v-model="editName"
            placeholder="Enter sub-category"
            required
          ></b-form-input>
           <p v-if="error" style="color:red;text-align:left">{{errorMessage}}</p>
        </b-form-group>

        <b-button type="submit" variant="primary">Update</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ProductSubCategoryPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      category: [],
      currentPage: 0,
      totalItems: 0,
      totalPages: 0,
      productCategoryId:0,
      productCategoryName:'',
      error:'',
      errorMessage:'',
      name:'',
      editName:'',
      productSubCategoryId:0,
    }
  },
  mounted() {
    this.getCategory()
  },
  methods: {
    async getSubCategory(page = 0) {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(`/product-sub-category/${this.productCategoryId}/view?page=${page}`)
        this.category = response.data.data.category
        this.currentPage = parseInt(response.data.data.currentPage)
        this.totalItems = parseInt(response.data.data.totalItems)
        this.totalPages = parseInt(response.data.data.totalPages)
      } catch (err) {
        console.log(err) // eslint-disable-line
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async getCategory() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/product-category/view/${this.$route.params.id}`
        )
        this.productCategoryId = response.data.data.id
        this.productCategoryName = response.data.data.name
        this.getSubCategory()
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/products/category'
            })
        }
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async createSubCategory() {
      this.error = false
      this.errorMessage = ''

      if (this.name === '') {
          this.error = true
          this.errorMessage = 'Please enter the sub-category'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.name))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid sub-category'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const response = await this.$api.post(`/product-sub-category/create`, {name:this.name, productCategoryId:this.productCategoryId} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.name = ''
          this.getSubCategory(this.currentPage)
          this.$bvModal.hide("modal-1")
          this.$toast.success('Date Created Successfully')
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.name) {
              this.$toast.error(err?.response?.data?.errors?.name?.msg)
          }
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async deleteEnquiry(id) {
        if (confirm("Are you sure you want to delete this?") === true) {
            this.$store.commit('loaders/show')
            try {
                await this.$api.delete(`/product-sub-category/delete/${id}`)
                this.$toast.success('Data deleted successfully')
                this.getSubCategory(this.currentPage)
            } catch (err) {
                console.log(err) // eslint-disable-line
                this.$toast.error('Something went wrong! Please try again')
            } finally{
                this.$store.commit('loaders/hide')
            }
        }
    },

    async editEnquiry(id){
      this.productSubCategoryId = id;
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/product-sub-category/view/${this.productSubCategoryId}`
        )
        this.editName = response.data.data.name
        this.$bvModal.show("modal-2")
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/products/category'
            })
        }
      } finally{
        this.$store.commit('loaders/hide')
      }
    },
    async updateSubCategory() {
      this.error = false
      this.errorMessage = ''

      if (this.editName === '') {
          this.error = true
          this.errorMessage = 'Please enter your name'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.editName))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid name'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const response = await this.$api.post(`/product-sub-category/edit/${this.productSubCategoryId}`, {name:this.editName, productCategoryId:this.productCategoryId} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.$toast.success('Date Updated Successfully')
          this.getSubCategory(this.currentPage)
          this.$bvModal.hide("modal-2")
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.name) {
              this.$toast.error(err?.response?.data?.errors?.name?.msg)
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