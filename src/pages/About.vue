<template>
  <HeroBannerInner title="Hello World! This is Vumy!" subtitle="About Us" />

  <div class="about-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="about-image bg1">
            <img src="../images/about1.jpg" alt="about" />
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="about-content">
            <span class="sub-title">About Us</span>
            <h2>The story behind our consulting firm</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id proin
              lectus in aliquam orci ornare nec. Commodo morbi tincidunt egestas
              velit.
            </p>
            <ul class="about-list">
              <li>
                <div class="icon"><i class="ph-checks"></i></div>
                Integrated Innovation
                <a href="/services-details" class="link-btn"
                  ><i class="ph-caret-right"></i
                ></a>
              </li>
              <li>
                <div class="icon"><i class="ph-checks"></i></div>
                Collaborative Culture
                <a href="/services-details" class="link-btn"
                  ><i class="ph-caret-right"></i
                ></a>
              </li>
              <li>
                <div class="icon"><i class="ph-checks"></i></div>
                Business Planning
                <a href="/services-details" class="link-btn"
                  ><i class="ph-caret-right"></i
                ></a>
              </li>
              <li>
                <div class="icon"><i class="ph-checks"></i></div>
                Professional Team
                <a href="/services-details" class="link-btn"
                  ><i class="ph-caret-right"></i
                ></a>
              </li>
            </ul>
            <a
              aria-current="page"
              href="/about-us"
              class="router-link-active active btn-style-one red-light-color"
            >
              More About Us <i class="ph-caret-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="funfacts-area pt-100 pb-75 bg-fff4f8">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
          <div class="single-funfacts-box">
            <div class="icon"><i class="flaticon-employee"></i></div>
            <h3>480</h3>
            <p>CONSULTING SOLUTIONS</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
          <div class="single-funfacts-box">
            <div class="icon"><i class="flaticon-projects"></i></div>
            <h3>535</h3>
            <p>COMPLETED CASES</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
          <div class="single-funfacts-box">
            <div class="icon"><i class="flaticon-rating"></i></div>
            <h3>655</h3>
            <p>HAPPY CUSTOMERS</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
          <div class="single-funfacts-box">
            <div class="icon"><i class="flaticon-expert"></i></div>
            <h3>272</h3>
            <p>EXPERT CONSULTANT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeroBannerInner from "@/components/HeroBannerInner.vue";
export default {
  name: "About",
  components: {
    HeroBannerInner,
  },
};
</script>