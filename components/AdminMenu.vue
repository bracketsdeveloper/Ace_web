<template>
  <div class="nav--menu--container">
    <NuxtLink to="/admin/dashboard" class="nav--menu nav--menu--active"
      ><p>Dashboard</p></NuxtLink
    >
    <NuxtLink to="/admin/enquriy" class="nav--menu"><p>Enquiry</p></NuxtLink>
    <div>
      <div class="nav--sub--menu" @click="subMenuHandler">
        <p>Home Page</p>
      </div>
      <div :class="subMenu ? 'inner-sub-menu inner-sub-menu-active' : 'inner-sub-menu'">
        <p>First Layout</p>
        <p>Second Layout</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMenu',
  data() {
      return {
          subMenu:false
      }
  },
  methods: {
      subMenuHandler(){
          this.subMenu = !this.subMenu;
      }
  }
}
</script>

<style scoped>
.nav--menu--container {
  width: 100%;
  height: 100%;
  background: #02b8f4;
  padding-top: 10px;
}
.nav--menu {
  font-weight: 500;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  padding: 25px 10px !important;
  /* border-radius: 10px;
  margin-bottom: 15px; */
  font-weight: 700;
  transition: all 0.3s ease-in-out;
}

.nav--menu p {
  color: #fff;
}

.nav--menu--active,
.nav--menu:hover {
  color: #fff !important;
  background-color: #067fa7;
  font-weight: 700;
}

.nav--menu--active p,
.nav--menu:hover > p {
  color: #fff !important;
}

.nav--menu:hover > .nav--menu .btn p {
  color: #fff !important;
}

.nav--menu .icon {
  font-size: 20px;
}

.nav--menu p {
  margin: 0;
  padding: 0;
  line-height: 0;
  margin-left: 10px;
}

.nav--sub--menu {
  font-weight: 500;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  padding: 25px 10px !important;
  /* border-radius: 10px;
  margin-bottom: 15px; */
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.nav--sub--menu:hover {
  background-color: #067fa7;
}

.nav--sub--menu p {
  margin: 0;
  padding: 0;
  line-height: 0;
  margin-left: 10px;
  color: #fff;
}

.inner-sub-menu {
  width: 100%;
  background: #067fa7;
  height: 0;
  overflow: hidden;
  /* padding: 25px 0px !important; */
}

.inner-sub-menu-active {
    height: auto;
}

.inner-sub-menu  p {
  margin: 0;
  padding: 0;
  line-height: 0;
  /* margin-left: 25px; */
  color: #fff;
  padding: 25px 10px !important;
  transition: all 0.3s ease-in-out;
}

.inner-sub-menu  p:hover {
    background: #48adcf;
    cursor: pointer;
}
</style>