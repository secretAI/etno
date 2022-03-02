<template lang="pug">
input(type="text" class="input")
</template>

<script>
export default {
  name: "glo-input"
}
</script>

<style lang="scss">
  .input {
    width: 330px;
    height: 50px;
    border: 2px solid black;
    border-radius: 4px;
    padding-inline: 15px;
    font-size: 20px;
    font-family: 'Roboto Slab', serif;
  }
</style>