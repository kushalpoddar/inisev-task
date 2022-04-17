<template>
  <div class="modal-container">
    <div class="modal-overlay">
      <div ref="currentModal" class="card-body">
        <div class="card-img">
          <img class="card-img" :src="user.image" />
        </div>
        <div class="card-content">
          <div class="card-text">
            <div class="icon">
              <img :src="require('@/assets/img/0.png')" />
            </div>
            <div class="label">{{ user.name }}</div>
          </div>
          <div class="card-text">
            <div class="icon">
              <img :src="require('@/assets/img/1.png')" />
            </div>
            <div class="label" @click="sendEmail()">{{ user.email }}</div>
          </div>
          <div class="card-text">
            <div class="icon">
              <img :src="require('@/assets/img/2.png')" />
            </div>
            <div class="label">{{ user.phone }}</div>
          </div>
          <div class="card-text">
            <div class="icon">
              <img :src="require('@/assets/img/3.png')" />
            </div>
            <div class="label">
              {{ user.address.city }}, {{ user.address.street }}
            </div>
          </div>
          <div class="card-text">
            <div class="icon">
              <img :src="require('@/assets/img/4.png')" />
            </div>
            <div class="label">{{ user.website }}</div>
          </div>
        </div>
        <img
          @click="closeModal()"
          class="cross-icon"
          :src="require('@/assets/img/remove.png')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "main-component",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    ...mapActions([]),
    closeModal() {
      this.$emit("close");
    },
    sendEmail() {
      const link = `mailto:${this.user.email}?subject=${encodeURIComponent(
        "We are hiring!"
      )}&body=${encodeURIComponent(
        `Hello, ${this.user.name}. We’d like to propose you an offer.`
      )}`;
      window.location.href = link;
    },
  },
  computed: {
    ...mapGetters([]),
  },
  mounted() {
    window.addEventListener("click", (event) => {
      const el = this.$refs["currentModal"];
      if (
        this.count &&
        !(el == event.target || (el && el.contains(event.target)))
      ) {
        this.closeModal();
      }
      this.count = 1;
    });
  },
};
</script>
<style scoped>
.cross-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 25px;
  height: 25px;
}
.icon img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000;
  padding: 3px;
}
.card-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
}
.modal-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
.card-text {
  margin: 5px 0;
  display: flex;
  gap: 10px;
  align-items: center;
}
.modal-overlay {
  height: 100%;
  width: 100%;
  background: #0000006b;
  border-radius: 10px;
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
  position: relative;
}
.title {
  font-size: 36px;
  font-weight: bold;
  border-bottom: 5px solid #000;
  margin-right: 50px;
}
.card-body {
  display: flex;
  width: 50%;
  height: 70%;
  background: #fff;
  border-radius: 10px;
  position: relative;
}
.card {
  width: 250px;
  margin: 10px 5px;
  position: relative;
}
.card-img {
  height: 100%;
  border-radius: 10px;
}
</style>