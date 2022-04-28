<template>
  <div class="App">
    <section class="banner">
      <div class="container position-center">
        <div class="row banner-row">
          <div class="col-lg-5 col-md-12 col-sm-12">
            <img src="/assets/images/diary2.png" class="banner-image" alt="" />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="banner-content">
              <h1><span>Celebrate</span> Thoughtful Gifting!!</h1>
              <h5>
                Gifting that articulates joy every time.
              </h5>
              <div class="row banner-content-row">
                <div class="banner-content-col">
                  <h4 class="red-circle"><span>For All<br /> <b><i>SEASONS</i></b></span></h4>
                  <!-- <p>Ace work for you?</p> -->
                  <!-- <div><font-awesome-icon class="circle-first" :icon="['fa', 'circle-dot']"/></div> -->
                </div>
                <div class="banner-content-col">
                  <h4 class="blue-circle"><span>For All<br /> <b><i>REASONS</i></b></span></h4>
                  <!-- <p>Take the survey</p> -->
                  <!-- <div><font-awesome-icon class="circle-second" :icon="['fa', 'circle-dot']"/></div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-image-div">
        <img src="/assets/images/card.png" class="card-image" style="z-index:2;" alt="" />
      </div>
    </section>
    
    <section class="call-to-action" style="padding:0;background-image:linear-gradient(144deg, rgb(203 43 29 / 86%) 12%, rgb(203 43 29 / 86%) 98%), url(/assets/images/bread-banner/bread3.png) !important;background-size:100%;background-position:center right">
      <div class="container-fluid">
        <div class="row call-to-action-row" style="--bs-gutter-x: 0;">
          <div class="col-lg-6 col-md-6 col-sm-12 call-to-action-col" style="padding:30px 0;">
            <div class="row" style="--bs-gutter-x: 0;">
              <h4 style="color:white"><font-awesome-icon icon="fa-solid fa-users" /></h4>
              <p style="font-size:23px;font-style:normal;font-weight:bold;font-family:'Circular-Loom';color:white"><span style="font-size:35px">4900594</span><br/>Clients And<br />Employees Delighted</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 call-to-action-col" style="padding:30px 0;">
            <div class="row" style="--bs-gutter-x: 0;">
              <h4 style="color:white"><font-awesome-icon icon="fa-solid fa-gift" /></h4>
              <p style="font-size:23px;font-style:normal;font-weight:bold;font-family:'Circular-Loom';color:white"><span style="font-size:35px">9297</span><br/>Gifts <br />Curated</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container text-center">
        <h1>
          {{secondSectionHeadingExceptLast2word()}}<br />{{secondSectionHeadingThirdLastword()}}
          <span class="blue"
            ><span class="underline">{{secondSectionHeadingSecondLastword()}}</span> {{secondSectionHeadingLastword()}}</span
          >
        </h1>
        <p>
          {{secondSection.paragraph}}
        </p>
      </div>
    </section>

    <section class="bg-holder">
      <img :src="apiLink+'uploads/'+secondSectionBanner.image" data-aos="fade-up" alt="" />
    </section>

    <section class="service">
      <div class="container">
        <h1>
          {{thirdSectionHeadingExceptLast2word()}}
          <span class="blue">{{thirdSectionHeadingSecondLastword()}} {{thirdSectionHeadingLastword()}}</span>
        </h1>
        <p>
          {{thirdSection.paragraph}}
        </p>
        <div class="row service-row">
          <div v-for="(item, index) in thirdSectionContent" :key="index" class="service-col" data-aos="fade-up">
            <div>
              <img :src="apiLink+'uploads/'+item.image" alt="" />
              <h4>{{item.heading}}</h4>
              <p>
                {{item.paragraph}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="banner--2">
      <div class="wrapper">
        <div class="row banner--2-row">
          <div class="col-lg-6 col-md-6 col-sm-12 banner--2-col">
            <img src="/assets/images/book.png" alt="" data-aos="fade-up" />
          </div>
          <div
            class="
              col-lg-6 col-md-6 col-sm-12
              banner--2-col banner--2--outer-col
            "
          >
            <div class="banner--2--innercol" data-aos="fade-up">
              <h1>
                Ace Corporate gifts are wrapped with
                <span class="blue"
                  >aff<span class="underline">ec</span>tion</span
                >
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="connect">
      <div class="container">
        <h1>
          {{fifthSectionHeadingExceptLast2word()}} <span class="underline">{{fifthSectionHeadingSecondLastword()}}</span>
          <span class="blue"> {{fifthSectionHeadingLastword()}}</span>
        </h1>
        <p>
          {{fifthSection.paragraph}}
        </p>
        <div class="row connect-row">
          <div v-for="(item, index) in fifthSectionContent" :key="index" class="connect-col" data-aos="fade-up">
            <div>
              <h4>{{item.heading}}</h4>
              <p>
                {{item.paragraph}}
              </p>
              <!-- <a href="">Read more <font-awesome-icon :icon="['fa', 'angles-right']"/></a> -->
            </div>
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

    <section class="banner--3" data-aos="fade-up">
      <div class="wrapper">
        <div class="row banner--3-row">
          <div class="col-lg-6 col-md-6 col-sm-12 banner--3-col">
            <div class="container" style="height: 100%">
              <div class="banner--3-inner">
                <p>
                  We recognise, celebrate and build your business through creative corporate gifting solutions.
                </p>
              </div>
              <div class="heading">
                <h1>
                  <span>What's our<br /></span>
                  <span class="blue">secret?</span>
                </h1>
              </div>
            </div>
            <div class="banner--3-inner-row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-black"></div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-red"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 banner--3-col">
            <div class="img-div">
              <img src="/assets/images/gift.png" alt="" />
            </div>
            <div class="button-div">
              <NuxtLink to="/product-catalogue"
                ><span
                  ><font-awesome-icon :icon="['fa', 'arrow-right-long']"/><br />ENDLESS<br />OPTIONS</span
                ></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="testimonial" data-aos="fade-up">
      <div class="container">
        <h1>
          <span class="underline">Tru</span>sted By
          <span class="blue">Clients</span>
        </h1>
        <div class="slider-div-box">
          <div class="regular slider">
            <button type="button" data-role="none" class="slick-prev slick-arrow" @click="prev"><font-awesome-icon :icon="['fa', 'angle-left']"/></button>
            <VueSlickCarousel v-bind="slickOptions" ref="slick">
              <div class="slider-hover-div">
                <div class="row slider-div-row">
                  <div class="col-lg-4 col-md-6 col-sm-12 slider-div-image">
                    <img
                      class="main-img"
                      src="/assets/images/face.jpeg"
                      alt=""
                    />
                    <div class="slider-image-overlay">
                      <img src="/assets/images/testimonial-bg.png" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-sm-12 slider-div-quote">
                    <div class="icon"><font-awesome-icon :icon="['fa', 'comment']"/></div>
                    <h4>Customer Reviews</h4>
                    <p>
                      <font-awesome-icon :icon="['fa', 'quote-left']"/> Thanks to Ace,
                      we've now established a well-oiled process, recieve great
                      feedback on our gifts. This further boosts our business
                      relationships.
                      <font-awesome-icon :icon="['fa', 'quote-right']"/>
                    </p>
                    <div class="customer">
                      <h5>Simon Duo</h5>
                      <p>Partner, Brevin</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider-hover-div">
                <div class="row slider-div-row">
                  <div class="col-lg-4 col-md-6 col-sm-12 slider-div-image">
                    <img
                      class="main-img"
                      src="/assets/images/face.jpeg"
                      alt=""
                    />
                    <div class="slider-image-overlay">
                      <img src="/assets/images/testimonial-bg.png" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-sm-12 slider-div-quote">
                    <div class="icon"><font-awesome-icon :icon="['fa', 'comment']"/></div>
                    <h4>Customer Reviews</h4>
                    <p>
                      <font-awesome-icon :icon="['fa', 'quote-left']"/> Thanks to Ace,
                      we've now established a well-oiled process, recieve great
                      feedback on our gifts. This further boosts our business
                      relationships.
                      <font-awesome-icon :icon="['fa', 'quote-right']"/>
                    </p>
                    <div class="customer">
                      <h5>Simon Duo</h5>
                      <p>Partner, Brevin</p>
                    </div>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
            <button type="button" data-role="none" class="slick-next slick-arrow" @click="next"><font-awesome-icon :icon="['fa', 'angle-right']"/></button>
          </div>
        </div>
      </div>
    </section> -->

    

    <section class="contact">
      <div class="container">
        <h1>
          Get in touch
          <span class="red">with us</span>
        </h1>
        <div class="row contact-row">
          <div class="contact-col">
            <p v-if="error" style="color:red;text-align:center">{{errorMessage}}</p>
            <form  @submit.prevent="formHandler">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <label for="">Your Name <span class="red">*</span></label>
                  <input v-model="name" type="text" name="" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <label for="">Your Phone <span class="red">*</span></label>
                  <input v-model="phone" type="text" name="" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <label for="">Your Email <span class="red">*</span></label>
                  <input v-model="email" type="text" name="" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <label for="">Your Subject <span class="red">*</span></label>
                  <input v-model="subject" type="text" name="" />
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <label for="">Your Message <span class="red">*</span></label>
                  <textarea  v-model="message" name="" cols="10" rows="5"></textarea>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <button data-aos="flip-down">
                    <font-awesome-icon :icon="['fa', 'paper-plane']"/> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="info">
      <div class="container text-center">
        <h1>
          Need more information ?<br />
          <span class="blue"
            ><span class="underline">Send</span> just an email</span
          >
        </h1>
        <NuxtLink to="/contact-us" data-aos="flip-down">CONTACT US</NuxtLink>
      </div>
    </section>

    <section class="call-to-action" style="padding:0">
      <div class="container-fluid">
        <div class="row call-to-action-row">
          <div class="col-lg-2 col-md-6 col-sm-12 call-to-action-col">
            <div class="row">
              <div class="icon whatsapp-icon"><font-awesome-icon icon="fa-brands fa-whatsapp" @click="whatsappBtnHandler" /></div>
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
  name: 'IndexPage',
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
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
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
      name:'',
      email:'',
      phone:'',
      subject:'',
      message:'',
      error: false,
      errorMessage: '',
      fifthSectionContent:[],
      fifthSection:{},
      thirdSectionContent:[],
      thirdSection:{},
      secondSection:{},
      secondSectionBanner:{},
    }
  },
  async fetch() {
    await this.getHomePageSecondSection()
    await this.getHomePageSecondSectionBanner()
    await this.getHomePageThirdSection()
    await this.getHomePageThirdSectionContent()
    await this.getHomePageFifthSection()
    await this.getHomePageFifthSectionContent()
  },
  computed:{
    apiLink (){
      return this.$store.state.apis.link
    },

  },
  mounted() {
    AOS.init()
  },
  updated() {
    AOS.init()
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },
    prev() {
      this.$refs.slick.prev()
    },
    nextBrand() {
      this.$refs.slickBrand.next()
    },
    prevBrand() {
      this.$refs.slickBrand.prev()
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick()
    },
    secondSectionHeadingLastword (){
      const n = this.secondSection.heading ? this.secondSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        if(newN[parseInt(newN.length)-1]===""){
          return newN[parseInt(newN.length)-2];
        }else{
          return newN[parseInt(newN.length)-1];
        }
      }
      return "";
    },
    secondSectionHeadingSecondLastword (){
      const n = this.secondSection.heading ? this.secondSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        if(newN[parseInt(newN.length)-1]===""){
          return newN[parseInt(newN.length)-3];
        }else{
          return newN[parseInt(newN.length)-2];
        }
      }
      return "";
    },
    secondSectionHeadingThirdLastword (){
      const n = this.secondSection.heading ? this.secondSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        if(newN[parseInt(newN.length)-1]===""){
          return newN[parseInt(newN.length)-4];
        }else{
          return newN[parseInt(newN.length)-3];
        }
      }
      return "";
    },
    secondSectionHeadingExceptLast2word (){
      const n = this.secondSection.heading ? this.secondSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        let secndLastWord =  ""
        if(newN[parseInt(newN.length)-1]===""){
          secndLastWord =  newN[parseInt(newN.length)-4];
        }else{
          secndLastWord =   newN[parseInt(newN.length)-3];
        }
        const lastIndex = n.lastIndexOf(secndLastWord)
        return n.substring(0, lastIndex)
      }
      return "";
    },
    fifthSectionHeadingLastword (){
      const n = this.fifthSection.heading ? this.fifthSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        if(newN[parseInt(newN.length)-1]===""){
          return newN[parseInt(newN.length)-2];
        }else{
          return newN[parseInt(newN.length)-1];
        }
      }
      return "";
    },
    fifthSectionHeadingSecondLastword (){
      const n = this.fifthSection.heading ? this.fifthSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        if(newN[parseInt(newN.length)-1]===""){
          return newN[parseInt(newN.length)-3];
        }else{
          return newN[parseInt(newN.length)-2];
        }
      }
      return "";
    },
    fifthSectionHeadingExceptLast2word (){
      const n = this.fifthSection.heading ? this.fifthSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        let secndLastWord =  ""
        if(newN[parseInt(newN.length)-1]===""){
          secndLastWord =  newN[parseInt(newN.length)-3];
        }else{
          secndLastWord =   newN[parseInt(newN.length)-2];
        }
        const lastIndex = n.lastIndexOf(secndLastWord)
        return n.substring(0, lastIndex)
      }
      return "";
    },
    thirdSectionHeadingLastword (){
      const n = this.thirdSection.heading ? this.thirdSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        if(newN[parseInt(newN.length)-1]===""){
          return newN[parseInt(newN.length)-2];
        }else{
          return newN[parseInt(newN.length)-1];
        }
      }
      return "";
    },
    thirdSectionHeadingSecondLastword (){
      const n = this.thirdSection.heading ? this.thirdSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        if(newN[parseInt(newN.length)-1]===""){
          return newN[parseInt(newN.length)-3];
        }else{
          return newN[parseInt(newN.length)-2];
        }
      }
      return "";
    },
    thirdSectionHeadingExceptLast2word (){
      const n = this.thirdSection.heading ? this.thirdSection.heading : " ";
      if(n){
        const newN = n.split(" ")
        let secndLastWord =  ""
        if(newN[parseInt(newN.length)-1]===""){
          secndLastWord =  newN[parseInt(newN.length)-3];
        }else{
          secndLastWord =   newN[parseInt(newN.length)-2];
        }
        const lastIndex = n.lastIndexOf(secndLastWord)
        return n.substring(0, lastIndex)
      }
      return "";
    },
    async formHandler(){
      this.error = false
      this.errorMessage = ''

      if (this.name === '') {
          this.error = true
          this.errorMessage = 'Please enter your name'
          return false;
      } else if (!(/^[a-zA-Z\s]*$/.test(this.name))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid name'
          return false;
      }

      if (this.phone === '') {
          this.error = true
          this.errorMessage = 'Please enter your phone'
          return false;
      } else if (!(/^[0-9\s]*$/.test(this.phone))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid phone'
          return false;
      } else if (this.phone.length < 10 || this.phone.length > 10) { 
          this.error = true
          this.errorMessage = 'Please enter a valid phone'
          return false;
      }

      if (this.email === '') {
          this.error = true
          this.errorMessage = 'Please enter your email'
          return false;
      } else if (!(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(this.email))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid email'
          return false;
      }

      if (this.subject === '') {
          this.error = true
          this.errorMessage = 'Please enter your subject'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\'+=,]+$/i.test(this.subject))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid subject'
          return false;
      }

      if (this.message === '') {
          this.error = true
          this.errorMessage = 'Please enter your message'
          return false;
      } else if (!(/^[a-z 0-9~%.:_'\@\-\/\(\)\\\#\;\[\]\{\}\$\!\&\'+=,]+$/i.test(this.message))) { // eslint-disable-line
          this.error = true
          this.errorMessage = 'Please enter a valid message'
          return false;
      }

      this.$store.commit('loaders/show')
      try {
          const response = await this.$publicApi.post('/enquiry/create', {email:this.email, name:this.name, phone:this.phone, subject:this.subject, message:this.message} ) // eslint-disable-line
          this.error = false
          this.errorMessage = ''
          this.email = ''
          this.phone = ''
          this.name = ''
          this.subject = ''
          this.message = ''
          this.$toast.success('Message Delivered Successfully')
          this.$store.commit('loaders/hide')
      } catch (err) {
          console.log(err.response)// eslint-disable-line
          if (err?.response?.data?.message) {
              this.$toast.error(err?.response?.data?.message)
          }
          if (err?.response?.data?.errors?.name) {
              this.$toast.error(err?.response?.data?.errors?.name?.msg)
          }
          if (err?.response?.data?.errors?.phone) {
              this.$toast.error(err?.response?.data?.errors?.phone?.msg)
          }
          if (err?.response?.data?.errors?.email) {
              this.$toast.error(err?.response?.data?.errors?.email?.msg)
          }
          if (err?.response?.data?.errors?.subject) {
              this.$toast.error(err?.response?.data?.errors?.subject?.msg)
          }
          if (err?.response?.data?.errors?.message) {
              this.$toast.error(err?.response?.data?.errors?.message?.msg)
          }
          this.$store.commit('loaders/hide')
      }
    },
    async getHomePageSecondSection(){
      this.$store.commit('loaders/show')
      try { 
        const response = await this.$axios.$get(`/home-page-second-section`)
        this.secondSection = response.data
      } catch (error) {
        console.log(error);// eslint-disable-line
      }finally{this.$store.commit('loaders/hide')}
    },
    async getHomePageSecondSectionBanner(){
      this.$store.commit('loaders/show')
      try {
        const response = await this.$axios.$get(`/home-page-second-section-banner`)
        this.secondSectionBanner = response.data
      } catch (error) {
         console.log(error);// eslint-disable-line
      }finally{this.$store.commit('loaders/hide')}
    },
    async getHomePageThirdSectionContent(){
      this.$store.commit('loaders/show')
      try { 
        const response = await this.$axios.$get(`/home-page-third-section-content/view`)
        this.thirdSectionContent = response.data
      } catch (error) {
         console.log(error);// eslint-disable-line
      }finally{this.$store.commit('loaders/hide')}
    },
    async getHomePageThirdSection(){
      this.$store.commit('loaders/show')
      try { 
        const response = await this.$axios.$get(`/home-page-third-section`)
        this.thirdSection = response.data
      } catch (error) {
         console.log(error);// eslint-disable-line
      }finally{this.$store.commit('loaders/hide')}
    },
    async getHomePageFifthSectionContent(){
      this.$store.commit('loaders/show')
      try {
        const response = await this.$axios.$get(`/home-page-fifth-section-content/view`)
        this.fifthSectionContent = response.data
      } catch (error) {
         console.log(error);// eslint-disable-line
      }finally{this.$store.commit('loaders/hide')}
    },
    async getHomePageFifthSection(){
      this.$store.commit('loaders/show')
      try {
        const response = await this.$axios.$get(`/home-page-fifth-section`)
        this.fifthSection = response.data
      } catch (error) {
         console.log(error);// eslint-disable-line
      }finally{this.$store.commit('loaders/hide')}
    },
    whatsappBtnHandler(){
      window.open('https://wa.me/7483862055/?text=Hi Ace', '_blank');
    }
  },
}
</script>

<style scoped>

#navbar {
  background: transparent !important;
}

h1, h2, h3, h4, h5, h6 {
    color: #222 !important;
    font-family: 'Quattrocento Sans', sans-serif;
}
.banner .banner-content .banner-content-row .banner-content-col div .circle-first {
    color: #cb2b1d;
}
.banner .banner-content .banner-content-row .banner-content-col div .circle-second {
    color: #02b8f4;
}
.service .service-row .service-col div {
    min-height: 385px;
}

.red-circle{
  border: 4px solid #cb2b1d;
  background: #cb2b1d;
  color: #fff !important;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 2px 2px 6px 2px #818181;
  font-family: 'Circular-Loom';
  letter-spacing: 3px;
}

.red-circle b{
  color: #fff !important;
  font-size: 35px;
  /* animation: blinker 1.5s linear infinite; */
/* text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff; */
}


.blue-circle{
  border: 4px solid #44bfed;
  background: #44bfed;
  color: #fff !important;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 2px 2px 6px 2px #818181;
  font-family: 'Circular-Loom';
  letter-spacing: 3px;
}

.blue-circle b{
  color: #fff !important;
  font-size: 35px;
  /* animation: blinker 1.5s linear infinite; */
/* text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff; */
}

.i-icon{
  color: #02b8f4 !important;
    text-shadow: 2px 0 0 #02b8f4, -2px 0 0 #02b8f4, 0 2px 0 #02b8f4, 0 -2px 0 #02b8f4, 1px 1px #02b8f4, -1px -1px 0 #02b8f4, 1px -1px 0 #02b8f4, -1px 1px 0 #02b8f4;
    letter-spacing: 3px;
    font-size: 36px;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

@media screen and (max-width: 600px) {
  .service .service-row .service-col div {
    min-height: 30px;
  }
  /* .row>* {
    padding: 0;
  } */

  .call-to-action .call-to-action-row .call-to-action-col .row h4 {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .call-to-action-col {
    margin-bottom: 35px;
  }

  .red-circle{
  width: 160px;
  height: 160px;
  font-family: 'Circular-Loom';
  letter-spacing: 3px;
}

.red-circle b{
  font-size: 27px;
}


.blue-circle{
  width: 160px;
  height: 160px;
  font-family: 'Circular-Loom';
  letter-spacing: 3px;
}

.blue-circle b{
  font-size: 27px;
}
}

/* Product Slider */

.product-area {
  width: 100%;
  padding: 50px 0;
  padding-top: 0;
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

.img-content-container .img-wwrapper{
  width: 140px;
  margin: 0 auto;
}

.img-content-container .img-wwrapper img{
  width: 100%;
  object-fit: contain;
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

.whatsapp-icon{
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 44;
}

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
  background: #101F2E;
}


.projectFactsWrap{
    display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
}


#projectFacts .fullWidth{
  padding: 0;
}

.projectFactsWrap .item{
  width: 50%;
  height: 100%;
  padding: 50px 0px;
  text-align: center;
}

.projectFactsWrap .item:nth-child(1){
  background: rgb(16, 31, 46);
}

.projectFactsWrap .item:nth-child(2){
  background: rgb(18, 34, 51);
}

.projectFactsWrap .item:nth-child(3){
  background: rgb(21, 38, 56);
}

.projectFactsWrap .item:nth-child(4){
  background: rgb(23, 44, 66);
}

.projectFactsWrap .item p.number{
  font-size: 40px;
  padding: 0;
  font-weight: bold;
}

.projectFactsWrap .item p{
  color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  margin: 0;
  padding: 10px;
  font-family: 'Open Sans';
}


.projectFactsWrap .item span{
  width: 60px;
  background: rgba(255, 255, 255, 0.8);
  height: 2px;
  display: block;
  margin: 0 auto;
}


.projectFactsWrap .item i, .ff-icon{
  vertical-align: middle;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.8);
}


.projectFactsWrap .item:hover i, .projectFactsWrap .item:hover p{
  color: white;
}

.projectFactsWrap .item:hover span{
  background: white;
}

@media (max-width: 786px){
  .projectFactsWrap .item {
     flex: 0 0 50%;
  }
}


</style>