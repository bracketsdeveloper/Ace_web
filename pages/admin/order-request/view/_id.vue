<template>
  <div>
    <DashboardHeader header-name="Order Request View" />

    <div class="main-dashboard-content-form-data">
      <div class="mb-3">
        <table class="table">
          <thead>
            <tr class="table-primary">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ id }}</td>
              <td>{{ name }}</td>
              <td>{{ phone }}</td>
              <td>{{ email }}</td>
              <td>{{ new Date(created_at).getDate() }}-{{ new Date(created_at).getMonth()+1 }}-{{ new Date(created_at).getFullYear() }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-3">
        <label class="form-label">Message from {{name}} :</label>
        <p>{{message}}</p>
        <hr />
      </div>
      <div class="mb-3">
        <h5 class="form-label" style="color:black;font-style:italic;">Products requested by {{name}} :</h5>
        <table class="table">
          <thead>
            <tr class="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in orderRequestProduct" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ item.product.name }}</td>
              <td>{{ item.product.price }}</td>
              <td><img :src="apiLink+'products/'+item.product.image" style="max-width:100px" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderRequestViewPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
      created_at: '',
      orderRequestProduct:[]
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
    this.getOrderRequest()
  },
  methods: {
    async getOrderRequest() {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(
          `/order-request/view/${this.$route.params.id}`
        )
        this.name = response.data.data.name
        this.phone = response.data.data.phone
        this.email = response.data.data.email
        this.message = response.data.data.message
        this.created_at = response.data.data.created_at
        this.orderRequestProduct = response.data.data.orderRequestProducts
      } catch (err) {
        console.log(err) // eslint-disable-line
        if (err?.response?.data?.errors?.id) {
            this.$toast.error(err?.response?.data?.errors?.id?.msg)
            this.$router.push({
              path:'/admin/order-request'
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