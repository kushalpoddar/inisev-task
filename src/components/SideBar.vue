<template>
  <div class="sidebar">
    <div class="sidebar__logo">LOGOIPSUM</div>
    <div class="sidebar__item">MENU ELEMENT</div>
    <div class="sidebar__item">MENU ELEMENT</div>
    <div class="sidebar__item">MENU ELEMENT</div>

    <div @click="logout()" class="sidebar__logout">
      <img
        style="width: 20px; height: 20px; margin-right: 5px"
        :src="require('@/assets/img/logout.png')"
      />Admin
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "side-bar",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
<style scoped>
.sidebar__logo {
  font-weight: bold;
  font-size: 20px;
}
.sidebar {
  background: #f9f9f9;
  min-width: 250px;
  position: fixed;
  min-height: 100vh;
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
}
.sidebar__item {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 10px;
  margin: 10px 0;
}
.sidebar__logout {
  bottom: 0;
  left: 10px;
  position: absolute;
  display: flex;
  cursor: pointer;
}
</style>