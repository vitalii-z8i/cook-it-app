<template>
  <section>
    <div class="container">
      <Randomizer @selected="showRecipe" />
    </div>
  </section>
</template>

<script>
import Randomizer from '@/components/Randomizer'

export default {
  name: 'Home',
  components: { Randomizer },
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
      this.$router.push({ name: 'Recipe', params: { id: dish.id } })
    },
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 4rem;
}
</style>
