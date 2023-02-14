<template>
  <HeroBanner />

  <div class="features-area pt-100 pb-75">
    <div class="container">
      <div class="section-title">
        <span class="sub-title green-color">Our Features</span>
        <h2>Your comfort depends <br />on Vumy</h2>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-md-6 col-sm-6 aos-init"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="features-item">
            <div class="icon">
              <v-icon name="md-medicalservices-outlined" />
            </div>
            <h3 class="nunito-font">Medical Treatment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
              non feugiat sagittis, donec.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-6 aos-init"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div class="features-item">
            <div class="icon">
              <v-icon name="bi-info-circle" />
            </div>
            <h3 class="nunito-font">Emergency Help</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
              non feugiat sagittis, donec.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-6 aos-init"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="features-item">
            <div class="icon">
              <v-icon name="fa-user-tie" />
            </div>
            <h3 class="nunito-font">Qualified Doctors</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
              non feugiat sagittis, donec.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="faq-area ptb-100 with-top-border">
    <div class="container">
      <div class="section-title">
        <span class="sub-title">Frequently Ask &amp; Question</span>
        <h2>Dedicated to help anything people’s needs</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="faq-accordion">
            <div class="accordion" id="faqAccordion">
              <div
                class="accordion-item aos-init"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What is the company culture?
                </button>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                  style=""
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed est non feugiat sagittis, donec.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="accordion-item aos-init"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Which market is the startup targeting?
                </button>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                  style=""
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed est non feugiat sagittis, donec.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="accordion-item aos-init"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  What is the runway of the business?
                </button>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                  style=""
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed est non feugiat sagittis, donec.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="accordion-item aos-init"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Who are the investors in the company?
                </button>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed est non feugiat sagittis, donec.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="accordion-item aos-init"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How can I safely browse the internet?
                </button>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed est non feugiat sagittis, donec.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div
            class="faq-image style-three aos-init aos-animate"
            data-aos="fade-up"
          >
            <img src="../images/faq3.png" alt="faq-image" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="blog-area with-top-border pb-75 pt-100">
    <div class="container">
      <div class="section-title">
        <span class="sub-title">Latest News</span>
        <h2>Our latest articles &amp; resources</h2>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-xl-4 col-lg-6 col-md-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="single-blog-post">
            <div class="image">
              <a href="/blog-details" class="d-block"
                ><img src="../images/blog1.jpg" alt="blog-image"
              /></a>
            </div>
            <div class="content">
              <ul class="meta">
                <li>
                  <v-icon name="bi-tag" />
                  <a href="/blog-tag" class="">Technology</a>
                </li>
                <li>
                  <v-icon name="la-calendar-check-solid" />
                  25 Nov, 2021
                </li>
              </ul>
              <h3>
                <a href="/blog-details" class=""
                  >How is technology working with new things?</a
                >
              </h3>
            </div>
          </div>
        </div>
        <div
          class="col-xl-4 col-lg-6 col-md-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div class="single-blog-post">
            <div class="image">
              <a href="/blog-details" class="d-block"
                ><img src="../images/blog2.jpg" alt="blog-image"
              /></a>
            </div>
            <div class="content">
              <ul class="meta">
                <li>
                  <i class="ph-tag"></i><a href="/blog-tag" class="">Design</a>
                </li>
                <li><i class="ph-calendar-check"></i> 24 Nov, 2021</li>
              </ul>
              <h3>
                <a href="/blog-details" class=""
                  >Top 10 important tips on IT services &amp; design</a
                >
              </h3>
            </div>
          </div>
        </div>
        <div
          class="col-xl-4 col-lg-6 col-md-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="single-blog-post">
            <div class="image">
              <a href="/blog-details" class="d-block"
                ><img src="../images/blog3.jpg" alt="blog-image"
              /></a>
            </div>
            <div class="content">
              <ul class="meta">
                <li>
                  <i class="ph-tag"></i><a href="/blog-tag" class="">Startup</a>
                </li>
                <li><i class="ph-calendar-check"></i> 23 Nov, 2021</li>
              </ul>
              <h3>
                <a href="/blog-details" class=""
                  >How our company works in different ways</a
                >
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="get-started-area pb-100">
    <div class="container">
      <div
        class="get-started-inner-area aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12">
            <h2>We’re delivering the best customer experience</h2>
          </div>
          <div class="col-lg-5 col-md-12 text-end">
            <a href="/contact" class="btn-style-one green-color">
              Let’s Get Started <i class="ph-caret-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeroBanner from "@/components/HeroBanner.vue";
export default {
  name: "Home",
  components: {
    HeroBanner,
  },
};
</script>