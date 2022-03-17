<template>
  <div class="main">
    <div class="dashboard-wrapper">
      <header>
        <div class="header-wrapper">
          <div class="row header-row">
            <div class="col-lg-6 col-md-6 col-sm-12 header-menu-div">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
                class="dropdown--custom--main dropdown--custom--main--notification"
              >
                <template #button-content>
                    <div  class="dropdown--custom--notification">
                  <font-awesome-icon class="avatar-dropdown" :icon="['fa', 'user']"/>
                    </div>
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </div>
      </header>
      <section class="main-section">
        <div class="section-wrapper">
          <div class="row section-row">
            <div class="col-lg-1 col-md-4 col-sm-12 section-menu-col">
              <div class="section-menu-div">
                <div class="section-logo-img-container">
                  <img src="/assets/images/logo.png" alt="logo" />
                </div>
                <!-- {menus.map((item, index) => <NavLink key={index} to={item.link} class={({ isActive }) => { return isActive ? "nav--menu nav--menu--active" : "nav--menu" }}>{item.icon} <p>{item.name}</p></NavLink>)} -->
                <AdminMenu />
              </div>
            </div>
            <div
              class="
                col-lg-11
                offset-lg-1
                col-md-8 col-sm-12
                section-content-col
              "
            >
              <div class="main-dashboard-content">
                <Nuxt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboardLayout',
  middleware: 'auth',
}
</script>

<style scoped>
.main {
  width: 100%;
  background-color: #e6e6e6;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.dashboard-wrapper {
  width: 100%;
}

.dashboard-wrapper header {
  width: 100%;
  background: #fff;
  padding: 20px 15px;
  box-shadow: 0px 3px 7px -2px #818181;
}

.dashboard-wrapper header .header-row {
  justify-content: flex-end;
  align-items: center;
  --bs-gutter-x: 0;
}

.dashboard-wrapper header .header-row .header-menu-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
}

.dashboard-wrapper
  header
  .header-row
  .header-menu-div
  .dropdown--custom
  .menu-dropdown--row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.dropdown--custom--main {
  width: 45px;
  display: inline-block;
  height: 45px;
}

.dropdown--custom--main--notification {
  margin-right: 20px;
}

.dropdown--custom--main .dropdown--custom {
  border-color: #69558f;
  color: #69558f;
  background-color: #fff;
  border-style: dashed;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  padding: 0 !important;
}
.dropdown--custom--main .dropdown--custom--notification {
  color: #000;
  background-color: #fff;
  border: 1px solid transparent;
  width: 100%;
  height: 100%;
  padding: 0 !important;
  font-size: 23px;
}

.dropdown--custom--main .dropdown--custom:hover {
  background-color: #69558f;
  border-color: #69558f;
}

.dropdown--custom--main .dropdown--custom--notification:hover {
  color: #69558f;
  border: 1px solid transparent !important;
  background-color: #fff !important;
}

.dropdown--custom--main .dropdown--custom:active {
  background-color: #69558f;
  border-color: #69558f;
}

.dropdown--custom--main .dropdown--custom--notification:active {
  color: #69558f;
  border: 1px solid transparent !important;
  background-color: #fff !important;
}

.btn-primary:active,
.show > .btn-primary.dropdown-toggle {
  background-color: #69558f !important;
  border-color: #69558f !important;
}

.dropdown-toggle::after {
  display: none !important;
}

.dashboard-wrapper
  header
  .header-row
  .header-menu-div
  .dropdown--custom
  .menu-dropdown--row
  .avatar-dropdown {
  width: 100%;
}

.dashboard-wrapper
  header
  .header-row
  .header-menu-div
  .dropdown--custom
  .menu-dropdown--row
  p {
  margin-bottom: 0px;
}

.dashboard-wrapper .main-section {
  width: 100%;
}

.dashboard-wrapper .main-section .section-row {
  --bs-gutter-x: 0;
}

.dashboard-wrapper .main-section .section-row .section-menu-col {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  min-height: 100vh;
  background: #fff;
  box-shadow: 2px 0px 10px -3px #818181;
  width: 15%;
}

.dashboard-wrapper
  .main-section
  .section-row
  .section-menu-col
  .section-menu-div {
  width: 100%;
  padding: 0;
  height: 100vh;
}

.dashboard-wrapper
  .main-section
  .section-row
  .section-menu-col
  .section-menu-div
  .section-logo-img-container {
  width: 100%;
  position: relative;
  /* border-bottom: 1px dashed #69558f; */
  padding-bottom: 0px;
  margin-bottom: 0px;
  padding-top: 20px;
}

.dashboard-wrapper
  .main-section
  .section-row
  .section-menu-col
  .section-menu-div
  .section-logo-img-container
  img {
  width: 100%;
  height: 66px;
  object-fit: contain;
}



.dashboard-wrapper .main-section .section-row .section-content-col {
  padding: 25px 25px;
  padding-top: 115px;
  min-height: 100vh;
  width: 85%;
}

.notification {
  margin-right: 20px;
  font-size: 23px;
}

.notification:hover {
  color: #69558f;
}

.main-dashboard-content {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 5px -1px #818181;
}

.offset-lg-1 {
    margin-left: 15%;
}

</style>