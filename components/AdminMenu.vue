<template>
  <div class="nav--menu--container">
    <!-- <NuxtLink to="/admin/dashboard" :class="path.includes('/admin/dashboard') ? 'nav--menu nav--menu--active':'nav--menu'"
      ><p>Dashboard</p></NuxtLink
    > -->
    <NuxtLink to="/admin/enquiry" :class="path.includes('/admin/enquiry') ? 'nav--menu nav--menu--active':'nav--menu'" ><p>Enquiry</p></NuxtLink>
    <NuxtLink to="/admin/order-request" :class="path.includes('/admin/order-request') ? 'nav--menu nav--menu--active':'nav--menu'" ><p>Order Request</p></NuxtLink>
    <NuxtLink to="/admin/testimonial" :class="path.includes('/admin/testimonial') ? 'nav--menu nav--menu--active':'nav--menu'" ><p>Testimonial</p></NuxtLink>
    <div>
      <div class="nav--sub--menu" @click="subMenuHandler('/products')">
        <p>Products</p>
      </div>
      <div :class="subMenu=='/products' || path.includes('/products') ? 'inner-sub-menu inner-sub-menu-active' : 'inner-sub-menu'">
        <NuxtLink :class="path.includes('/products/category') ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/products/category">Category</NuxtLink>
        <NuxtLink :class="path.includes('/products/items') ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/products/items">Product Items</NuxtLink>
        <NuxtLink :class="path.includes('/products/bulk-upload') ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/products/items/bulk-upload">Product Bulk Upload</NuxtLink>
      </div>
    </div>
    <div>
      <div class="nav--sub--menu" @click="subMenuHandler('/home-page')">
        <p>Home Page</p>
      </div>
      <div :class="subMenu=='/home-page' || path.includes('/home-page') ? 'inner-sub-menu inner-sub-menu-active' : 'inner-sub-menu'">
        <NuxtLink :class="path=='/admin/home-page/second-section' ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/home-page/second-section">Second Section</NuxtLink>
        <NuxtLink :class="path=='/admin/home-page/second-section-banner' ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/home-page/second-section-banner">Second Section Banner</NuxtLink>
        <NuxtLink :class="path=='/admin/home-page/third-section' ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/home-page/third-section">Third Section</NuxtLink>
        <NuxtLink :class="path.includes('/home-page/third-section-content') ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/home-page/third-section-content">Third Section Content</NuxtLink>
        <NuxtLink :class="path=='/admin/home-page/fifth-section' ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/home-page/fifth-section">Fifth Section</NuxtLink>
        <NuxtLink :class="path.includes('/home-page/fifth-section-content') ? 'inner-menu-link active' : 'inner-menu-link'" to="/admin/home-page/fifth-section-content">Fifth Section Content</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMenu',
  data() {
      return {
          subMenu:''
      }
  },
  computed: {
    path () {
      return this.$route.path
    }
  },
  methods: {
      subMenuHandler(val){
          this.subMenu = val===this.subMenu ? '' : val;
      }
  },
  
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

.inner-sub-menu  .inner-menu-link {
  margin: 0;
  padding: 0;
  line-height: 0;
  /* margin-left: 25px; */
  display: block;
  color: #fff;
  padding: 25px 10px !important;
  transition: all 0.3s ease-in-out;
}

.inner-sub-menu  .inner-menu-link:hover, .inner-sub-menu  .inner-menu-link.active {
    background: #48adcf;
    cursor: pointer;
}
</style>