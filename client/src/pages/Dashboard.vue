<template lang="pug">
div(class="wrapper")
  dashboard-form(:posts="posts")
  dashboard-list(:posts="posts")
  div(id="lout")
    label(for="logout" class="logout")
      img(src="../assets/logout.png" class="img")
    button(id="logout" @click="logout")
</template>

<script>
import DashboardForm from "../components/DashboardForm.vue";
import DashboardList from "../components/DashboardList.vue";
import axios from "axios";

export default {
  components: {
    DashboardForm, DashboardList
  },
  data() {
    return {
      posts: [
        {
          author: "admin@admin.com",
          title: "Welcome!",
          message: "Hello over there! In the platform you can feel free to post any content you want..",
          date: "2022-03-01"
        }
      ],
    }
  },
  methods: {
    async logout() {
      const response = axios.post("http://127.0.0.1:3030/api/posts/remove");
      if(response) this.$router.push({path: "/login"})
      localStorage.removeItem("token");
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
    .logout {
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
      #logout {
        opacity: 0;
        width: 38px;
        height: 38px;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
      }
    }
  }
</style>