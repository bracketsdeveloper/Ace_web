<template>
  <div class="container error--container">
    <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
    <h1 v-if="error.statusCode === 404">404 | Page Not Found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/" class="btn btn-primary" style="margin-top:15px;">Go To Home page</NuxtLink>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    name: 'ErrorDefault',
    props: ['error'],// eslint-disable-line
    mounted() {
        AOS.init()
    },
    updated() {
        AOS.init()
    },
}
</script>

<style scoped>
.error--container{
    min-height: 65vh;
    padding-top: 100px;
    display: grid;
    place-content: center;
    place-items: center;
}

.fa-triangle-exclamation{
    color: red;
    font-size: 50px;
    margin-bottom: 15px;
}
</style>