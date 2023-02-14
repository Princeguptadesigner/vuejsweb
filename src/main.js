import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import router from './routers';
import './assets/main.sass'
import './assets/button.sass'
import './assets/variable.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  LaAngleRightSolid,
  MdMedicalservicesOutlined,
  BiInfoCircle,
  FaUserTie,
  MdPhoneintalkOutlined,
  LaEnvelopeOpen,
  CoLocationPin,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  BiTag,
  LaCalendarCheckSolid
} from "oh-vue-icons/icons";

addIcons(
  LaAngleRightSolid,
  MdMedicalservicesOutlined,
  BiInfoCircle,
  FaUserTie,
  MdPhoneintalkOutlined,
  LaEnvelopeOpen,
  CoLocationPin,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  BiTag,
  LaCalendarCheckSolid
)

// axios.defaults.baseURL = 'https://fakestoreapi.com/';
createApp(App).use(router).component("VIcon", OhVueIcon).mount('#app')
