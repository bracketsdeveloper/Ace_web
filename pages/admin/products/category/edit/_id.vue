<template>
  <div>
    <DashboardHeader header-name="Category Edit" />
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

      <div class="mt-5 mb-3">
        <button class="btn btn-primary custom-btn" @click="updateCategory">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryEditPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name:'',
      error:'',
      errorMessage:''
    }
  },
  mounted() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/product-category/view/${this.$route.params.id}`
        )
        this.name = response.data.data.name
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

    async updateCategory() {
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

      this.$store.commit('loaders/show')
      try {
          const response = await this.$api.post(`/product-category/edit/${this.$route.params.id}`, {name:this.name} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.$toast.success('Date Updated Successfully')
          this.getCategory()
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