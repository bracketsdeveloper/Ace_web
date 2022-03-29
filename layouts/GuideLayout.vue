<template>
  <div>
    <HeaderGuide />
    <Nuxt />
    <Footer />
    <Loader v-if="loader" />
  </div>
</template>

<script>
export default {
  name: 'GuideLayout',
  computed: {
    loader () {
      return this.$store.state.loaders.loader
    }
  },
  mounted(){
    const aceCart = localStorage.getItem('aceCart')
    if(aceCart===undefined || aceCart===null){
      const cart = [];
      localStorage.setItem('aceCart', JSON.stringify(cart))
    }else{
      const data = JSON.parse(aceCart)
      this.$store.commit('carts/setCart',data)
    }
  }
}
</script>