<template lang="pug">
button(type="submit" class="btn") Опубликовать
</template>

<script>
export default {
  name: "post-btn"
}
</script>

<style lang="scss">

  $blue: rgb(0, 83, 160);

  .btn {
    width: 160px;
    height: 45px;
    border: 2px solid $blue;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    font-family: 'Roboto Slab', serif;
    background-color: white;
    color: black;
    transition-duration: 120ms;
    font-weight: 600;
    &:hover {
      background-color: $blue;
      border-color: $blue;
      color: white;
    }
  }
</style>