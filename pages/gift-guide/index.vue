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
                <img src="/assets/images/Product/4.png" alt="" />
              </div>
            </div>
            <div class="product-area-col" data-aos="fade-up">
              <div>
                <h4>Employee Gifts</h4>
                <span>2</span>
                <img src="/assets/images/Product/6.jpeg" alt="" />
              </div>
            </div>
            <div class="product-area-col" data-aos="fade-right">
              <div>
                <h4>Customised Gifts</h4>
                <span>3</span>
                <img src="/assets/images/Product/7.jpeg" alt="" />
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
              data-number="55"
              style="visibility: visible"
            >
              <div class="d-align">
                <p id="number2" class="number">90</p>
                <font-awesome-icon class="i-icon" :icon="['fa', 'plus']" />
              </div>
              <p>Gifting <br />Categories</p>
            </div>
            <div
              class="item wow fadeInUpBig animated animated"
              data-number="359"
              style="visibility: visible"
            >
              <div class="d-align">
                <p id="number3" class="number">500</p>
                <font-awesome-icon class="i-icon" :icon="['fa', 'plus']" />
              </div>
              <p>Happy Client <br />& Counting</p>
            </div>
            <div
              class="item wow fadeInUpBig animated animated"
              data-number="359"
              style="visibility: visible"
            >
              <div class="d-align">
                <p id="number3" class="number">20</p>
                <font-awesome-icon class="i-icon" :icon="['fa', 'plus']" />
              </div>
              <p>Countries <br />Gifts Delivered</p>
            </div>
            <div
              class="item wow fadeInUpBig animated animated"
              data-number="359"
              style="visibility: visible"
            >
              <div class="d-align">
                <p id="number3" class="number">100</p>
                <font-awesome-icon class="i-icon" :icon="['fa', 'percent']" />
              </div>
              <p>Convenience <br />Ensured</p>
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
                <h2><NuxtLink to="/product-catalogue">Eco-Friendly Products</NuxtLink></h2>
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
                <h2><NuxtLink to="/product-catalogue">Sustainable Products</NuxtLink></h2>
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
                <h2><NuxtLink to="/product-catalogue">Fitness Products</NuxtLink></h2>
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
                <h2><NuxtLink to="/product-catalogue">Healthy Products</NuxtLink></h2>
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
                <h2><NuxtLink to="/product-catalogue">Luxury Products</NuxtLink></h2>
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
                <h2><NuxtLink to="/product-catalogue">Cultural Products</NuxtLink></h2>
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
            <div class="row product-area-row product-slider brand-slider">
              <button
                type="button"
                data-role="none"
                class="slick-prev slick-arrow p-prev p2-prev"
                @click="prevBrand"
              >
                <font-awesome-icon :icon="['fa', 'angle-left']" />
              </button>
              <button
                type="button"
                data-role="none"
                class="slick-next slick-arrow p-next p2-next"
                @click="nextBrand"
              >
                <font-awesome-icon :icon="['fa', 'angle-right']" />
              </button>
            </div>
            <VueSlickCarousel v-bind="slickOptionsBrand" ref="slickBrand" >
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/1.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/2.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/3.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/4.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/5.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/6.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/7.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/8.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/9.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/10.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/11.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/12.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/13.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/14.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/15.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/22.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/23.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/24.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/25.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/26.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/27.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/28.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/29.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/30.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/31.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/32.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/33.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/34.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/35.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/36.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/37.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/38.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/39.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/40.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/41.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/42.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/43.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/44.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/45.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/46.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/47.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/48.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/49.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/50.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/51.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/52.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/53.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/54.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/55.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/56.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/57.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/58.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/59.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/60.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/61.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/62.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/63.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/64.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/65.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/66.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/16.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/17.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/18.jpg" />
                </div>
              </div>
              <div class="img-content-container">
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/67.jpeg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/20.jpg" />
                </div>
                <div class="img-wwrapper">
                  <img src="/assets/images/brand/21.jpg" />
                </div>
              </div>
           </VueSlickCarousel>
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
  layout: 'GuideLayout',
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
      slickOptionsBrand: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
        pauseOnHover: false,
        swipe: true,
        slidesToShow: 4,
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
              slidesToShow: 2,
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
    nextBrand() {
      this.$refs.slickBrand.next()
    },
    prev() {
      this.$refs.slick.prev()
    },
    prevBrand() {
      this.$refs.slickBrand.prev()
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

.img-content-container .img-wwrapper{
  width: 140px;
  margin: 0 auto;
}

.img-content-container .img-wwrapper img{
  width: 100%;
  object-fit: contain;
}

.about-banner {
  background-image: url(/assets/images/gift_guide_banner.jpg);
  margin-top: 85px;
  background-position: center;
  /* padding-bottom: 20px; */
  background-repeat: no-repeat;
  background-size: 100%;
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
  border-bottom: 3px solid #cb2b1d;
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
  color: #cb2b1d;
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
  width: 25%;
  height: 100%;
  padding: 50px 0px;
  text-align: center;
  display: grid;
  place-content: center;
  place-items: center;
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
  font-size: 55px;
  color: #fff;
  padding: 0;
  font-weight: bold;
  /* text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff; */
}
.projectFactsWrap .item .i-icon {
  font-size: 40px;
  color: #fff;
  padding: 0;
  font-weight: bold;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
    cursor: pointer;
}
.projectFactsWrap .item p {
    color: #fff;
    font-size: 25px;
    margin: 0;
    padding: 10px;
    font-weight: 700;
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
  color: #cb2b1d;
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
  background-color: #cb2b1d;
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
  color: #cb2b1d;
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
.p2-prev {
  top: -75px;
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

.p2-next {
  top: -75px;
}

.wpo-service-section-s2 .wpo-service-item, .wpo-service-section .wpo-service-item {
    min-height: 385px;
}

@media (max-width:1025px) {
  .about-banner {
    margin-top: 95px;
    height: 75vh;
  }
}

@media (max-width:600px) {
  .about-banner {
    background-size: cover;
    height: auto;
    min-height: 335px;
    margin-top: 95px;
  }

  .p-prev, .p-next {
    top: -65px;
  }

  .p2-prev, .p2-next {
    top: -30px;
  }

  .brand-slider{
    margin-bottom: 60px;
  }

  .projectFactsWrap .item{
    flex: 0 0 100%;
    padding: 25px 0px;
  }

  .ticket-content h1 {
    text-align: center;
  }

  .ticket-area {
    padding: 50px 10px;
  }

  .ticket-content p {
    font-size: 18px;
    text-align: center;
  }

  .btn-area {
    width: 100%;
  }

  .about-btn {
    font-size: 18px;
  }

  .contact-btn {
    font-size: 18px;
  }

  .product-area p{
    text-align: justify;
  }
}

@media (max-width:450px) {
  .about-btn {
    font-size: 14px;
  }

  .contact-btn{
    font-size: 14px;
    width: 138px;
  }
}

@media (max-width:768px) {
  .about-banner {
    margin-top: 95px;
    height: 55vh;
  }
}

@media (max-width:600px) {
  .about-banner {
    margin-top: 20px;
    height: 50vh;
    background-size: 100%;
    min-height: 0;
  }

  .product-area{
    width: 100%;
    padding: 0px 0;
}
  
}
</style>