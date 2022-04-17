<template>
  <div class="main-component">
    <div class="main-title"><span class="title">USERS</span></div>
    <div class="card-body">
      <div
        v-for="user in fetchUsers"
        :key="user.id"
        @click="openModal(user)"
        class="card"
      >
        <img class="card-img" :src="user.image" loading="lazy" />
        <div class="img-overlay">
          <p class="overlay-title">{{ user.name }}</p>
          <p class="overlay-subtitle">{{ user.address.city }}</p>
        </div>
      </div>
    </div>

    <modal
      v-if="current_user && show_modal"
      @close="closeModal"
      :user="current_user"
    ></modal>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "./Modal.vue";
export default {
  name: "main-component",
  data() {
    return {
      current_user: null,
      show_modal: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    ...mapActions(["loadUsers"]),
    openModal(user) {
      this.current_user = user;
      this.show_modal = true;
    },
    closeModal() {
      this.current_user = null;
      this.show_modal = false;
    },
  },
  computed: {
    ...mapGetters(["fetchUsers"]),
  },
  created() {
    this.loadUsers();
  },
};
</script>
<style scoped>
.img-overlay {
  height: 100%;
  width: 100%;
  background: #0000006b;
  color: #fff;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: column;
  transition: 0.7s all;
  border-radius: 10px;
  cursor: pointer;
}
.overlay-title {
  font-weight: bold;
  font-size: 20px;
  margin: 0;
}
.main-title {
  width: 100%;
  text-align: right;
  margin: 20px 0;
  margin: 0;
}
.main-component {
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  margin-left: 250px;
}
.title {
  font-size: 36px;
  font-weight: bold;
  border-bottom: 5px solid #000;
  margin-right: 50px;
}
.card-body {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: 250px;
  margin: 10px 5px;
  position: relative;
}
.card:hover .img-overlay {
  opacity: 1;
}
.card-img {
  width: 100%;
  border-radius: 10px;
}
</style>