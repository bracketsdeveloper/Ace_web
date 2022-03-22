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
        <label class="form-label">Designation</label>
        <input
        v-model="designation"
          type="text"
          placeholder="Enter the designation"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea
        v-model="message"
          type="text"
          placeholder="Enter the message"
          class="form-control"
        />
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
        <button class="btn btn-primary custom-btn" @click="createTestimonial">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCreatePage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name:'',
      designation:'',
      message:'',
      image:null,
      error:'',
      errorMessage:''
    }
  },
  methods: {

    async createTestimonial() {
      this.error = false
      this.errorMessage = ''

      if (this.name === '') {
          this.error = true
          this.errorMessage = 'Please enter the name'
          return false;
      } else if (!(/^[a-zA-Z\s]*$/.test(this.name))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid name'
          return false;
      }

      if (this.designation === '') {
          this.error = true
          this.errorMessage = 'Please enter the designation'
          return false;
      } else if (!(/^[a-z 0-9~%.:_\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.designation))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid designation'
          return false;
      }

      if (this.message === '') {
          this.error = true
          this.errorMessage = 'Please enter the message'
          return false;
      } else if (!(/^[a-z 0-9~%.:_\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.message))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid message'
          return false;
      }

      if (this.image === null) {
          this.error = true
          this.errorMessage = 'Please enter the image'
          return false;
      } else if (this.image.type != 'image/png' && this.image.type != 'image/jpg' && this.image.type != 'image/jpeg') { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid image'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const formData = new FormData()
          formData.append('name',this.name)
          formData.append('designation',this.designation)
          formData.append('message',this.message)
          formData.append('image',this.image)
          const response = await this.$api.post(`/testimonial/create`, formData ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.name = ''
          this.designation = ''
          this.message = ''
          this.image = null
          this.$toast.success('Date Created Successfully')
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.name) {
              this.$toast.error(err?.response?.data?.errors?.name?.msg)
          }
          if (err?.response?.data?.errors?.designation) {
              this.$toast.error(err?.response?.data?.errors?.designation?.msg)
          }
          if (err?.response?.data?.errors?.message) {
              this.$toast.error(err?.response?.data?.errors?.message?.msg)
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