<template>
  <div>
    <DashboardHeader header-name="Product Item View" />

    <div class="main-dashboard-content-form-data">
      <div class="mb-3">
        <table class="table">
          <thead>
            <tr class="table-primary">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Sub-Category</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ id }}</td>
              <td>{{ name }}</td>
              <td>{{ price }}</td>
              <td>{{ category }}</td>
              <td>{{ subcategory }}</td>
              <td><img :src="apiLink+'products/'+image" style="max-width:100px" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-3">
        <label class="form-label">Description :</label>
        <p>{{description}}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductViewPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name: '',
      price: '',
      description: '',
      category: '',
      subcategory: '',
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
    this.getProduct()
  },
  methods: {
    async getProduct() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/product/view/${this.$route.params.id}`
        )
        this.name = response.data.data.name
        this.price = response.data.data.price
        this.description = response.data.data.description
        this.category = response.data.data.productCategories.name
        this.subcategory = response.data.data.productSubCategoryId!=null ? response.data.data.productSubCategories.name : ''
        this.image = response.data.data.image
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/products/items'
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