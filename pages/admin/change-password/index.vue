<template>
  <div>
    <DashboardHeader header-name="Change Password" />
    <div class="main-dashboard-content-form-data">
        <p v-if="error" style="color:red;text-align:center">{{errorMessage}}</p>
      <div class="mb-3">
        <label class="form-label">Current Password</label>
        <input
            v-model="oldPassword"
          type="password"
          placeholder="Enter the current password"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">New Password</label>
        <input
            v-model="password"
          type="password"
          placeholder="Enter the new password"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Confirm Password</label>
        <input
            v-model="cpassword"
          type="password"
          placeholder="Enter the confirm password"
          class="form-control"
        />
      </div>

      <div class="mt-5 mb-3">
        <button class="btn btn-primary custom-btn" @click="updatePassword">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePasswordPage',
  layout: 'AdminDashboardLayout',
  data() {
    return {
      oldPassword:'',
      password:'',
      cpassword:'',
      error:'',
      errorMessage:''
    }
  },
  methods: {

    async updatePassword() {
      this.error = false
      this.errorMessage = ''

      if (this.oldPassword === '') {
          this.error = true
          this.errorMessage = 'Please enter the current password'
          return false;
      } else if (!(/^[a-z 0-9~%.:_\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.oldPassword))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid current password'
          return false;
      }

      if (this.password === '') {
          this.error = true
          this.errorMessage = 'Please enter the new password'
          return false;
      } else if (!(/^[a-z 0-9~%.:_\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.password))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid new password'
          return false;
      }

      if (this.cpassword === '') {
          this.error = true
          this.errorMessage = 'Please enter the confirm password'
          return false;
      } else if (!(/^[a-z 0-9~%.:_\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&+=,]+$/i.test(this.cpassword))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid confirm password'
          return false;
      } else if (this.cpassword !== this.password) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Confirm password must match the new password'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const response = await this.$api.post(`/auth/change-password`, {oldPassword:this.oldPassword,password:this.password,cpassword:this.cpassword} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.oldPassword = ''
          this.password = ''
          this.cpassword = ''
          this.$toast.success('Password Updated Successfully')
      } catch (err) {
          console.log(err)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.oldPassword) {
              this.$toast.error(err?.response?.data?.errors?.oldPassword?.msg)
          }
          if (err?.response?.data?.errors?.password) {
              this.$toast.error(err?.response?.data?.errors?.password?.msg)
          }
          if (err?.response?.data?.errors?.cpassword) {
              this.$toast.error(err?.response?.data?.errors?.cpassword?.msg)
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