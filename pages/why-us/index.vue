<template>
  <div class="App">
    <BreadCrumb page-name="Why Us" bg-image="bread3.png" />
    <section class="wpo-service-section">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <div class="section-title-s4">
              <span>JUST COUNT ON US</span>
              <h2>Want to make an impact through gifting? We make it easy.</h2>
              <div class="transparent-text">ACE</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img
                  src="/assets/images/icons/7.png"
                  alt=""
                />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Client Service</a></h2>
                <p>
                  We are a service-oriented organization that provides reliable and professional service. Our priority is your complete satisfaction.
                </p>
              </div>
              <div class="visible-icon">
                <img
                  src="/assets/images/icons/7.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img
                  src="/assets/images/icons/8.png"
                  alt=""
                />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Professional Experience</a></h2>
                <p>
                  At Ace, your every order will be carried out maintaining professional standards from start to finish. 
                </p>
              </div>
              <div class="visible-icon">
                <img
                  src="/assets/images/icons/8.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img
                  src="/assets/images/icons/9.png"
                  alt=""
                />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Personalised Attention</a></h2>
                <p>
                  Ace will fulfil your requirements by giving careful attention to quality and service every time you order. 
                </p>
              </div>
              <div class="visible-icon">
                <img
                  src="/assets/images/icons/9.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img
                  src="/assets/images/icons/10.png"
                  alt=""
                />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Promote Brands</a></h2>
                <p>
                  Through gifting solutions, Ace is ready to collaborate with you to promote your business brand. 
                </p>
              </div>
              <div class="visible-icon">
                <img
                  src="/assets/images/icons/10.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img
                  src="/assets/images/icons/11.png"
                  alt=""
                />
              </div>
              <div class="wpo-service-text">
                <h2>
                  <a href="javascript:void(0)">Quality Products</a>
                </h2>
                <p>
                  Our personally sourced range of merchandise undergoes strict quality checks from time to time.
                </p>
              </div>
              <div class="visible-icon">
                <img
                  src="/assets/images/icons/11.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img
                  src="/assets/images/icons/2.png"
                  alt=""
                />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Sustainable</a></h2>
                <p>
                  We work hard to meet all your gifting needs for all seasons to make it thoughtful and sustainable.
                </p>
              </div>
              <div class="visible-icon">
                <img
                  src="/assets/images/icons/2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'WhyUsPage',
   mounted() {
    AOS.init()
  },
}
</script>

<style scoped>
.section-title-s4 h2, .section-title h2{
  font-size: 2.2rem;
}
.wpo-service-section .wpo-service-item .visible-icon {
    position: absolute;
    /* right: -30px;
    top: -50px;
    z-index: -1 */
    right: -24px;
    top: -38px;
    z-index: -1;
    filter: blur(2px);
    transform: scale(1.5);
    opacity: 0.3;
}
</style>