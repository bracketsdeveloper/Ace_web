<template>
  <div class="spinner-container">
    <div class="spin-wrapper">
      <div class="spinonediv-1"></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'LoaderComponent'
}
</script>

<style scoped>
html,body{
    width:100%;
    height:100vh;
    position: relative;
}

.spinner-container {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: #e6e6e6;
    z-index: 99999999999999;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.7;
}

.spin-wrapper {
    width: 220px;
    height: 220px;
    /* background: -webkit-repeating-linear-gradient(left, #052c33, #052c33 1px, transparent 1px, transparent 12.5%), -webkit-repeating-linear-gradient(top, #052c33, #052c33 1px, transparent 1px, transparent 12.5%);
    background: -moz-repeating-linear-gradient(left, #052c33, #052c33 1px, transparent 1px, transparent 12.5%), -moz-repeating-linear-gradient(top, #052c33, #052c33 1px, transparent 1px, transparent 12.5%);
    background: -o-repeating-linear-gradient(left, #052c33, #052c33 1px, transparent 1px, transparent 12.5%), -o-repeating-linear-gradient(top, #052c33, #052c33 1px, transparent 1px, transparent 12.5%);
    background: -ms-repeating-linear-gradient(left, #052c33, #052c33 1px, transparent 1px, transparent 12.5%), -ms-repeating-linear-gradient(top, #052c33, #052c33 1px, transparent 1px, transparent 12.5%);
    background: repeating-linear-gradient(to right, #052c33, #052c33 1px, transparent 1px, transparent 12.5%), repeating-linear-gradient(to bottom, #052c33, #052c33 1px, transparent 1px, transparent 12.5%); */
    /* background-color: #07303a; */
    margin: 15px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 6px;
    display: inline-block;
    vertical-align: top;
}



/********************************************* 
  Spinner 1 
  *********************************************/

@-webkit-keyframes spinner-1--before {
    from {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        opacity: 0;
    }

    to {
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
        opacity: 1;
    }
}

@keyframes spinner-1--before {
    from {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        opacity: 0;
    }

    to {
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
        opacity: 1;
    }
}

@-webkit-keyframes spinner-1--after {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }

    to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
        opacity: 0;
    }
}

@keyframes spinner-1--after {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }

    to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
        opacity: 0;
    }
}

.spinonediv-1 {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40px 0 0 -40px;
}

.spinonediv-1:before,
.spinonediv-1:after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    border: 2px solid #02b8f4;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    box-sizing: border-box;
    -webkit-animation: spinner-1--before 0.5s linear infinite;
    animation: spinner-1--before 0.5s linear infinite;
}

.spinonediv-1:before {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
}

.spinonediv-1:after {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-animation-name: spinner-1--after;
    animation-name: spinner-1--after;
}
</style>