<template>
  <div class="App">
    <section class="about-banner"></section>

    <section class="product-area">
      <div class="container">
        <h1>
          GET INSPIRED WITH <br />
          <span class="underline">OUR GUIDE</span>
        </h1>
        <div class="row product-area-row product-slider">
          <button
            type="button"
            data-role="none"
            class="slick-prev slick-arrow p-prev"
            @click="prev"
          >
            <font-awesome-icon :icon="['fa', 'angle-left']" />
          </button>
          <VueSlickCarousel v-bind="slickOptions" ref="slick">
            <div class="product-area-col" data-aos="fade-left">
              <div>
                <h4>Business Gifts</h4>
                <span>1</span>
                <img src="/assets/images/Product/1.jpg" alt="" />
              </div>
            </div>
            <div class="product-area-col" data-aos="fade-up">
              <div>
                <h4>Employee Gifts</h4>
                <span>2</span>
                <img src="/assets/images/Product/2.jpg" alt="" />
              </div>
            </div>
            <div class="product-area-col" data-aos="fade-right">
              <div>
                <h4>Customised Gifts</h4>
                <span>3</span>
                <img src="/assets/images/Product/3.jpg" alt="" />
              </div>
            </div>
            
          </VueSlickCarousel>
          <button
            type="button"
            data-role="none"
            class="slick-next slick-arrow p-next"
            @click="next"
          >
            <font-awesome-icon :icon="['fa', 'angle-right']" />
          </button>
        </div>
      </div>
    </section>

    <section>
      <div id="projectFacts" class="sectionClass">
        <div class="fullWidth eight columns">
          <div class="projectFactsWrap">
            <div
              class="item wow fadeInUpBig animated animated"
              data-number="12"
              style="visibility: visible"
            >
              <div class="d-align">
                <!-- <p id="number1" class="number">16</p> -->
                <font-awesome-icon class="i-icon" icon="fa-brands fa-whatsapp" @click="whatsappBtnHandler" />
              </div>

              <!-- <p>Successful Projects</p> -->
            </div>
            <div
              class="item wow fadeInUpBig animated animated"
              data-number="55"
              style="visibility: visible"
            >
              <!-- <div class="d-align">
                <p id="number2" class="number">1000</p>
                <font-awesome-icon class="i-icon" :icon="['fa', 'plus']" />
              </div> -->
              <p>Delightful Gifting</p>
            </div>
            <div
              class="item wow fadeInUpBig animated animated"
              data-number="359"
              style="visibility: visible"
            >
              <!-- <div class="d-align">
                <p id="number3" class="number">4000</p>
                <font-awesome-icon class="i-icon" :icon="['fa', 'plus']" />
              </div> -->
              <p>Custom Designs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product-area wpo-service-section undefined">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <h1>
              <span class="underline">Gifts</span> 
              <span class="blue">Galore</span>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img src="/assets/images/icons/1.png" alt="" />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Eco-Friendly Products</a></h2>
                <p>
                  Ace has a wide range of eco-friendly products to impact thoughtful gifting and the environment.
                </p>
              </div>
              <div class="visible-icon">
                <img src="/assets/images/icons/1.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img src="/assets/images/icons/2.png" alt="" />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Sustainable Products</a></h2>
                <p>
                  Ace has taken initiatives to promote sustainable products for impressive gifting.
                </p>
              </div>
              <div class="visible-icon">
                <img src="/assets/images/icons/2.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img src="/assets/images/icons/3.png" alt="" />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Fitness Products</a></h2>
                <p>
                  Ace has ideal gifting solutions for the health-conscious and those who wish to balance health and work.
                </p>
              </div>
              <div class="visible-icon">
                <img src="/assets/images/icons/3.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img src="/assets/images/icons/4.png" alt="" />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Healthy Products</a></h2>
                <p>
                  Prioritising health and well-being, we have a vast range of versatile and impressive health products.
                </p>
              </div>
              <div class="visible-icon">
                <img src="/assets/images/icons/4.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img src="/assets/images/icons/5.png" alt="" />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Luxury Products</a></h2>
                <p>
                  Ace delivers luxury products to make every occasion memorable with our gifting solutions.
                </p>
              </div>
              <div class="visible-icon">
                <img src="/assets/images/icons/5.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img src="/assets/images/icons/6.png" alt="" />
              </div>
              <div class="wpo-service-text">
                <h2><a href="javascript:void(0)">Cultural Products</a></h2>
                <p>
                  Ace has unique gifting solutions to appreciate culture and ethnicity. With Ace, relive the culture through Gifts.. Celebrate the culture through Gifts..
                </p>
              </div>
              <div class="visible-icon">
                <img src="/assets/images/icons/6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ticket-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-6 ticket-content">
            <h1>Talk to Us</h1>
            <p>
              Share your corporate gift ideas with us,
              <br />
              and we will customize thoughtful gifting solutions.
            </p>
          </div>
          <div
            class="col-lg-4 col-md-4 col-sm-12 col-xs-6"
            style="text-align: center"
          >
            <NuxtLink to="/contact-us" class="btn btn-ticket">Submit</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="product-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>
              We deliver gifts that <br />
              <span class="underline blue">matter</span
              > !!
            </h1>
            <p>
              The gifting process at Ace provides impactful solutions delivering consistent quality gifting worldwide. 
            </p>
            <div class="btn-area">
              <NuxtLink to="/product-catalogue" class="btn about-btn">Business Gifts</NuxtLink>
              <NuxtLink to="/product-catalogue" class="btn contact-btn">Employee Gifts</NuxtLink>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img
              src="/assets/images/Product/icons.jpg"
              class="img-responsive w-100"
            />
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
  name: 'GiftGuidePage',
  data() {
    return {
      slickOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      },
    }
  },
   mounted() {
    AOS.init()
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },
    prev() {
      this.$refs.slick.prev()
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick()
    },
    whatsappBtnHandler(){
      window.open('https://wa.me/7892156160/?text=Hi Ace', '_blank');
    }
  },
}
</script>

<style scoped>
.about-banner {
  background-image: url(/assets/images/Banner/about-us.jpg);
  padding-top: 135px;
  background-position: center;
  padding-bottom: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
}

/* Product Slider */

.product-area {
  width: 100%;
  padding: 50px 0;
}

.product-area h1 {
  margin-bottom: 30px;
}

.product-area h1 .underline {
  border-bottom: 3px solid #ff0000;
}

.product-area h1 .blue {
  color: #02b8f4;
}

.product-area p {
  font-size: 20px;
  margin-bottom: 30px;
}

.product-area .product-area-row {
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.product-area .product-area-row .product-area-col {
  width: 33%;
  /* margin: 20px; */
}

.product-area .product-area-row .product-area-col div {
  /* background-color:#f1f1f1; */
  padding: 20px 15px;
  position: relative;
  /* border-radius: 15px; */
  transition: all 0.3s ease-in-out;
}

.product-area .product-area-row .product-area-col h4 {
  color: #02b8f4;
  font-size: 22px;
  font-weight: bold;
}
.product-area .product-area-row .product-area-col span {
  font-size: 62px;
  font-weight: bold;
  color: #ff0000;
  position: absolute;
  right: 10px;
  top: 50px;
  box-shadow: 2px 2px 8px #000;
  padding: 0px 34px;
  background: #fff;
}

.product-area .product-area-row .product-area-col img {
  width: 100%;
  margin-bottom: 15px;
}

/* Counter */

.sectionClass {
  padding: 20px 0px 50px 0px;
  position: relative;
  display: block;
}

.fullWidth {
  width: 100% !important;
  display: table;
  float: none;
  padding: 0;
  min-height: 1px;
  height: 100%;
  position: relative;
}

.sectiontitle {
  background-position: center;
  margin: 30px 0 0px;
  text-align: center;
  min-height: 20px;
}

.sectiontitle h2 {
  font-size: 30px;
  color: #222;
  margin-bottom: 0px;
  padding-right: 10px;
  padding-left: 10px;
}

.headerLine {
  width: 160px;
  height: 2px;
  display: inline-block;
  background: #101f2e;
}

.projectFactsWrap {
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  background: #02b8f4;
  align-items: center;
}

#projectFacts .fullWidth {
  padding: 0;
}

.projectFactsWrap .item {
  width: 33%;
  height: 100%;
  padding: 50px 0px;
  text-align: center;
}

.projectFactsWrap .item:nth-child(1) {
  background: #02b8f4;
}

.projectFactsWrap .item:nth-child(2) {
  background: #02b8f4;
}

.projectFactsWrap .item:nth-child(3) {
  background: #02b8f4;
}

.projectFactsWrap .item p.number {
  font-size: 80px;
  color: #02b8f4;
  padding: 0;
  font-weight: bold;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
}
.projectFactsWrap .item .i-icon {
  font-size: 62px;
  color: #fff;
  padding: 0;
  font-weight: bold;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
    cursor: pointer;
}
.projectFactsWrap .item p {
  color: #fff;
  font-size: 22px;
  margin: 0;
  padding: 10px;
}

@media (max-width: 786px) {
  .projectFactsWrap .item {
    flex: 0 0 50%;
  }
}

.trans {
  opacity: 1;
  -webkit-transform: translateX(0px);
  transform: translateX(0px);
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  transition: all 500ms ease;
}

.d-align {
  display: inline-flex;
  align-items: center;
}

.ticket-area {
  background-color: #02b8f4;
  padding: 50px;
}
.ticket-content h1 {
  color: #fff;
  font-size: 48px;
  font-weight: bolder;
}
.ticket-content p {
  color: #fff;
  font-size: 22px;
  font-weight: 500;
}
.ticket-btn-area {
  text-align: right;
}
.btn-ticket {
  background-color: #fff;
  border: 1px solid #fff;
  color: #ff0000;
  border-radius: 0;
  font-weight: bold;
  font-size: 22px;
}
.btn-ticket:hover {
  color: #02b8f4;
}
.btn-area {
  background-color: #34a1da;
  border-radius: 50px;
  padding: 10px;
  margin: 10px 0;
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.about-btn {
  font-weight: bold;
  color: #fff;
  background-color: #34a1da;
  border-radius: 20px;
  margin: 5px;
  font-size: 22px;
}
.contact-btn {
  font-weight: bold;
  color: #fff;
  background-color: #ff0000;
  border-radius: 20px;
  margin: 5px;
  font-size: 22px;
  width: 180px;
}
.wpo-service-section,
.wpo-service-section-s2 {
  padding: 40px 0 90px;
  position: relative;
  overflow: hidden;
}
.wpo-service-section-s2 .wpo-service-item,
.wpo-service-section .wpo-service-item {
  box-shadow: 0 2px 10.2px 1.8px rgb(33 33 33 / 5%);
  padding: 55px 30px;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
}
.wpo-service-section-s2 .wpo-service-item .wpo-service-icon,
.wpo-service-section .wpo-service-item .wpo-service-icon {
  margin-bottom: 20px;
}
.wpo-service-section-s2 .wpo-service-item,
.wpo-service-section .wpo-service-item {
  box-shadow: 0 2px 10.2px 1.8px rgb(33 33 33 / 5%);
  padding: 55px 30px;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
}
.wpo-service-section-s2 .wpo-service-item .visible-icon,
.wpo-service-section .wpo-service-item .visible-icon {
  position: absolute;
  right: -30px;
  top: -30px;
  z-index: -1;
  opacity: 0.3;
}
.wpo-service-section-s2 .wpo-service-item .visible-icon,
.wpo-service-section .wpo-service-item .visible-icon img {
  width: 150px;
}
.wpo-service-section-s2 .wpo-service-item .wpo-service-text h2 a,
.wpo-service-section .wpo-service-item .wpo-service-text h2 a {
  color: #ff0000;
  text-decoration: none;
  font-weight: bold;
}

.wpo-service-section-s2 .wpo-service-item .wpo-service-text p,
.wpo-service-section .wpo-service-item .wpo-service-text p {
  margin-bottom: 0;
  font-size: 18px;
  color: #6c6c6c;
  line-height: 1.8em;
}
.product-slider {
  position: relative;
}
.p-prev {
  display: inline-block;
  padding: 20px;
  border: 1px solid #c8c8c8;
  width: 75px;
  font-size: 22px;
  position: absolute;
  top: -120px;
  right: 100px;
  background: #fff;
  color: #f25d79;
}
.p-next {
  display: inline-block;
  padding: 20px;
  border: 1px solid #c8c8c8;
  width: 75px;
  font-size: 22px;
  position: absolute;
  top: -120px;
  right: 0;
  background: #fff;
  color: #f25d79;
}

.wpo-service-section-s2 .wpo-service-item, .wpo-service-section .wpo-service-item {
    min-height: 385px;
}
</style>