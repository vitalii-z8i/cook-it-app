<template>
  <div class="randomizer">
    <button @click="selectRecipe">
      <font-awesome-icon icon="dice" size="4x" />
    </button>
  </div>
</template>

<script>
import emitter from '@/emitter'
import recipes from '@/assets/recipes'

export default {
  mounted() {
    emitter.$on('getRecipe', this.selectRecipe)
  },
  beforeUnmount() {
    emitter.$off('getRecipe')
  },
  methods: {
    selectRecipe() {
      try {
        emitter.$emit('loading', true)
        const recipe = recipes[Math.floor(Math.random()*recipes.length)]
        this.$emit('selected', recipe)
      } catch (err) {
        console.error(err)
      } finally {
        emitter.$emit('loading', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .randomizer {
    display: flex;
    flex-direction: column;
    height: 100%;

    button {
      width: 13rem;
      height: 13rem;
      background: #ffffff;
      border: none;
      margin-bottom: auto;
      margin-top: auto;

      border-radius: 50%;
      box-shadow: 0 0 12px -4px #3f66fe;
      color: #3f66fe;

      transition: all 1s ease;
      &:hover {
        box-shadow: none;
        background: #e0e0e0;
      }
    }
  }
</style>
