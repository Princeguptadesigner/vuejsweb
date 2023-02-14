<template>
  <h1 class="logoname">
    <router-link
      aria-current="page"
      to="/"
      class="router-link-active active navbar-brand"
    >
      Prince Kumar Gupta
    </router-link>
  </h1>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.logoname {
  font-size: 1.5rem;
}
</style>