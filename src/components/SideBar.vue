<template>
  <div class="sidebar">
    <div class="logo-item">LOGOIPSUM</div>
    <div class="sidebar-item">MENU ELEMENT</div>
    <div class="sidebar-item">MENU ELEMENT</div>
    <div class="sidebar-item">MENU ELEMENT</div>

    <div @click="logout()" class="logout-item">
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
.logo-item {
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
.sidebar-item {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 10px;
  margin: 10px 0;
}
.logout-item {
  bottom: 0;
  left: 10px;
  position: absolute;
  display: flex;
  cursor: pointer;
}
</style>