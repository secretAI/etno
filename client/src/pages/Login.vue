<template lang="pug">
div(class="wrapper")
  form(class="container" @submit.prevent="sendData")
    h1(class="title") Вход
    glo-input(placeholder="Email" v-model="email")
    glo-input(placeholder="Пароль" type="password" v-model="password")
    log-btn
    router-link(to="/signup" class="link") Я новый пользователь 
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async sendData() {
      const response = await axios.post("http://127.0.0.1:3030/api/login", {
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<style lang="scss">
  @mixin centerify {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  $gray: rgb(224, 224, 224);
  $blue: rgb(0, 83, 160);

  .wrapper {
    @include centerify();
    display: flex;
    justify-content: center;
    background-image: url(../assets/login-background.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: $gray;
    .container {
      width: 440px;
      height: 380px;
      margin-top: 8.5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: $gray;
      font-family: 'Roboto Slab', serif;
      * {
        margin: 8px;
        font-weight: 600;
      }
      .title {
        font-size: 72px;
        font-weight: 700;  
        color: rgb(32, 32, 32);
      }
      .link {
        font-size: 20px;
        color: black;
        transition-duration: 120ms;
        &:visited {
          color: black;
        }
      }
    }
  }
</style>