<template>
  <div class="header">
    <router-link :to="{ name: 'Home' }">
      <span>cookIT.app</span> <font-awesome-icon icon="dice" size="2x" color="#3f66fe" />
    </router-link>
  </div>
</template>

<style lang="scss">
  .header {
    position: absolute;
    background: transparent;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    a {
      background: transparent;
      text-decoration: none;
      color: #000000;
      font-weight: bold;
      padding: 0.5rem 0;
      span {
        padding: 1rem 0;
      }
    }
  }
</style>
