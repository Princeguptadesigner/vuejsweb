<template>
  <div class="medical-banner-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="medical-banner-content">
            <h1>{{ title }}</h1>
            <p>{{ desc }}</p>
            <a href="/contact" class="btn-style-one red-light-color">
              {{ btnname }} <v-icon name="la-angle-right-solid" />
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="medical-banner-image">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="image">
                  <img
                    src="../images/banner10.jpg"
                    alt="banner-image"
                    class=""
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="image">
                  <img
                    src="../images/banner11.jpg"
                    alt="banner-image"
                    class=""
                  />
                </div>
                <div class="image">
                  <img
                    src="../images/banner12.jpg"
                    alt="banner-image"
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  data() {
    return {
      title: `The world's leading medical services provider`,
      desc: `Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu.`,
      btnname: " Get Started Now ",
    };
  },
};
</script>
