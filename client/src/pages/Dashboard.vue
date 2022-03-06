<template lang="pug">
div(class="wrapper")
  form(class="form")
    h1(class="title") Добавить запись
    glo-input(v-model="title" @input="title = $event.target.value" class="input" placeholder="Заголовок")
    textarea(v-model="message" class="text" placeholder="Расскажите о чем нибудь..")
    label(for="file" class="upload")
      img(src="../assets/upload.png" class="img")
    input(type="file" id="file" accept=".jpg, .png, .mp4")
    post-btn(class="btn" @click.prevent="addPost")
  div(class="posts" v-for="post in posts")
    h1(class="title") {{post.title}}
    h3(class="message") {{post.message}}
    div(class="el")
      p Автор
      h3(class="author") {{post.author}}
    div(class="el")
      p Дата
      h3(class="date") {{post.date}}
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [
        {
          author: "honeypot@yandex.ru",
          title: "Продам мёд(ОПТ)",
          message: "В продаже имеется алтайский мёд высокого качества. Пишите в лс (как только добавят такой функционал)",
          date: "2022-03-01"
        },
        {
          author: "admin@admin.com",
          title: "Welcome!",
          message: "Pleased to see you here, pal. Can't wait you to try my Dashboard!",
          date: "2022-03-03"
        }
      ],
      title: "",
      message: ""
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const data = JSON.parse(localStorage.getItem("token"));
      if(!data) this.$router.push({path: "/login"});
      const config = {headers: {authorization: `Bearer ${data.access}`}};
      const response = await axios.post("http://127.0.0.1:3030/api/posts/all", {}, config);
      for(const post of response.data) this.posts.push(post);
      this.posts.reverse();
    },
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
        author: `${data.user.email}`,
        title: this.title,
        message: this.message,
        date: `${response.data.createdAt}`
      }
      this.posts.unshift(post);
    }
  }
}
</script>

<style lang="scss" scoped>
  $blue: rgb(0, 83, 160);

  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: none;
    overflow: visible;
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
    .posts {
      width: 800px;
      border: 3.5px solid $blue;
      border-radius: 4px;
      margin: 15px;
      font-family: 'Roboto Slab', serif;
      background-color: white;
      * {
        margin-inline: 15px;
      }
      .title {
        font-size: 28px;
        margin-block: 15px;
        text-decoration: underline;
      }
      .message {
        font-size: 24px;
        margin-bottom: 15px;
      }
      .el {
        display: flex;
        font-size: 20px;  
        justify-content: space-between;
        &:last-child {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>