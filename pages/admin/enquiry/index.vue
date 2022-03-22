<template>
  <div>
    <DashboardHeader header-name="Enquiries" />
    <div class="main-dashboard-table-data">
      <table class="table table-striped table-hover">
        <thead>
          <tr class="table-primary">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in enquiries" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.subject }}</td>
            <td>{{ new Date(item.created_at).getDate() }}-{{ new Date(item.created_at).getMonth()+1 }}-{{ new Date(item.created_at).getFullYear() }}</td>
            <td>
              <NuxtLink
                :to="'/admin/enquiry/view/' + item.id"
                class="viewBtn"
                title="view"
                ><font-awesome-icon :icon="['fa', 'eye']"
              /></NuxtLink>
              <NuxtLink
                :to="'/admin/enquiry/edit/' + item.id"
                class="editBtn"
                title="edit"
                ><font-awesome-icon :icon="['fa', 'pen-to-square']"
              /></NuxtLink>
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
                @click="getEnquries(currentPage - 1)"
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
                @click="getEnquries(currentPage + 1)"
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
  name: 'EnquiryPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      enquiries: [],
      currentPage: 0,
      totalItems: 0,
      totalPages: 0,
    }
  },
  mounted() {
    this.getEnquries()
  },
  methods: {
    async getEnquries(page = 0) {
      this.$store.commit('loaders/show')
      try {
        const response = await this.$api.get(`/enquiry/view?page=${page}`)
        this.enquiries = response.data.data.enquiry
        this.currentPage = parseInt(response.data.data.currentPage)
        this.totalItems = parseInt(response.data.data.totalItems)
        this.totalPages = parseInt(response.data.data.totalPages)
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
                await this.$api.delete(`/enquiry/delete/${id}`)
                this.$toast.success('Data deleted successfully')
                this.getEnquries(this.currentPage)
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
</style>