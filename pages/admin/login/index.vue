<template>
  <div class="login-container">
    <h4>Sign In</h4>
    <p class="sub-title">Enter your email and password to login.</p>
    <div class="form-container">
        <p v-if="error" style="color:red">{{errorMessage}}</p>
      <form @submit.prevent="formHandler">
        <div class="mb-3">
          <label class="form-label">Email Address</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            class="form-control"
          />
        </div>

        <label class="form-label">Password</label>
        <div class="input-group mb-3">
          <input
            id="basic-addon2"
            v-model="password"
            :type="passwordController ? 'password' : 'text'"
            class="form-control input-group-field"
            placeholder="Enter your password"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" @click="setPasswordController">{{
            passwordControllerValue
          }}</span>
        </div>

        <div class="mb-3">
          <button class="btn btn-primary custom-btn">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'AuthLayout',
  data() {
    return {
      email: '',
      password: '',
      passwordController: true,
      passwordControllerValue: 'show',
      error: false,
      errorMessage: '',
    }
  },
  methods: {
    setPasswordController() {
      this.passwordController = !this.passwordController
      if (this.passwordController) {
        this.passwordControllerValue = 'show'
      } else {
        this.passwordControllerValue = 'hide'
      }
    },
    async formHandler(){
        this.error = false
        this.errorMessage = ''

        if (this.email === '') {
            this.error = true
            this.errorMessage = 'Please enter your email'
            return false;
        } else if (!(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(this.email))) { // eslint-disable-line
            this.error = true
            this.errorMessage = 'Please enter a valid email'
            return false;
        }

        if (this.password === '') {
            this.error = true
            this.errorMessage = 'Please enter your password'
            return false;
        } else if (!(/^[a-z 0-9~%.:_\@\-\/\&+=,]+$/i.test(this.password))) { // eslint-disable-line
            this.error = true
            this.errorMessage = 'Please enter a valid password'
            return false;
        }

        this.$store.commit('loaders/show')
        try {
            const response = await this.$auth.loginWith('local', { data: {email:this.email, password:this.password} }) // eslint-disable-line
            this.$auth.$storage.setState('accessToken', response.data.accessToken)
            this.$store.commit('loaders/hide')
        } catch (err) {
            console.log(err)// eslint-disable-line
            this.$store.commit('loaders/hide')
            if (err?.response?.data?.message) {
                this.$toast.error(err?.response?.data?.message)
            }
            if (err?.response?.data?.errors?.password) {
                this.$toast.error(err?.response?.data?.errors?.password?.msg)
            }
            if (err?.response?.data?.errors?.email) {
                this.$toast.error(err?.response?.data?.errors?.email?.msg)
            }
        }
    }
  },
}
</script>

<style scoped>
.sub-title {
  font-weight: 500;
  color: gray;
}

.login-container label {
  font-weight: 500;
}

.login-container .input-group-text {
  color: #02b8f4;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-left: none;
  cursor: pointer;
}

.login-container .input-group-field {
  border-right: none;
}

.login-container .custom-btn {
  background-color: #02b8f4;
  border-color: #02b8f4;
  width: 100%;
}

.custom-link {
  font-weight: 500;
}
</style>