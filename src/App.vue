<template>
  <Header />
  <Loader :isLoading="isLoading" />
  <Search :showSearch="showSearch" />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Search from '@/components/Search'
import emitter from '@/emitter'

export default {
  name: 'App',
  components: { Header, Footer, Loader, Search },
  data () {
    return {
      isLoading: false,
      showSearch: false,
    }
  },
  mounted () {
    emitter.$on('loading', (isLoading) => {
      this.isLoading = isLoading
    })
    emitter.$on('showSearch', (showSearch) => {
      this.showSearch = showSearch
    })
  },
  beforeUnmount () {
    emitter.$off('loading')
    emitter.$off('showSearch')
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  width: 100vw;
  min-height: 568px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  min-height: 568px;
  position: relative;
  section {
    padding-top: 50px;
    height: calc(100vh - 105px);
    min-height: calc(568px - 105px);
    overflow-y: hidden;
  }
  svg:focus, svg:active {
    outline: none;
    border: none;
    box-shadow: none;
  }
}
</style>
