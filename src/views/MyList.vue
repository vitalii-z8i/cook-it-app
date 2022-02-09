<template>
  <section class="list">
    <h1>Збережені</h1>
    <div v-if="!breakfast && !lunch && !dinner" class="no-items">
      <p>Ви ще не зберегли жодного рецепту</p>
    </div>
    <div v-for="meal in breakfast" :key="`br-${meal.id}`" class="recipe-card">
      <div class="card-head">
        <h2>
          <small>Сніданок:</small>
          {{ meal.name }}
        </h2>
        <button @click="deleteItem('breakfast', meal.id)">
          <font-awesome-icon :icon="['fas', 'times']" size="2x" />
        </button>
      </div>
      <div class="card-body">
          <img :src="fetchImage(meal)"/>
        <div class="body-text">
          <ul>
            <li v-for="ing in meal.recipe" :key="ing">{{ ing }}</li>
          </ul>
          <p>{{ meal.text }}</p>
        </div>
      </div>
    </div>

    <div v-for="meal in lunch" :key="`br-${meal.id}`" class="recipe-card">
      <div class="card-head">
        <h2>
          <small>Обід:</small>
          {{ meal.name }}
        </h2>
        <button @click="deleteItem('lunch', meal.id)">
          <font-awesome-icon :icon="['fas', 'times']" size="2x" />
        </button>
      </div>
      <div class="card-body">
          <img :src="fetchImage(meal)"/>
        <div class="body-text">
          <ul>
            <li v-for="ing in meal.recipe" :key="ing">{{ ing }}</li>
          </ul>
          <p>{{ meal.text }}</p>
        </div>
      </div>
    </div>

    <div v-for="meal in dinner" :key="`br-${meal.id}`" class="recipe-card">
      <div class="card-head">
        <h2>
          <small>Вечеря:</small>
          {{ meal.name }}
        </h2>
        <button @click="deleteItem('dinner', meal.id)">
          <font-awesome-icon :icon="['fas', 'times']" size="2x" />
        </button>
      </div>
      <div class="card-body">
          <img :src="fetchImage(meal)"/>
        <div class="body-text">
          <ul>
            <li v-for="ing in meal.recipe" :key="ing">{{ ing }}</li>
          </ul>
          <p>{{ meal.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  },
  mounted () {
    try {
      if (localStorage.breakfast) {
        const breakfast = JSON.parse(localStorage.breakfast) || []
        this.breakfast = Array.isArray(breakfast) ? breakfast : [breakfast]
      }
      if (localStorage.lunch) {
        const lunch = JSON.parse(localStorage.lunch) || []
        this.lunch = Array.isArray(lunch) ? lunch : [lunch]
      }
      if (localStorage.dinner) {
        const dinner = JSON.parse(localStorage.dinner) || []
        this.dinner = Array.isArray(dinner) ? dinner : [dinner]
      }
    } catch (err) {
      console.error(err)
      localStorage.breakfast = []
      localStorage.lunch = []
      localStorage.dinner = []
    }
  },
  methods: {
    deleteItem (mealTime, id) {
      const newMealset = this[mealTime].filter(m => m.id !== id)
      Object.assign(this, { [mealTime]: newMealset })
      localStorage[mealTime] = JSON.stringify(newMealset)
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
