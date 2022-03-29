<template>
  <div class="App">
    <BreadCrumb page-name="Contact Us" bg-image="bread1.png" />
    <section class="wpo-contact-pg-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col col-lg-10 offset-lg-1">
            <div class="office-info">
              <div class="row">
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <font-awesome-icon :icon="['fa', 'location-dot']" />
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>Address</h2>
                      <p>#1, 1st Floor, Vasavi Complex, 147, Seshadripuram Main Road, Bangalore - 560020</p>
                    </div>
                  </div>
                </div>
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <font-awesome-icon :icon="['fa', 'envelope']" />
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>Email Us</h2>
                      <p>info@acegiftingsolutions.com</p>
                      <p>ritika@acegiftingsolutions.com</p>
                    </div>
                  </div>
                </div>
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <font-awesome-icon :icon="['fa', 'phone']" />
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>Call Now</h2>
                      <p>+91 81510 56671</p>
                      <p>+91 80959 56671</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpo-contact-title">
              <h2>Have Any Question?</h2>
              <p>
                If you have any queries about our product range or shipping, get in touch and we will assist you gladly.
              </p>
            </div>
            <div class="wpo-contact-form-area">
              <p v-if="error" style="color:red;text-align:center">{{errorMessage}}</p>
              <form class="form" @submit.prevent="formHandler">
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-field">
                      <input
                      v-model="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                      <p></p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-field">
                      <input
                      v-model="phone"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value=""
                      />
                      <p></p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-field">
                      <input
                      v-model="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                      <p></p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-field">
                      <input
                      v-model="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                      <p></p>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-field">
                      <textarea v-model="message" name="message" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-submit">
                      <button type="submit" class="theme-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section class="wpo-contact-map-section">
        <div class="wpo-contact-map">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.651740058251!2d77.57576581482226!3d12.994112490841115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17469f168e05%3A0xdce4c7510fe2c2a7!2sAce%20Gifting%20Solutions!5e0!3m2!1sen!2sin!4v1648555261527!5m2!1sen!2sin" 
          ></iframe>
        </div>
      </section>
    </section>
  </div>
</template>


<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'ContactUsPage',
  data() {
    return {
      name:'',
      email:'',
      phone:'',
      subject:'',
      message:'',
      error: false,
      errorMessage: '',
    }
  },
  mounted() {
    AOS.init()
  },
  updated() {
    AOS.init()
  },
  methods: {
    async formHandler(){
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
      } else if (!(/^[a-z 0-9~%.:_\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.subject))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid subject'
          return false;
      }

      if (this.message === '') {
          this.error = true
          this.errorMessage = 'Please enter your message'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.message))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid message'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const response = await this.$publicApi.post('/enquiry/create', {email:this.email, name:this.name, phone:this.phone, subject:this.subject, message:this.message} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.email = ''
          this.phone = ''
          this.name = ''
          this.subject = ''
          this.message = ''
          this.$toast.success('Message Delivered Successfully')
          this.$store.commit('loaders/hide')
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
          this.$store.commit('loaders/hide')
      }
    }
  }
}
</script>

<style scoped>
.wpo-contact-pg-section .office-info .office-info-item {
    min-height: 340px;
}
</style>