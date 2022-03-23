<template>
  <div>
    <DashboardHeader header-name="Second Section Edit" />
    <div class="main-dashboard-content-form-data">
        <p v-if="error" style="color:red;text-align:center">{{errorMessage}}</p>
      <div class="mb-3">
        <label class="form-label">Heading</label>
        <input
            v-model="heading"
          type="text"
          placeholder="Enter the heading"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Paragraph</label>
        <textarea
        v-model="paragraph"
          type="text"
          placeholder="Enter the paragraph"
          class="form-control"
        />
      </div>

      <div class="mt-5 mb-3">
        <button class="btn btn-primary custom-btn" @click="updateSecondSection">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondSectionEditPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      heading:'',
      paragraph:'',
      error:'',
      errorMessage:''
    }
  },
  mounted() {
    this.getSecondSection()
  },
  methods: {
    async getSecondSection() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/home-page-second-section`
        )
        this.heading = response.data.data.heading
        this.paragraph = response.data.data.paragraph
      } catch (err) {
        console.log(err) // eslint-disable-line
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async updateSecondSection() {
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
          const response = await this.$api.post(`/home-page-second-section`, {heading:this.heading, paragraph:this.paragraph} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.$toast.success('Data Updated Successfully')
          this.getSecondSection()
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