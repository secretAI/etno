<template lang="pug">
div(class="posts" v-for="post in posts" ref="post")
  div(id="del" v-if="post.author === this.author") 
    label(for="remove" class="remove")
      img(src="../assets/delete.png" class="img")
    button(id="remove" class="remove" @click="removePost")
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
import axios from "axios"
const data = JSON.parse(localStorage.getItem("token"));

export default {
  data() {
    return {
      author: data.user.email,
    }
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.getPosts();
    // this.removePost();
  },
  methods: {
    async getPosts() {
      const config = {headers: {authorization: `Bearer ${data.access}`}};
      const allPosts = await axios.post("http://127.0.0.1:3030/api/posts/all", {}, config);
      if(!data) this.$router.push({path: "/login"});
      for(const post of allPosts.data) this.posts.push(post)
      this.posts.reverse();
      console.log(allPosts.data);
    },
    async removePost() {
      console.log(this.posts[this].id);
    }
  }

}
</script>

<style lang="scss">
  $blue: rgb(0, 83, 160);

  .posts {
    width: 800px;
    border: 3.5px solid $blue;
    border-radius: 4px;
    margin: 15px;
    font-family: 'Roboto Slab', serif;
    background-color: white;
    position: relative;
    #del {
      .remove {
        width: 38px;
        height: 38px;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        .img {
          width: 38px;
          height: 38px;
          cursor: pointer;
        }
      }
      #remove {
        opacity: 0;
      }
    }
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
</style>