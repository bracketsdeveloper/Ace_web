<template>
    <div class="main-dashboard-header">
            <p>{{headerName}}</p>
            <NuxtLink v-if="link" class="header-link-btn" :to="routeLink">{{routeName}}</NuxtLink>
    </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props:{
      headerName:{
          type: String,
          default: ''
      },
      link:{
          type: Boolean,
          default: false
      },
      routeName:{
          type: String,
          default: ''
      },
      routeLink:{
          type: String,
          default: ''
      },
  }
}
</script>

<style scoped>
.main-dashboard-header{
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.main-dashboard-header p{
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom:0;
    font-size: 22px;
}

.main-dashboard-header .header-link-btn{
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
    background: #42b8f4;
    transition: all 0.3s ease-in-out;
}

.main-dashboard-header .header-link-btn:hover{
    box-shadow: 2px 2px 6px 0px #818181;
}
</style>