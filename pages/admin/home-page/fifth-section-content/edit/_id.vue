<template>
  <div>
    <DashboardHeader header-name="Fifth Section Content Edit" />
    <div class="main-dashboard-content-form-data">
        <p v-if="error" style="color:red;text-align:center">{{errorMessage}}</p>
      <div class="mb-3">
        <label class="form-label">Heading</label>
        <input
            v-model="heading"
          type="text"
          placeholder="Enter your heading"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Paragraph</label>
        <textarea
        v-model="paragraph"
          type="text"
          placeholder="Enter your paragraph"
          class="form-control"
        />
      </div>

      <div class="mt-5 mb-3">
        <button class="btn btn-primary custom-btn" @click="updateFifthSectionContent">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FifthSectionContentEditPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      heading:'',
      paragraph:'',
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
    this.getFifthSectionContent()
  },
  methods: {
    async getFifthSectionContent() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/home-page-fifth-section-content/view/${this.$route.params.id}`
        )
        this.heading = response.data.data.heading
        this.paragraph = response.data.data.paragraph
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/home-page/fifth-section-content'
            })
        }
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async updateFifthSectionContent() {
      this.error = false
      this.errorMessage = ''

      if (this.heading === '') {
          this.error = true
          this.errorMessage = 'Please enter the heading'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.heading))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid heading'
          return false;
      }

      if (this.paragraph === '') {
          this.error = true
          this.errorMessage = 'Please enter the paragraph'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\<\>\'+=,]+$/i.test(this.paragraph))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid paragraph'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const response = await this.$api.post(`/home-page-fifth-section-content/edit/${this.$route.params.id}`, {heading:this.heading, paragraph:this.paragraph} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.$toast.success('Data Updated Successfully')
          this.getFifthSectionContent()
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.heading) {
              this.$toast.error(err?.response?.data?.errors?.heading?.msg)
          }
          if (err?.response?.data?.errors?.paragraph) {
              this.$toast.error(err?.response?.data?.errors?.paragraph?.msg)
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