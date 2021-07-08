<template>
  <div class="search-bg" v-show="showSearch" @click="hideSearch">
    <div class="search-wrap" @click.stop>
      <input v-model="searchTerm" @keyup="handleSearch" ref="searchField" placeholder="Введіть щось..."/>
      <div class="results">
        <div v-for="r in results" :key="r.id" @click="hideSearch(); $router.push({ name: 'Recipe', params: { id: r.id } })" class="result">
          {{ r.name }}
        </div>
      </div>
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
    }
  },
  data () {
    return {
      timeOutVal: null,
      searchTerm: '',
      results: []
    }
  },
  methods: {
    handleSearch () {
      clearTimeout(this.timeOutVal);
      this.timeOutVal = setTimeout(this.search, 600)
    },
    search () {
      if (!this.searchTerm) {
        this.results = []
        return
      }
      this.results = recipes.filter(r => r.name.replace(/'|,|./, '').includes(this.searchTerm.replace(/'|,|./, ''))).splice(0, 5)
    },
    hideSearch () {
      emitter.$emit('showSearch', false)
      this.searchTerm = ''
      this.results = []
    },
  }
}
</script>

<style lang="scss" scoped>
  .search-bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
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
          padding: 1rem 0.5rem;
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
  }
</style>
