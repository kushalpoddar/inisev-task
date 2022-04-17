<template>
  <div v-if="isLoggedIn">
    <users />
  </div>
  <div v-else>
    <login />
  </div>
</template>

<script>
//Vuex
import { mapGetters } from "vuex";
import Login from "@/pages/LoginUser";
import Users from "@/pages/AllUsers";
export default {
  name: "App",
  components: {
    Login,
    Users,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {},
  mounted: function () {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");

body {
  margin: 0;
}
#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div,
p,
h3 {
  font-family: "Josefin Sans", sans-serif !important;
}
</style>
