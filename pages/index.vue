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
                  <h4>For all seasons</h4>
                  <!-- <p>Ace work for you?</p> -->
                  <div><font-awesome-icon class="circle-first" :icon="['fa', 'circle-dot']"/></div>
                </div>
                <div class="banner-content-col">
                  <h4>For all reasons</h4>
                  <!-- <p>Take the survey</p> -->
                  <div><font-awesome-icon class="circle-second" :icon="['fa', 'circle-dot']"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-image-div">
        <img src="/assets/images/card.png" class="card-image" alt="" />
      </div>
    </section>
    <section class="call-to-action">
      <div class="container-fluid">
        <div class="row call-to-action-row">
          <div class="col-lg-4 col-md-6 col-sm-12 call-to-action-col">
            <div class="row">
              <div class="icon"><font-awesome-icon icon="fa-brands fa-whatsapp" @click="whatsappBtnHandler" /></div>
              <!-- <p>CALL US<br />DIRECTLY</p>
              <h4>(+37) 96354868</h4> -->
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 call-to-action-col">
            <div class="row">
              <!-- <h4>25600</h4> -->
              <p style="font-size:18px">Clients And<br />Employees Delighted</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 call-to-action-col">
            <div class="row">
              <!-- <h4>76500</h4> -->
              <p style="font-size:18px">Gifts Curated</p>
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
          <div v-for="(item, index) in thirdSectionContent" :key="index" class="service-col" data-aos="fade-left">
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
            <img src="/assets/images/book.png" alt="" data-aos="fade-right" />
          </div>
          <div
            class="
              col-lg-6 col-md-6 col-sm-12
              banner--2-col banner--2--outer-col
            "
          >
            <div class="banner--2--innercol" data-aos="fade-left">
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
          <div v-for="(item, index) in fifthSectionContent" :key="index" class="connect-col" data-aos="fade-right">
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

    <section class="banner--3" data-aos="fade-up">
      <div class="wrapper">
        <div class="row banner--3-row">
          <div class="col-lg-6 col-md-6 col-sm-12 banner--3-col">
            <div class="container" style="height: 100%">
              <div class="banner--3-inner">
                <p>
                  We recognise celebrate and build your business through creative corporate gifting solutions
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
      window.open('https://wa.me/7892156160/?text=Hi Ace', '_blank');
    }
  },
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6 {
    color: #222 !important;
    font-family: 'Quattrocento Sans', sans-serif;
}
.banner .banner-content .banner-content-row .banner-content-col div .circle-first {
    color: #ff0000;
}
.banner .banner-content .banner-content-row .banner-content-col div .circle-second {
    color: #02b8f4;
}
.service .service-row .service-col div {
    min-height: 385px;
}

@media screen and (max-width: 600px) {
  .service .service-row .service-col div {
    min-height: 30px;
  }
}
</style>