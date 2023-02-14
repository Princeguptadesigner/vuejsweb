<template>
  <div class="template-footer-five pt-100 bg-f9f9f9">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget">
            <h3 class="nunito-font">Contact Info</h3>
            <ul class="footer-contact-info">
              <li>
                <v-icon name="md-phoneintalk-outlined" />
                <span>Mon to Fri : 10:00AM - 06:00PM</span
                ><a href="tel:1235421457852">+91 9999999999</a>
              </li>
              <li>
                <v-icon name="la-envelope-open" />
                <span>Do You Have a Question?</span
                ><a href="mailto:princegupta.designer@gmail.com"
                  >princegupta.designer@gmail.com</a
                >
              </li>
              <li>
                <v-icon name="co-location-pin" />
                <span>New Delhi, IN</span
                ><a href="#" target="_blank">Find Us on Map</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-6">
          <div class="single-footer-widget">
            <h3>About Us</h3>
            <ul class="quick-links">
              <li><a href="/insurance" class="">Home</a></li>
              <li><a href="/about-us" class="">About Us</a></li>
              <li><a href="/blog-grid" class="">Latest News</a></li>
              <li><a href="/contact" class="">Contact Us</a></li>
              <li><a href="/privacy-policy" class="">Privacy Policy</a></li>
              <li>
                <a href="/terms-conditions" class="">Terms &amp; Condition</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="single-footer-widget pl-3">
            <h3 class="nunito-font">Resources</h3>
            <ul class="quick-links">
              <li>
                <a href="/portfolio-details" class="">Business Startup</a>
              </li>
              <li>
                <a href="/portfolio-details" class="">Finance Consulting</a>
              </li>
              <li>
                <a href="/portfolio-details" class="">Wealth Management</a>
              </li>
              <li>
                <a href="/portfolio-details" class="">Business Planning</a>
              </li>
              <li><a href="/portfolio-details" class="">Data Management</a></li>
              <li>
                <a href="/portfolio-details" class="">Marketing Planning</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="single-footer-widget">
            <h3 class="nunito-font">Newsletter</h3>
            <div class="box">
              <p>Latest resources, sent to your inbox weekly</p>
              <form class="newsletter-form">
                <input
                  type="text"
                  class="input-newsletter"
                  placeholder="Enter your email address"
                  name="EMAIL"
                /><button type="submit" class="btn-style-one green-color">
                  Subscribe Now <i class="ph-caret-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-5">
            <p>@2023 Prince kumar Gupta. All Rights Reserved by</p>
          </div>
          <div class="col-lg-4 col-md-3"></div>
          <div class="col-lg-4 col-md-4">
            <ul class="social-links">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <v-icon name="fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank">
                  <v-icon name="fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <v-icon name="fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <v-icon name="fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
