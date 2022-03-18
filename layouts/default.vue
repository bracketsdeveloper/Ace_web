<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <Loader v-if="loader" />
  </div>
</template>

<script>
export default {
  name: 'MainDefault',
  computed: {
    loader () {
      return this.$store.state.loaders.loader
    }
  },
}
</script>