<template lang="pug">
div(class="wrapper")
  form(class="container" @submit.prevent="sendData")
    h1(class="title") Регистрация
    glo-input(placeholder="Email" v-bind:value="email" @input="email = $event.target.value")
    glo-input(placeholder="Пароль" type="password" v-bind:value="password" @input="password = $event.target.value")
    glo-input(placeholder="Повторите пароль" type="password" v-bind:value="repassword" @input="repassword = $event.target.value")
    sign-btn 
    router-link(to="/login" class="link") Авторизация
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
      const response = await axios.post("http://127.0.0.1:3030/api/signup", {
        email: this.email,
        password: this.password
      });
      if(response.status === 200) this.$router.push({path: "/login"});
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin centerify {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .wrapper {
    @include centerify();
    display: flex;
    justify-content: center;
    background-image: url(../assets/login-background.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .container {
      width: 440px;
      height: 380px;
      margin-top: 8.5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
        margin-top: -5px;
        color: black;
        transition-duration: 200ms;
        &:visited {
          color: black;
        }
        &:hover {
          color: rgb(73, 73, 73);
        }        
      }
    }
  }
</style>