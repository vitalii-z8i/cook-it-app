<template>
  <div class="recipe-card">
    <div class="card-head">
      <button @click="$emit('closed')">
        <font-awesome-icon icon="arrow-left" size="2x" />
      </button>
      <h1>{{ dish.name }}</h1>
      <button @click="showOptions = !showOptions">
        <font-awesome-icon icon="paperclip" size="2x" />
      </button>
    </div>
    <div class="card-body">
      <img :src="fetchImage()"/>
      <div class="body-text">
        <ul>
          <li v-for="ing in dish.recipe" :key="ing">{{ ing }}</li>
        </ul>
        <p>{{ dish.text }}</p>
      </div>
    </div>
    <div class="actions" :class="{ active: showOptions }" @click="showOptions = false">
      <ul @click.stop>
        <li>
          <button @click="saveRecipe('breakfast')">
            <font-awesome-icon icon="coffee" /> Зберегти на сніданок
          </button>
        </li>
        <li>
          <button @click="saveRecipe('lunch')">
            <font-awesome-icon icon="sun" /> Зберегти на обід
          </button>
        </li>
        <li>
          <button @click="saveRecipe('dinner')">
            <font-awesome-icon icon="moon" /> Зберегти на вечерю
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dish: {
      id: Number,
      name: String,
      photoURL: String,
      recipe: {
        type: Array
      },
      text: String,
    }
  },
  data () {
    return {
      showOptions: false,
    }
  },
  methods: {
    saveRecipe (mealTime) {
      let saved = JSON.parse(localStorage[mealTime] || '[]')
      if (!Array.isArray(saved)) {
        saved = [saved]
      }
      localStorage[mealTime] = JSON.stringify([...saved, this.dish])
      this.showOptions = false
      this.$emit('closed')
    },
    fetchImage () {
      try {
        return require(`@/assets/recipes/${this.dish.id}/original.jpeg`)
      } catch(err) {
        return require('@/assets/no-photo.png')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .recipe-card {
    padding: 2rem 0.7rem 5rem 0.7rem;
    overflow-y: scroll;
    background: #ffffff;
    text-align: left;
    max-width: 100%;

    .card-head {
      display: flex;
      justify-content: space-between;
      h1 {
        text-align: center;
      }
      button {
        color: #3f66fe;
        padding: 0;
        border: none;
        background: none;
        width: 2rem;
      }
    }
    .card-body {
      max-width: 100%;
      overflow: hidden;
      border-radius: 20px;
      box-shadow: 0 0 15px -10px #3f66fe;

      img {
        width: 100%;
        max-height: 40vh;
        object-fit: cover;
      }
      .body-text {
        padding: 1rem;
        ul {
          list-style: none;
          padding: 0;
          line-height: 1.5;
          color: #000000;
        }
        p {
          color: #4c4c4c;
          line-height: 1.4;
        }
      }
    }
    .actions {
      overflow: hidden;
      width: 100vw;
      height: 0;
      z-index: 20;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #4e4e4eb5;
      ul {
        bottom: -50vh;
        transition: bottom 0.5s ease-in-out;
        position: absolute;
        width: 100%;
        background: #ffffff;
        margin: 0;
        padding: 1rem 0;
        list-style: none;
        max-width: 100%;

        li {
          padding: 1rem 2rem;
          &:first-child {
            padding-top: 0.5rem;
          }
          &:last-child {
            padding-bottom: 0.5rem;
          }
          &:not(:last-child) {
            border-bottom: 2px solid #3f66fe14;
          }
          button {
            color: #000000;
            font-size: 1.5em;
            border: none;
            background: none;
            &:hover {
              color: #1d00ff;
            }
          }
        }
      }
      &.active {
        height: 100vh;
        ul {
          bottom: 0;
        }
      }
    }

    /** SCROLLBAR STYLES **/
    &::-webkit-scrollbar {
      position: absolute;
      width: 6px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background-color: #3f66fe15;
      border-radius: 50px;
      &:hover {
        background-color: #3f66fe99;
      }
    }
  }
</style>
