<template>
  <div>
    <DashboardHeader header-name="Enquiry View" />

    <div class="main-dashboard-content-form-data">
      <div class="mb-3">
        <table class="table">
          <thead>
            <tr class="table-primary">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ id }}</td>
              <td>{{ name }}</td>
              <td>{{ phone }}</td>
              <td>{{ email }}</td>
              <td>{{ subject }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-3">
        <label class="form-label">Message from {{name}} :</label>
        <p>{{message}}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnquiryViewPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  computed:{
    id(){
        return this.$route.params.id;
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

.main-dashboard-content-form-data table {
  /* Make sure the inner table is always as wide as needed */
  width: 100%;
  border-spacing: 0;
  text-align: center;
}
</style>