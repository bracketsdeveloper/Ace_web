<template>
  <div class="wpo-breadcumb-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="wpo-breadcumb-wrap">
            <h2>{{pageName}}</h2>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><span>{{pageName}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props:{
      pageName:{
          type: String,
          default: ''
      }
  }
}
</script>

<style scoped>
.wpo-breadcumb-area {
    background: url(/assets/images/page-title.51571cffff.png) no-repeat top/cover;
    min-height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    margin-top: 90px;
}

@media (max-width:767px) {
    .wpo-breadcumb-area {
        min-height: 250px
    }
}

.wpo-breadcumb-area:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* background: #02b8f429; */
    content: "";
    z-index: -1;
    opacity: .7
}

.wpo-breadcumb-area .wpo-breadcumb-wrap {
    text-align: center
}

.wpo-breadcumb-area .wpo-breadcumb-wrap h2 {
    font-size: 60px;
    color: #fff;
    line-height: 60px;
    margin-top: -10px;
    margin-bottom: 20px
}

@media (max-width:767px) {
    .wpo-breadcumb-area .wpo-breadcumb-wrap h2 {
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 10px
    }
}

.wpo-breadcumb-area .wpo-breadcumb-wrap ul li {
    display: inline-block;
    padding: 0 5px;
    color: #fff;
    position: relative;
    font-size: 20px;
    font-family: 'Quattrocento Sans', sans-serif 
}

@media (max-width:767px) {
    .wpo-breadcumb-area .wpo-breadcumb-wrap ul li {
        font-size: 18px
    }
}

.wpo-breadcumb-area .wpo-breadcumb-wrap ul li:after {
    content: "/";
    position: relative;
    left: 7px
}

.wpo-breadcumb-area .wpo-breadcumb-wrap ul li:last-child span {
    color: #cbd4fd
}

.wpo-breadcumb-area .wpo-breadcumb-wrap ul li:last-child:after {
    display: none
}

.wpo-breadcumb-area .wpo-breadcumb-wrap ul li a {
    color: #fff;
    font-size: 20px;
    -webkit-transition: all .3s;
    transition: all .3s;
    text-decoration: none;
}

.wpo-breadcumb-area .wpo-breadcumb-wrap ul li a:hover {
    color: #ffb100
}
</style>