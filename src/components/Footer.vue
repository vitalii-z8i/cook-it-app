<template>
  <footer>
    <ul>
      <li>
        <a href="#" @click.capture="openSearch" class="router-link-active">
          <font-awesome-icon icon="search" size="2x" />
        </a>
      </li>
      <li>
        <router-link :to="{ name: 'Home' }">
          <font-awesome-icon icon="compass" size="3x" />
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'MyList' }">
          <font-awesome-icon icon="list-ul" size="2x" />
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import emitter from '@/emitter'

export default {
  methods: {
    openSearch () {
      emitter.$emit('showSearch', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    height: 65px;
    bottom: 0;
    background: #ffffff;
    box-shadow: 0 -1px 10px -5px;
    ul {
      list-style-type: none;
      display: flex;
      width: 100%;
      margin: 0;
      padding: 0;
      justify-content: space-around;
      align-items: center;
      li {
        a:-webkit-any-link {
          color: rgb(85, 26, 139);
        }
        a.router-link-exact-active {
          color: #1d00ff;
        }
      }
    }
  }
</style>
