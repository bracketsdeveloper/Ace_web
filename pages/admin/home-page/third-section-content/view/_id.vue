<template>
  <div>
    <DashboardHeader header-name="Third Section Content View" />

    <div class="main-dashboard-content-form-data">
      <div class="mb-3">
        <table class="table">
          <thead>
            <tr class="table-primary">
              <th scope="col">Id</th>
              <th scope="col">Heading</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ id }}</td>
              <td>{{ heading }}</td>
              <td><img :src="apiLink+'uploads/'+image" style="max-width:100px" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-3">
        <label class="form-label">Paragraph :</label>
        <p>{{paragraph}}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdSectionContentViewPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      heading: '',
      paragraph: '',
      image: '',
    }
  },
  computed:{
    id(){
        return this.$route.params.id;
    },
    apiLink (){
      return this.$store.state.apis.link
    }
  },
  mounted() {
    this.getThirdSectionContent()
  },
  methods: {
    async getThirdSectionContent() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/home-page-third-section-content/view/${this.$route.params.id}`
        )
        this.heading = response.data.data.heading
        this.paragraph = response.data.data.paragraph
        this.image = response.data.data.image
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/home-page/third-section-content'
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