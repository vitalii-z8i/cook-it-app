<template>
  <footer>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">
          <font-awesome-icon icon="compass" size="2x" />
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

<style lang="scss" scoped>
  footer {
    width: 100%;
    position: fixed;
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
        padding-top: 1rem;
        .router-link-exact-active {
          color: #1d00ff;
        }
      }
    }
  }
</style>
