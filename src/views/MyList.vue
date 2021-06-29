<template>
  <section class="list">
    <h1>Збережені</h1>
    <div v-if="!breakfast && !lunch && !dinner" class="no-items">
      <p>Ви ще не зберегли жодного рецепту</p>
    </div>
    <div v-if="breakfast" class="recipe-card">
      <div class="card-head">
        <h2>
          <small>Сніданок:</small>
          {{ breakfast.name }}
        </h2>
        <button @click="deleteItem('breakfast')">
          <font-awesome-icon :icon="['fas', 'times']" size="2x" />
        </button>
      </div>
      <div class="card-body">
          <img :src="fetchImage(breakfast)"/>
        <div class="body-text">
          <ul>
            <li v-for="ing in breakfast.recipe" :key="ing">{{ ing }}</li>
          </ul>
          <p>{{ breakfast.text }}</p>
        </div>
      </div>
    </div>

      <div v-if="lunch" class="recipe-card">
        <div class="card-head">
          <h2>
            <small>Обід:</small>
            {{ lunch.name }}
          </h2>
          <button @click="deleteItem('lunch')">
            <font-awesome-icon :icon="['fas', 'times']" size="2x" />
          </button>
        </div>
        <div class="card-body">
          <img :src="fetchImage(lunch)"/>
          <div class="body-text">
            <ul>
              <li v-for="ing in lunch.recipe" :key="ing">{{ ing }}</li>
            </ul>
            <p>{{ lunch.text }}</p>
          </div>
        </div>
      </div>

    <div v-if="dinner" class="recipe-card">
      <div class="card-head">
        <h2>
          <small>Вечеря:</small>
          {{ dinner.name }}
        </h2>
        <button @click="deleteItem('dinner')">
          <font-awesome-icon :icon="['fas', 'times']" size="2x" />
        </button>
      </div>
      <div class="card-body">
          <img :src="fetchImage(dinner)"/>
        <div class="body-text">
          <ul>
            <li v-for="ing in dinner.recipe" :key="ing">{{ ing }}</li>
          </ul>
          <p>{{ dinner.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      breakfast: undefined,
      lunch: undefined,
      dinner: undefined,
    }
  },
  mounted () {
    if (localStorage.breakfast) {
      this.breakfast = JSON.parse(localStorage.breakfast)
    }
    if (localStorage.lunch) {
      this.lunch = JSON.parse(localStorage.lunch)
    }
    if (localStorage.dinner) {
      this.dinner = JSON.parse(localStorage.dinner)
    }
  },
  methods: {
    deleteItem (mealTime) {
      Object.assign(this, { [mealTime]: undefined })
      delete localStorage[mealTime]
    },
    fetchImage (dish) {
      try {
        return require(`@/assets/recipes/${dish.id}/original.jpeg`)
      } catch(err) {
        return require('@/assets/no-photo.png')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  section.list {
    overflow-y: scroll;
    height: auto !important;
    padding-bottom: 4rem;

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
  .no-items {
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .recipe-card {
    padding: 0 0.7rem 2rem 0.7rem;
    background: #ffffff;
    text-align: left;
    max-width: 100%;

    .card-head {
      display: flex;
      justify-content: space-between;
      h1, h2 {
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
