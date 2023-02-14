<template>
  <HeroBannerInner
    title="How is technology working with new things?"
    subtitle="Blog Details"
  />

  <div class="blog-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <div class="widget-area left-sidebar">
            <div class="widget widget_categories">
              <h3 class="widget-title"><span>Categories</span></h3>
              <ul>
                <li>
                  <a href="/blog-categories" class=""
                    >Business <span class="count">(6)</span></a
                  >
                </li>
                <li>
                  <a href="/blog-categories" class=""
                    >Privacy <span class="count">(4)</span></a
                  >
                </li>
                <li>
                  <a href="/blog-categories" class=""
                    >Technology <span class="count">(5)</span></a
                  >
                </li>
                <li>
                  <a href="/blog-categories" class=""
                    >Tips <span class="count">(3)</span></a
                  >
                </li>
                <li>
                  <a href="/blog-categories" class=""
                    >Log in <span class="count">(8)</span></a
                  >
                </li>
                <li>
                  <a href="/blog-categories" class=""
                    >Uncategorized <span class="count">(1)</span></a
                  >
                </li>
              </ul>
            </div>
            <div class="widget widget_follow_us">
              <h3 class="widget-title"><span>Follow Us</span></h3>
              <ul>
                <li><a href="#" target="_blank">Facebook</a></li>
                <li><a href="#" target="_blank">Twitter</a></li>
                <li><a href="#" target="_blank">Instagram</a></li>
                <li><a href="#" target="_blank">Pinterest</a></li>
                <li><a href="#" target="_blank">Linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="blog-details-desc">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <p>
              Price: Rs.{{ item.price }} <br />
              Category: {{ item.category }}
            </p>
            <div class="post-thumb">
              <img :src="item.image" alt="blog-details" />
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
  name: "BlogDetails",
  components: {
    HeroBannerInner,
  },
  data() {
    return {
      item: "",
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    console.warn("idxx ", this.id);
    axios.get("https://fakestoreapi.com/products").then((response) => {
      // console.warn("response.data ", response.data);
      this.item = response.data[this.id];
      // console.warn("response.data ", this.item);
    });
  },
};
</script>
