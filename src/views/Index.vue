<template>
  <section>
    <Randomizer @selected="showRecipe" />
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
