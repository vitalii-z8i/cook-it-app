<template>
  <div class="loader" v-show="isLoading">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .loader {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background: #4e4e4eb5;
    display: flex;
    justify-content: center;
    align-items: center;

    .spinner,
    .spinner:after {
      border-radius: 50%;
      width: 16em;
      height: 16em;
    }
    .spinner {
      margin: 60px auto;
      font-size: 10px;
      position: relative;
      text-indent: -9999em;
      border-top: 1.1em solid #3f66fe15;
      border-right: 1.1em solid #3f66fe15;
      border-bottom: 1.1em solid #3f66fe15;
      border-left: 1.1em solid #3f66fe99;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: load8 1.1s infinite linear;
      animation: load8 1.1s infinite linear;
    }
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
