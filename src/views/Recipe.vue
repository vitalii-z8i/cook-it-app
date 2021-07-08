<template>
  <RecipeCard v-if="dish?.id" :key="dish.id" :dish="dish" @closed="unsetRecipe" />
</template>

<script>
import RecipeCard from '@/components/RecipeCard'
import recipes from '@/assets/recipes'
import emitter from '@/emitter'

export default {
  components: { RecipeCard },
  data () {
    return {
      dish: {
        id: null,
        name: '',
      },
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === from.name) {
        this.loadRecipe()
      }
    }
  },
  mounted () {
    this.loadRecipe()
  },
  methods: {
    loadRecipe () {
      try {
        emitter.$emit('loading', true)
        this.dish = recipes.find(r => r.id === Number(this.$route.params.id))
      } catch (err) {
        console.error(err)
      } finally {
        emitter.$emit('loading', false)
      }
    },
    unsetRecipe () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
