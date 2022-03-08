<template lang="pug">
form(class="form")
  h1(class="title") Добавить запись
  glo-input(v-model="title" @input="title = $event.target.value" class="input" placeholder="Заголовок")
  textarea(v-model="message" class="text" placeholder="Расскажите о чем нибудь..")
  label(for="file" class="upload")
    img(src="../assets/upload.png" class="img")
  input(type="file" id="file" accept=".jpg, .png, .mp4")
  post-btn(class="btn" @click.prevent="addPost")
</template>

<script>
import axios from "axios";

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      title: "",
      message: ""
    }
  },
  methods: {
    async addPost() {
      const data = JSON.parse(localStorage.getItem("token"));
      if(!data) this.$router.push({path: "/login"});
      const config = {headers: {authorization: `Bearer ${data.access}`}};
      const body = {
        author: data.user.email,
        title: this.title,
        message: this.message,
      }
      const response = await axios.post("http://127.0.0.1:3030/api/posts/add", body, config);
      const post = {
        author: data.user.email,
        title: this.title,
        message: this.message,
        date: response.data.createdAt
      }
      this.posts.unshift(post);
      this.title = "";
      this.message = "";
    }
  }
}
</script>

<style lang="scss">
  $blue: rgb(0, 83, 160);

  .form {
    margin-block: 100px;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Slab', serif;
    text-align: center;
    position: relative;
    h1 {
      font-size: 34px;
    }
    * {
      margin-block: 10px;
    }
    .input {
      width: 600px;
      font-weight: 600;
      border: 3.5px solid $blue;
    }
    .text {
      width: 600px;
      height: 250px;
      resize: none;
      font-size: 20px;
      font-family: 'Roboto Slab', serif;
      font-weight: 600;
      padding-inline: 15px;
      padding-block: 5px;
      border: 3.5px solid $blue;
      border-radius: 4px;
    }
    .btn {
      position: absolute;
      right: 0;
      bottom: -30px;
    }
    .upload {
      width: 47.5px;
      height: 47.5px;
      position: absolute;
      left: 5px;
      bottom: -15px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 600;
      .img {
        width: 47.5px;
        height: 47.5px;
        cursor: pointer
      }
    }
    #file {
      opacity: 0;
    }
  }
</style>