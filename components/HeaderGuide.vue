<template>
  <div>
    <nav id="navbar" :class="scrollPosition > 100 ? 'nav-bg' : ''">
      <div class="container">
        <div class="row nav-row">
          <div class="col-lg-12 col-md-12 col-sm-12 menu-wrapper">
            <ul class="nav-menu-row">
              <li class="first">
                <img src="/assets/images/logo.png" class="logo" alt="" />
              </li>
              <li>
                <NuxtLink to="/" :class="currentRoute=='index' ? 'active' : ''">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about-ace" :class="currentRoute=='about-ace' ? 'active' : ''">About Ace</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/gift-guide" :class="currentRoute=='gift-guide' ? 'active' : ''">Gift Guide</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/product-catalogue" :class="currentRoute=='product-catalogue' ? 'active' : ''">Product Catalogue</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/why-us" :class="currentRoute=='why-us' ? 'active' : ''">Why Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact-us" :class="currentRoute=='contact-us' ? 'active' : ''">Contact Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/catalogue"><font-awesome-icon :icon="['fa', 'cart-shopping']"/> <span>{{cartCount}}</span></NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink to="/" class="last"><font-awesome-icon :icon="['fa', 'cart-shopping']"/></NuxtLink>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <nav id="mobile-nav" :class="scrollPosition > 100 || displayMobileMenu ? 'nav-bg' : ''">
      <div class="container">
        <div class="row nav-row">
          <div class="col-lg-12 col-md-12 col-sm-12 menu-wrapper">
            <ul class="nav-header-row">
              <li class="first">
                <img src="/assets/images/logo.png" class="logo" alt="" />
              </li>
              <li>
                <button id="toggleMenuButton" menu="false" @click="toggleMobileMenu">
                  <font-awesome-icon :icon="['fa', 'bars']"/>
                </button>
              </li>
            </ul>
          </div>
          <div
            id="toggleMenu"
            class="col-lg-12 col-md-12 col-sm-12 menu-wrapper hidden"
            :style="displayMobileMenu ? 'display:block':'display:none'"
          >
            <ul class="nav-menu-row">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about-ace">About Ace</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/gift-guide">Gift Guide</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/product-catalogue">Product Catalogue</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/why-us">Why Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact-us">Contact Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/catalogue"><font-awesome-icon :icon="['fa', 'cart-shopping']"/> <span>{{cartCount}}</span></NuxtLink>
              </li>
              <!-- <li>
                <a href="" class="last">Start an Order</a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderGuide',
  data() {
    return {
      scrollPosition: null,
      displayMobileMenu:false
    }
  },

  computed: {
    cartCount () {
      return this.$store.state.carts.cart.length
    },
    currentRoute() {
      return this.$route.name;
    }
  },
  
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    toggleMobileMenu() {
      this.displayMobileMenu = !this.displayMobileMenu
    }
  },
  
}
</script>

<style scoped>
nav {
  width: 100%;
  padding: 10px 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  /* background: transparent; */
  background: white;
  z-index: 999;
  transition: all 0.3s ease-in-out;
}

nav .nav-row {
  align-items: center;
  justify-content: center;
}

.logo {
  width: 60%;
  margin-bottom: 0px;
}

nav .menu-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

nav .menu-wrapper .nav-menu-row,
nav .menu-wrapper .nav-header-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
  margin-bottom: 0px;
  width: 100%;
}

nav .menu-wrapper .nav-menu-row li,
nav .menu-wrapper .nav-header-row li {
  list-style: none;
  margin-left: 30px;
}

nav .menu-wrapper .nav-menu-row li.first,
nav .menu-wrapper .nav-header-row li.first {
  margin-left: 0px;
}

nav .menu-wrapper .nav-menu-row li a,
nav .menu-wrapper .nav-header-row li a {
  /* color: #000; */
  color: #878585;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  position: relative;
}

nav .menu-wrapper .nav-menu-row li a span, nav .menu-wrapper .nav-header-row li a span {
    background: #cb2b1d;
    position: absolute;
    top: -15px;
    right: -15px;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 14px;
    text-align: center;
    border-radius: 50%;
    color: white;
}

nav .menu-wrapper .nav-header-row li button {
  color: #cb2b1d;
  text-decoration: none;
  font-weight: 700;
  font-size: 23px;
  border: 2px solid #cb2b1d;
  display: grid;
  place-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
}

#toggleMenu {
  transition: all 0.3s ease-in-out;
}

nav .menu-wrapper .nav-menu-row li a.last,
nav .menu-wrapper .nav-header-row li a.last {
  background: #02b8f4;
  color: white;
  border-radius: 20px;
  padding: 8px 15px;
}

#mobile-nav {
  display: none;
}

.nav-bg {
  background: white;
  box-shadow: 1px 10px 25px 0px #818181;
}

/* hover */

nav .menu-wrapper .nav-menu-row li a:hover, nav .menu-wrapper .nav-menu-row li a.active {
  color: #cb2b1d;
}

nav .menu-wrapper .nav-menu-row li a.last:hover {
  color: #fff;
  background-color: #cb2b1d;
}

@media screen and (max-width: 1199px) {
  #navbar {
    display: none;
  }

  #mobile-nav {
    display: block;
  }

  nav .menu-wrapper .nav-header-row {
    display: flex;
    justify-content: space-between;
  }

  nav .menu-wrapper .nav-menu-row {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  nav .menu-wrapper .nav-menu-row li {
    margin-left: 0px;
    margin: 10px 0px;
  }

  nav .hidden {
    display: none;
  }
}

@media screen and (max-width: 450px) {
  nav .menu-wrapper .nav-header-row li.first{
    max-width: 200px;
  }
}
</style>
