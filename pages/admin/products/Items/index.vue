<template>
  <div>
    <DashboardHeader header-name="Product Items" :link="true" route-link="/admin/products/items/create" route-name="CREATE" />
    <div class="main-dashboard-table-data">
      <div>
        <form style="width:300px;margin-left:auto;margin-bottom:20px;" @submit.prevent="handleSearch">
          <b-input-group prepend="Search">
            <b-form-input  v-model="searchText" @input="handleSearch"></b-form-input>
          </b-input-group>
        </form>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr class="table-primary">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Sub-category</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.productCategories.name }}</td>
            <td>{{ item.productSubCategoryId!=null ? item.productSubCategories.name : '' }}</td>
            <td><img :src="apiLink+'products/'+item.image" style="max-width:100px" /></td>
            <td>
              <button
                class="viewBtn"
                title="view"
                style="outline:none;border:none;"
                @click="navigate('/admin/products/items/view/',item.id)"
                ><font-awesome-icon :icon="['fa', 'eye']"
              /></button>
              <button
                class="editBtn"
                title="edit"
                style="outline:none;border:none;"
                @click="navigate('/admin/products/items/edit/',item.id)"
                ><font-awesome-icon :icon="['fa', 'pen-to-square']"
              /></button>
              <button class="deleteBtn" title="delete" @click="deleteEnquiry(item.id)">
                <font-awesome-icon :icon="['fa', 'trash']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="text-align: center">
        <nav aria-label="..." class="pagination--nav">
          <ul class="pagination">
            <li
              :class="
                totalPages === 0 || currentPage === 0
                  ? 'page-item disabled'
                  : 'page-item'
              "
            >
              <button
                class="page-link"
                tabindex="-1"
                :aria-disabled="
                  totalPages === 0 || currentPage === 0 ? 'true' : 'false'
                "
                @click="getProducts(currentPage - 1)"
              >
                Previous
              </button>
            </li>
            <li class="page-item active" aria-current="page">
              <button class="page-link" href="#">
                {{ currentPage + 1 }} of {{ totalPages }}
              </button>
            </li>
            <li
              :class="
                totalPages === 0 || currentPage === totalPages - 1
                  ? 'page-item disabled'
                  : 'page-item'
              "
            >
              <button
                class="page-link"
                tabindex="-1"
                :aria-disabled="
                  totalPages === 0 || currentPage === totalPages - 1
                    ? 'true'
                    : 'false'
                "
                @click="getProducts(currentPage + 1)"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ProductcPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      products: [],
      currentPage: 0,
      totalItems: 0,
      totalPages: 0,
      searchText:''
    }
  },
  computed:{
    apiLink (){
      return this.$store.state.apis.link
    },
    pageNum (){
      return this.$store.state.pages.page
    },
  },
  mounted() {
    this.getProducts(this.$store.state.pages.page)
  },
  methods: {
    async getProducts(page = 0) {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(`/product/view-custom?page=${page}&size=10&sort=id&sortType=DESC&search=${this.searchText}`)
        this.products = response.data.data.products
        this.currentPage = parseInt(response.data.data.currentPage)
        this.totalItems = parseInt(response.data.data.totalItems)
        this.totalPages = parseInt(response.data.data.totalPages)
        this.$store.commit('pages/set',{page:0})
      } catch (err) {
        console.log(err) // eslint-disable-line
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async deleteEnquiry(id) {
        if (confirm("Are you sure you want to delete this?") === true) {
            this.$store.commit('loaders/show')
            try {
                await this.$api.delete(`/product/delete/${id}`)
                this.$toast.success('Data deleted successfully')
                this.getProducts(this.currentPage)
            } catch (err) {
                console.log(err) // eslint-disable-line
                this.$toast.error('Something went wrong! Please try again')
            } finally{
                this.$store.commit('loaders/hide')
            }
        }
    },

    navigate(link,id){
      this.$store.commit('pages/set',{page:this.currentPage})
      this.$router.push({
          path: link+id
      })
    },
    handleSearch(){
      this.getProducts()
    }
  },
}
</script>

<style scoped>
.main-dashboard-counters {
  padding: 10px 20px;
  width: 100%;
}

.main-dashboard-counters .main-dashboard-counters-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.main-dashboard-table-data {
  padding: 10px 20px;
  display: block;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 30px;
}

.main-dashboard-table-data table {
  /* Make sure the inner table is always as wide as needed */
  width: 100%;
  border-spacing: 0;
  text-align: center;
}

.main-dashboard-table-data table th {
  border-width: 0px !important;
}

.main-dashboard-table-data .editBtn,
.main-dashboard-table-data .viewBtn {
  background-color: rgb(5, 141, 34);
  color: white !important;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 16px;
  transition: all 0.3s ease-in-out;
}

.main-dashboard-table-data .editBtn {
  margin-left: 5px;
  background-color: rgb(30, 5, 141) !important;
}
.main-dashboard-table-data .deleteBtn {
  background-color: rgb(141, 5, 28);
  color: white !important;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 16px;
  outline: none;
  border: none;
  margin-left: 5px;
  transition: all 0.3s ease-in-out;
}

.main-dashboard-table-data .deleteBtn:hover,
.main-dashboard-table-data .viewBtn:hover,
.main-dashboard-table-data .editBtn:hover {
  box-shadow: 2px 2px 6px 0px #818181;
}

.main-dashboard-table-data .page-item.active .page-link {
  background-color: #42b8f4;
  border-color: #42b8f4;
}

.page-link {
  font-size: 15px;
}

.pagination--nav {
  display: inline-block;
}

.table th, .table td {
    vertical-align: middle !important;
}
</style>