<template lang="pug">
button(type="submit" class="btn") Войти
</template>

<script>
export default {
  name: "log-btn"
}
</script>

<style lang="scss">

  $blue: rgb(0, 83, 160);

  .btn {
    width: 140px;
    height: 45px;
    border: 2px solid black;
    border-radius: 16px;
    cursor: pointer;
    font-size: 20px;
    font-family: 'Roboto Slab', serif;
    background-color: black;
    color: white;
    transition-duration: 120ms;
    &:hover {
      background-color: $blue;
      border-color: $blue;
    }
  }
</style>