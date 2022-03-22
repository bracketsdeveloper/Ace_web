<template>
  <div>
    <DashboardHeader header-name="Product Item Edit" />
    <div class="main-dashboard-content-form-data">
        <p v-if="error" style="color:red;text-align:center">{{errorMessage}}</p>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
            v-model="name"
          type="text"
          placeholder="Enter your name"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Price</label>
        <input
        v-model="price"
          type="text"
          placeholder="Enter your price"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea
        v-model="description"
          type="text"
          placeholder="Enter your description"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Product Category</label>
        <select v-model="productCategoryId" class="form-control">
          <option v-for="(item, index) in category" :key="index" :value="item.id">{{item.name}}</option>
        </select>
      </div>

      <div v-if="extImage!==''" class="mb-3">
        <label class="form-label">Existing Image</label><br />
        <img :src="'http://localhost:8080/products/'+extImage" style="max-width:100px" />
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
        <button class="btn btn-primary custom-btn" @click="updateTestimonial">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductEditPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name: '',
      price: '',
      description: '',
      extImage: '',
      image:null,
      category:[],
      productCategoryId:'',
      error:'',
      errorMessage:''
    }
  },
  mounted() {
    this.getProduct()
    this.getCategory()
  },
  methods: {
    async getProduct() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/product/view/${this.$route.params.id}`
        )
        this.name = response.data.data.name
        this.price = response.data.data.price
        this.description = response.data.data.description
        this.productCategoryId = response.data.data.productCategoryId
        this.extImage = response.data.data.image
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/products/items'
            })
        }
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async getCategory() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(`/product-category/view-categories`)
        this.category = response.data.data
      } catch (err) {
        console.log(err) // eslint-disable-line
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async updateTestimonial() {
      this.error = false
      this.errorMessage = ''

      if (this.name === '') {
          this.error = true
          this.errorMessage = 'Please enter your name'
          return false;
      } else if (!(/^[a-zA-Z\s]*$/.test(this.name))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid name'
          return false;
      }

      if (this.price === '') {
          this.error = true
          this.errorMessage = 'Please enter your price'
          return false;
      } else if (!(/^[a-z 0-9~%.:_\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.price))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid price'
          return false;
      }

      if (this.description === '') {
          this.error = true
          this.errorMessage = 'Please enter your description'
          return false;
      } else if (!(/^[a-z 0-9~%.:_\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.description))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid description'
          return false;
      }

      if (this.image !== null) {
          if (this.image.type != 'image/png' && this.image.type != 'image/jpg' && this.image.type != 'image/jpeg') { // eslint-disable-line
            this.error = true
            this.errorMessage = 'Please enter a valid image'
            return false;
        }
      } 

      this.$store.commit('loaders/show')
      try {
          const formData = new FormData()
          formData.append('name',this.name)
          formData.append('price',this.price)
          formData.append('description',this.description)
          formData.append('productCategoryId',this.productCategoryId)
          if (this.image !== null) {
            formData.append('image',this.image)
          }
          const response = await this.$api.post(`/product/edit/${this.$route.params.id}`, formData ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.$toast.success('Date Updated Successfully')
          this.getProduct()
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
          if (err?.response?.data?.errors?.productCategoryId) {
              this.$toast.error(err?.response?.data?.errors?.productCategoryId?.msg)
          }
          if (err?.response?.data?.errors?.image) {
              this.$toast.error(err?.response?.data?.errors?.image?.msg)
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