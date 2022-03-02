<template lang="pug">
div(class="wrapper")
  form(class="container" @submit.prevent="sendData")
    h1(class="title") Вход
    glo-input(placeholder="Email" v-bind:value="email" @input="email = $event.target.value")
    glo-input(placeholder="Пароль" type="password" v-bind:value="password" @input="password = $event.target.value")
    log-btn
    router-link(to="/signup" class="link") Создать аккаунт 
    p(id="msg" v-bind:msg="msg") [ {{msg}} ]
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      msg: ""
    }
  },
  methods: {
    async sendData() {
      const response = await axios.post("http://127.0.0.1:3030/api/login", {
        email: this.email,
        password: this.password
      }).catch(err => this.msg = err);
      console.log(response.data);
      if(response.data.access) localStorage.setItem("token", JSON.stringify(response.data));
      if(response.status === 200) this.$router.push({path: "/dashboard"});
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
  $blue: rgb(0, 83, 160);

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
      position: relative;
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
        font-size: 16px;
        color: black;
        text-decoration: none;
        text-transform: capitalize;
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