<template>
  <HeroBannerInner
    title="Our latest articles &amp; resources"
    subtitle="Latest News"
  />

  <div class="blog-area ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="item in blogDeatils"
          :key="item"
          class="col-xl-4 col-lg-6 col-md-6"
        >
          <div class="single-blog-post">
            <div class="image">
              <a href="/blog-details/{{ item.id }}" class="d-block">
                <img alt="blog-image" :src="item.image" />
              </a>
            </div>
            <div class="content">
              <ul class="meta">
                <li>
                  <v-icon name="bi-tag" />
                  <a href="/blog-tag" class="">{{ item.category }}</a>
                </li>
                <li>
                  <v-icon name="la-calendar-check-solid" />
                  25 Nov, 2021
                </li>
              </ul>
              <h3>
                <router-link v-bind:to="'blogdetails/' + item.id" class="">
                  {{ item.title }}
                </router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBannerInner from "@/components/HeroBannerInner.vue";
import axios from "axios";
export default {
  name: "blog",
  data() {
    return {
      blogDeatils: [],
    };
  },
  async mounted() {
    // let result = await axios.get("https://fakestoreapi.com/products");
    // console.warn("api data ", result.data);
    // this.blogList = result.data;
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.formatePosts(response.data);
      console.warn("api data ", response.data);
    });
  },
  methods: {
    formatePosts(listData) {
      for (let key in listData) {
        this.blogDeatils.push({ ...listData[key], id: key });
      }
    },
  },
  components: {
    HeroBannerInner,
  },
};
</script>
