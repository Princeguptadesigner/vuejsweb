<template>
  <div class="navbar-area">
    <div class="vumy-nav">
      <div class="container-fluid">
        <div class="navbar navbar-expand-lg navbar-light bg-light">
          <Logo />
          <Navbar />
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import Logo from "./header/Logo.vue";
import Navbar from "./header/Navbar.vue";
export default {
  name: "Header",
  components: {
    Logo,
    Navbar,
  },
};
</script>
<style lang="scss">
@import "../assets/navbar.sass";
</style>