<template>
  <div>
    <DashboardHeader header-name="Second Section Banner Edit" />
    <div class="main-dashboard-content-form-data">
        <p v-if="error" style="color:red;text-align:center">{{errorMessage}}</p>

      <div v-if="extImage!==''" class="mb-3">
        <label class="form-label">Existing Image</label><br />
        <img :src="apiLink+'uploads/'+extImage" style="max-width:100px" />
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
        <button class="btn btn-primary custom-btn" @click="updateSecondSectionBanner">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondSectionBannerEditPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      extImage: '',
      image:null,
      error:'',
      errorMessage:''
    }
  },
  computed:{
    apiLink (){
      return this.$store.state.apis.link
    }
  },
  mounted() {
    this.getSecondSectionBanner()
  },
  methods: {
    async getSecondSectionBanner() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/home-page-second-section-banner`
        )
        this.extImage = response.data.data.image
      } catch (err) {
        console.log(err) // eslint-disable-line
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async updateSecondSectionBanner() {
      this.error = false
      this.errorMessage = ''

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
          formData.append('image',this.image)
          const response = await this.$api.post(`/home-page-second-section-banner`, formData ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.image = null
          this.$toast.success('Data Updated Successfully')
          this.getSecondSectionBanner()
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
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