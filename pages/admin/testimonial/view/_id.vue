<template>
  <div>
    <DashboardHeader header-name="Testimonial View" />

    <div class="main-dashboard-content-form-data">
      <div class="mb-3">
        <table class="table">
          <thead>
            <tr class="table-primary">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ id }}</td>
              <td>{{ name }}</td>
              <td>{{ designation }}</td>
              <td><img :src="'https://ace-nuxt-backend.herokuapp.com/uploads/'+image" style="max-width:100px" /></td>
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
  name: 'TestimonialViewPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name: '',
      designation: '',
      message: '',
      image: '',
    }
  },
  computed:{
    id(){
        return this.$route.params.id;
    }
  },
  mounted() {
    this.getTestimonial()
  },
  methods: {
    async getTestimonial() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/testimonial/view/${this.$route.params.id}`
        )
        this.name = response.data.data.name
        this.designation = response.data.data.designation
        this.message = response.data.data.message
        this.image = response.data.data.image
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/testimonial'
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

.table th, .table td {
    vertical-align: middle !important;
}
</style>