<template>
  <div class="navbar-toggler" aria-pressed="false">
    <span class="icon-bar top-bar"></span
    ><span class="icon-bar middle-bar"></span
    ><span class="icon-bar bottom-bar"></span>
  </div>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/service" class="nav-link">Service</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/blog" class="nav-link">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contactus" class="nav-link">Contact</router-link>
      </li>
    </ul>
  </div>

  <div class="others-option">
    <router-link to="/contactus" class="btn-style-one green-color2">
      Request A Demo <v-icon name="la-angle-right-solid" />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
