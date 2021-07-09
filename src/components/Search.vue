<template>
  <div class="search-bg" v-show="showSearch" @click="hideSearch">
    <div class="search-wrap" @click.stop>
      <input @input="e => searchTerm = e.target.value" ref="searchField" placeholder="Введіть щось..."/>
      <div class="results">
        <div v-for="r in results" :key="r.id" @click="hideSearch(); $router.push({ name: 'Recipe', params: { id: r.id } })" class="result">
          {{ r.name }}
        </div>
      </div>
    </div>
    <div class="loading" v-if="isLoading">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script>
import recipes from '@/assets/recipes'
import emitter from '@/emitter'

export default {
  props: {
    showSearch: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    showSearch (isActive) {
      if (isActive) {
        setTimeout(() => {
          this.$refs.searchField.focus()
        }, 100)
      }
    },
    searchTerm () {
      this.handleSearch()
    }
  },
  data () {
    return {
      isLoading: false,
      timeOutVal: null,
      searchTerm: '',
      results: []
    }
  },
  methods: {
    handleSearch () {
      this.isLoading = true
      clearTimeout(this.timeOutVal);
      this.timeOutVal = setTimeout(this.search, 600)
    },
    search () {
      try {
        if (!this.searchTerm) {
          this.results = []
          return
        }
        this.results = recipes.filter(r => r.name.replace(/'|,|./, '').includes(this.searchTerm.replace(/'|,|./, ''))).splice(0, 5)
      } catch (err) {
        console.err(err)
        this.results = []
      } finally {
        this.isLoading = false
      }
    },
    hideSearch () {
      emitter.$emit('showSearch', false)
      this.isLoading = false
      this.searchTerm = ''
      this.results = []
    },
  }
}
</script>

<style lang="scss" scoped>
  .search-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    min-height: 568px;
    z-index: 10;
    background: #4e4e4eb5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .search-wrap {
      width: 100%;
      .results {
        background: #ffffff;
        text-align: left;
        margin: 0.5rem 0;
        .result {
          cursor: pointer;
          font-size: 1.2em;
          padding: 1rem 0.5rem;
          &:not(:last-child) {
            border-bottom: 2px solid #3f66fe14;
          }
        }
      }
      input {
        width: 100%;
        margin-top: 1rem;
        box-sizing: border-box;
        padding: 1.3rem 1rem;
        font-size: 1.2em;
        font-weight: bold;
        background: #ffffff;
        border: none;
        box-shadow: 0 0 17px 3px #0000005e;

        &:hover, &:focus, &:active {
          outline: none;
        }
      }
    }
    .loading {
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 1rem;
      padding: 0.6rem 0;

      .spinner,
      .spinner:after {
        border-radius: 50%;
        width: 1.5em;
        height: 1.5em;
      }
      .spinner {
        margin: 0.3rem 1rem;
        position: relative;
        text-indent: -9999em;
        border-top: 0.4em solid #3f66fe15;
        border-right: 0.4em solid #3f66fe15;
        border-bottom: 0.4em solid #3f66fe15;
        border-left: 0.4em solid #3f66fe99;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;
      }
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
