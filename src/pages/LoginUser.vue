<template>
  <div class="container">
    <div v-show="showNotification" class="alert-notification">
      {{ alert_msg }}
    </div>
    <div class="container__card">
      <div class="">
        <p class="title">SIGN IN TO YOUR ACCOUNT</p>
      </div>

      <div class="">
        <input
          v-model="user.username"
          class="container__input"
          type="text"
          placeholder="johnnythedesigner@gmail.com"
        />
      </div>

      <div class="">
        <input
          v-model="user.password"
          class="container__input"
          type="password"
          placeholder="********"
        />
      </div>

      <div class="container__button">
        <button type="button" @click="login()" class="button button--primary">
          SIGN IN
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login-user",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      alert_msg: "",
      showNotification: false,
    };
  },
  components: {},
  methods: {
    ...mapActions(["loginUser"]),
    login() {
      this.loginUser(this.user)
        .then((res) => {
          console.log(res.msg);
          this.$router.push({
            name: "users",
          });
        })
        .catch((err) => {
          this.showNotification = true;
          this.alert_msg = err.msg;
          setTimeout(() => {
            this.showNotification = false;
          }, 5000);
        });
    },
  },
};
</script>
<style scoped>
.alert-notification {
  width: 200px;
  height: 40px;
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  background: red;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}
.button {
  padding: 15px;
  border: none;
  width: 100%;
}
.button:hover {
  cursor: pointer;
}
.button--primary {
  background: rgb(62, 0, 144);
  color: #fff;
}
.title {
  font-size: 25px;
}

.container__button {
  margin-top: 50px;
}
.container__input {
  width: 100%;
  padding: 15px 10px;
  background: rgb(215, 215, 215);
  border: none;
  margin: 5px 0;
  color: #000;
  box-sizing: border-box;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.container__card {
  width: 40%;
}
</style>