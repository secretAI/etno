<template lang="pug">
div(class="wrapper")
  form(class="container" @submit.prevent="sendData")
    h1(class="title") Регистрация
    glo-input(placeholder="Email")
    glo-input(placeholder="Пароль" type="password")
    glo-input(placeholder="Повторите пароль" type="password")
    sign-btn 
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      email: "",
      password: "",
      repassword: ""
    }
  },
  methods: {
    async sendData() {
      if(this.password !== this.repassword) throw new SyntaxError("Пароли не совпадают");
      const response = await axios.post("http://127.0.0.1:3030/api/signup", {
        email: this.email,
        password: this.password
      });
      console.log(response);
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
  
  $gray: rgb(224, 224, 224);;

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
    }
  }
</style>