<template>
  <section>
    <div class="container">
      <RecipeCard v-if="dish.name" :dish="dish" @closed="unsetRecipe" />
      <Randomizer v-else @selected="showRecipe" />
    </div>
  </section>
</template>

<script>
import Randomizer from '@/components/Randomizer'
import RecipeCard from '@/components/RecipeCard'

export default {
  name: 'Home',
  components: { Randomizer, RecipeCard },
  data () {
    return {
      dish: {
        name: '',
        photoURL: '',
        recipe: [],
        text: '',
        tags: []
      }
    }
  },
  methods: {
    showRecipe (dish) {
      this.dish = dish
    },
    unsetRecipe () {
      this.dish = { name: '' }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 4rem;
}
</style>
