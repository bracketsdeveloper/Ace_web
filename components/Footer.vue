<!-- Please remove this file from your project -->
<template>
  <footer>
    <div class="container">
      <div class="row footer-row">
        <div class="col-lg-4 col-md-6 col-sm-12 footer-main">
          <!-- <img src="/assets/images/logo.png" class="logo" alt="" /> -->
          <p>
            Ace allows you to benchmark your business against industry peers through thoughtful gifting solutions!!
          </p>
          <div class="social">
            <a href="https://www.facebook.com/Ace-Gifting-Solutions-110421034013328/?ti=as" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']"/></a>
            <a href="https://instagram.com/acegiftingsolutions?utm_medium=copy_link" target="_blank"><font-awesome-icon :icon="['fab', 'fa-instagram']"/></a>
            <!-- <a href=""><font-awesome-icon :icon="['fab', 'fa-twitter']"/></a> -->
            <a href="https://www.linkedin.com/in/ace-gifting-solutions-620404230" target="_blank"><font-awesome-icon :icon="['fab', 'fa-linkedin']"/></a>
          </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12 footer-menu" data-aos="fade-up">
          <div class="row footer-menu-row">
            <div class="col-lg-4 footer-menu-div border-white-right">
              <h4>COMPANY</h4>
              <ul>
                <li><NuxtLink to="/about-ace">About Ace</NuxtLink></li>
                <li><NuxtLink to="/gift-guide">Gift Guide</NuxtLink></li>
                <li><NuxtLink to="/product-catalogue">Product Catalogue</NuxtLink></li>
                <li><NuxtLink to="/why-us">Why Us</NuxtLink></li>
              </ul>
            </div>
            <div
              class="col-lg-4 offset-lg-1 footer-menu-div"
              data-aos="fade-up"
            >
              <h4>INFORMATION</h4>
              <ul>
                <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
                <li><NuxtLink to="/return-policy">Return Policy</NuxtLink></li>
                <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
                <li><NuxtLink to="/terms-condition">Terms & Conditions</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'MainFooter',
}
</script>

<style scoped>
footer {
  width: 100%;
  padding: 50px 0;
  background-color: #36bfed;
}

footer .footer-row {
  justify-content: center;
  align-items: center;
}

footer .footer-row .footer-menu-div {
  color: #fff !important;
}

footer .footer-row .footer-menu-div h4 {
  color: #fff !important;
}

footer .footer-row .footer-menu-div ul {
  margin-bottom: 0;
  padding-left: 0;
}

footer .footer-row .footer-menu-div ul li {
  list-style: none;
}

footer .footer-row .footer-menu-div ul li a {
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.border-white-right {
  border-right: 1px solid #fff;
}

.footer-menu-row {
  justify-content: center;
}

.footer-main img {
  margin-bottom: 20px;
}

.footer-main p {
  color: white;
}

.footer-main .social {
  display: flex;
  flex-wrap: wrap;
}

.footer-main .social a {
  color: white;
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border: 1px solid white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.footer-main .social a:hover {
  color: #ff0000;
  background-color: #fff;
  border: 1px solid #ff0000;
}

footer .footer-row .footer-menu-div ul li a:hover {
  color: #ff0000;
}

@media screen and (max-width: 991px) {
  footer .footer-row .footer-menu-div {
    width: 50%;
  }
}

@media screen and (max-width: 768px) {
  .footer-main img {
    margin-bottom: 20px;
    width: 25%;
  }

  .footer-main {
    margin-bottom: 20px;
  }

  .footer-menu-row {
    justify-content: flex-start;
    margin: 0;
  }

  footer .footer-row .footer-menu-div {
    color: #fff;
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    border-right: 1px solid transparent;
  }
}

@media screen and (max-width: 600px) {
  .footer-main img {
    width: 40%;
  }

  .footer-main {
    margin-bottom: 20px;
  }
}
</style>


