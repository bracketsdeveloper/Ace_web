<template>
  <div>
    <DashboardHeader header-name="Fifth Section Content" :link="true" route-link="/admin/home-page/fifth-section-content/create" route-name="CREATE" />
    <div class="main-dashboard-table-data">
      <table class="table table-striped table-hover">
        <thead>
          <tr class="table-primary">
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in content" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ item.heading }}</td>
            <td>{{ new Date(item.created_at).getDate() }}-{{ new Date(item.created_at).getMonth()+1 }}-{{ new Date(item.created_at).getFullYear() }}</td>
            <td>
              <NuxtLink
                :to="'/admin/home-page/fifth-section-content/view/' + item.id"
                class="viewBtn"
                title="view"
                ><font-awesome-icon :icon="['fa', 'eye']"
              /></NuxtLink>
              <NuxtLink
                :to="'/admin/home-page/fifth-section-content/edit/' + item.id"
                class="editBtn"
                title="edit"
                ><font-awesome-icon :icon="['fa', 'pen-to-square']"
              /></NuxtLink>
              <button class="deleteBtn" title="delete" @click="deleteFifthSectionContent(item.id)">
                <font-awesome-icon :icon="['fa', 'trash']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FifthSectionContentPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      content: [],
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
        const response = await this.$api.get(`/home-page-fifth-section-content/view`)
        this.content = response.data.data
      } catch (err) {
        console.log(err) // eslint-disable-line
      } finally{
        this.$store.commit('loaders/hide')
      }
    },

    async deleteFifthSectionContent(id) {
        if (confirm("Are you sure you want to delete this?") === true) {
            this.$store.commit('loaders/show')
            try {
                await this.$api.delete(`/home-page-fifth-section-content/delete/${id}`)
                this.$toast.success('Data deleted successfully')
                this.getFifthSectionContent()
            } catch (err) {
                console.log(err) // eslint-disable-line
                this.$toast.error('Something went wrong! Please try again')
            } finally{
                this.$store.commit('loaders/hide')
            }
        }
    },
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