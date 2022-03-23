<template>
  <div>
    <DashboardHeader header-name="Enquiry Edit" />
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
        <label class="form-label">Phone</label>
        <input
        v-model="phone"
          type="text"
          placeholder="Enter your phone"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label"
          >Email</label
        >
        <input
        v-model="email"
          type="email"
          placeholder="Enter your email"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Subject</label>
        <input
        v-model="subject"
          type="text"
          placeholder="Enter your subject"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea
        v-model="message"
          type="text"
          placeholder="Enter your message"
          class="form-control"
        />
      </div>

      <div class="mt-5 mb-3">
        <button class="btn btn-primary custom-btn" @click="updateEnquiry">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnquiryEditPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name:'',
      phone:'',
      email:'',
      subject:'',
      message:'',
      error:'',
      errorMessage:''
    }
  },
  mounted() {
    this.getEnquiry()
  },
  methods: {
    async getEnquiry() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/enquiry/view/${this.$route.params.id}`
        )
        this.name = response.data.data.name
        this.phone = response.data.data.phone
        this.email = response.data.data.email
        this.subject = response.data.data.subject
        this.message = response.data.data.message
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/enquiry'
            })
        }
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async updateEnquiry() {
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

      if (this.phone === '') {
          this.error = true
          this.errorMessage = 'Please enter your phone'
          return false;
      } else if (!(/^[0-9\s]*$/.test(this.phone))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid phone'
          return false;
      } else if (this.phone.length < 10 || this.phone.length > 10) { 
          this.error = true
          this.errorMessage = 'Please enter a valid phone'
          return false;
      }

      if (this.email === '') {
          this.error = true
          this.errorMessage = 'Please enter your email'
          return false;
      } else if (!(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(this.email))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid email'
          return false;
      }

      if (this.subject === '') {
          this.error = true
          this.errorMessage = 'Please enter your subject'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.subject))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid subject'
          return false;
      }

      if (this.message === '') {
          this.error = true
          this.errorMessage = 'Please enter your message'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.message))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid message'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const response = await this.$api.post(`/enquiry/edit/${this.$route.params.id}`, {email:this.email, name:this.name, phone:this.phone, subject:this.subject, message:this.message} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.$toast.success('Date Updated Successfully')
          this.getEnquiry()
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.name) {
              this.$toast.error(err?.response?.data?.errors?.name?.msg)
          }
          if (err?.response?.data?.errors?.phone) {
              this.$toast.error(err?.response?.data?.errors?.phone?.msg)
          }
          if (err?.response?.data?.errors?.email) {
              this.$toast.error(err?.response?.data?.errors?.email?.msg)
          }
          if (err?.response?.data?.errors?.subject) {
              this.$toast.error(err?.response?.data?.errors?.subject?.msg)
          }
          if (err?.response?.data?.errors?.message) {
              this.$toast.error(err?.response?.data?.errors?.message?.msg)
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