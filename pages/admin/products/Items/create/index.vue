<template>
  <div>
    <DashboardHeader header-name="Testimonial Create" />
    <div class="main-dashboard-content-form-data">
        <p v-if="error" style="color:red;text-align:center">{{errorMessage}}</p>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
            v-model="name"
          type="text"
          placeholder="Enter the name"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Price</label>
        <input
        v-model="price"
          type="text"
          placeholder="Enter the price"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea
        v-model="description"
          type="text"
          placeholder="Enter the description"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Product Category</label>
        <select v-model="productCategoryId" class="form-control" @change="getSubCategory(productCategoryId)">
          <option v-for="(item, index) in category" :key="index" :value="item.id">{{item.name}}</option>
        </select>
      </div>

      <div v-if="subcategory.length>0" class="mb-3">
        <label class="form-label">Product Sub-Category</label>
        <select v-model="productSubCategoryId" class="form-control">
          <option v-for="(item, index) in subcategory" :key="index" :value="item.id">{{item.name}}</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Image</label>
        <b-form-file
        v-model="image"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        ></b-form-file>
      </div>

      <div class="mt-5 mb-3">
        <button class="btn btn-primary custom-btn" @click="createProduct">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCreatePage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name:'',
      price:'',
      description:'',
      productCategoryId:'',
      productSubCategoryId:null,
      image:null,
      error:'',
      errorMessage:'',
      category:[],
      subcategory:[],
    }
  },
  mounted(){
      this.getCategory()
  },
  methods: {

    async getCategory() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(`/product-category/view-categories`)
        this.category = response.data.data
        if(response?.data?.data?.length>0){
            this.productCategoryId  = response?.data?.data[0]?.id
            this.getSubCategory(this.productCategoryId)
        }
      } catch (err) {
        console.log(err) // eslint-disable-line
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async getSubCategory(productCategoryId) {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(`/product-sub-category/${productCategoryId}/view-sub-categories`)
        this.subcategory = response.data.data
        if(response?.data?.data?.length>0){
            this.productSubCategoryId  = response?.data?.data[0]?.id
        }else{
          this.productSubCategoryId  = null
        }
      } catch (err) {
        console.log(err) // eslint-disable-line
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async createProduct() {
      this.error = false
      this.errorMessage = ''

      if (this.name === '') {
          this.error = true
          this.errorMessage = 'Please enter the name'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.name))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid name'
          return false;
      }

      if (this.price === '') {
          this.error = true
          this.errorMessage = 'Please enter the price'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.price))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid price'
          return false;
      }

      if (this.description === '') {
          this.error = true
          this.errorMessage = 'Please enter the description'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.description))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid description'
          return false;
      }

      if (this.image === null) {
          this.error = true
          this.errorMessage = 'Please enter the image'
          return false;
      } else if (this.image.type != 'image/png' && this.image.type != 'image/jpg' && this.image.type != 'image/jpeg' && this.image.type != 'image/webp') { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid image'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const formData = new FormData()
          formData.append('name',this.name)
          formData.append('price',this.price)
          formData.append('description',this.description)
          formData.append('productCategoryId',this.productCategoryId)
          formData.append('productSubCategoryId',this.productSubCategoryId)
          formData.append('image',this.image)
          const response = await this.$api.post(`/product/create`, formData ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.name = ''
          this.price = ''
          this.description = ''
          this.image = null
          if(this.category?.length>0){
            this.productCategoryId  = this.category[0]?.id
            this.getSubCategory(this.productCategoryId)
          }
          this.$toast.success('Data Created Successfully')
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.name) {
              this.$toast.error(err?.response?.data?.errors?.name?.msg)
          }
          if (err?.response?.data?.errors?.price) {
              this.$toast.error(err?.response?.data?.errors?.price?.msg)
          }
          if (err?.response?.data?.errors?.description) {
              this.$toast.error(err?.response?.data?.errors?.description?.msg)
          }
          if (err?.response?.data?.errors?.image) {
              this.$toast.error(err?.response?.data?.errors?.image?.msg)
          }
          if (err?.response?.data?.errors?.productCategoryId) {
              this.$toast.error(err?.response?.data?.errors?.productCategoryId?.msg)
          }
      } finally{
        this.$store.commit('loaders/hide')
      }
    },
  },
}
</script>

<style scoped>
.main-dashboard-content-form-data {
    padding: 10px 20px;
    display: block;
}

.main-dashboard-content-form-data .form-label {
    font-weight: 700;
}

.main-dashboard-content-form-data .custom-btn {
    border: solid 1px #02b8f4;
    background-color: #02b8f4;
    padding: 0.475rem 1.95rem;
}
</style>