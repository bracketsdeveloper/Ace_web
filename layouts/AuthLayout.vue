<template>
  <div class="main">
      <div class="container-fluid auth-wrapper">
        <div class="auth-inner-container">
          <div class="logo-img-container">
            <img src="/assets/images/logo.png" alt="logo" />
          </div>
          <Nuxt />
        </div>
      </div>
      <Loader v-if="loader" />
    </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  middleware:'customAuth',
  computed: {
    loader () {
      return this.$store.state.loaders.loader
    }
  },
}
</script>

<style scoped>
.main{
    width: 100%;
    min-height: 100vh;
    background-color:#e6e6e6;
}

.auth-wrapper{
    display:grid;
    place-items: center;
    min-height: 100vh;
    padding: 70px 0;
}

.auth-inner-container{
    background-color: white;
    padding:40px 35px;
    width: 35%;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 3px #ccc;
}

.logo-img-container{
    width:100%;
    position: relative;
}

.logo-img-container img{
    width: 50%;
    position: relative;
    background: #fff;
    padding: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin: 0 auto;
    display: block;
}
</style>