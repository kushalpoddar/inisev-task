<template>
  <div class="main-container">
    <side-bar />
    <main-component />
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
import MainComponent from "@/components/MainComponent.vue";
export default {
  name: "all-users",
  data() {
    return {
      items: [],
    };
  },
  components: {
    SideBar,
    MainComponent,
  },
  methods: {
    addItem(item) {
      this.items.push(item);
      localStorage.setItem("items", JSON.stringify(this.items));
    },
  },
};
</script>
<style scoped>
.main-container {
  display: flex;
}
</style>