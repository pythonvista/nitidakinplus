<template>
  <div class="wraper w-full relative">
    <div class="header px-5 py-2 h-full flex items-center justify-between  w-full">
      <div class="logo pa-4 flex justify-start items-center">
        <img class="logo" src="@/assets/images/logo.png" alt="">
      </div>
      <div class="navs h-full flex items-center justify-center ">
        <v-btn size="small" variant="text" icon @click="Social('facebook')"><v-icon
            color="white">mdi-facebook</v-icon></v-btn>
        <v-btn color="transparent" size="small" variant="text" icon @click="Social('instagram')"><v-icon
            color="white">mdi-instagram</v-icon></v-btn>
        <v-btn size="small" variant="text" icon @click="Social('whatsapp')"><v-icon
            color="white">mdi-whatsapp</v-icon></v-btn>
      </div>
    </div>
    <swiper :navigation="true" :modules="modules" class="relative mySwiper">
      <swiper-slide v-for="(slide, index) in slides" :key="index" class=" w-full h-full">
        <div class=" w-full h-full">
          <img class="absolute top-0 left-0 w-full h-full object-cover" :src="slide" alt="">
        </div>
        <div class="box absolute top-0 left-0 w-full h-full"></div>

      </swiper-slide>
      <div class="content pa-3 z-1 absolute flex flex-col justify-center items-center gap-3">
        <p class="text-white xs:text-lg md:text-2xl ma-0 pa-0">End of the year</p>
        <p class="text-white xs:text-3xl md:text-7xl font-bold ma-0 pa-0">Tech FAIR</p>
        <v-divider class=" bg-white w-50 ma-0 pa-0"></v-divider>
        <p class="text-white text-base ma-0 pa-0 text-center">Celebration of innovation and creativity</p>
        <div class="flex items-center justify-center gap-3">
          <v-btn color="white rounded-lg" @click="(dialog = true)" variant="outlined">Register</v-btn>
          <v-btn class="rounded-lg" @click="Social('tour')">Take a tour</v-btn>
 
        </div>


      </div>

    </swiper>
    <div class="footer pa-3 flex justify-center items-center">
      <p class="ma-0 pa-0 text-white text-center">
        Copyright © 2022 | Kinplus Technologies ™ | All Right Reserved.
      </p>

    </div>
    <v-dialog v-model="dialog" persistent class="" max-width="590">
      <div class="bg-white pa-3 rounded">
        <v-form class="relative forms pa-3" ref="form" v-model="valid" lazy-validation>
          <p class="w-full ma-0 pa-0 text-center text-2xl py-2">REGISTRATION FORM</p>
          <v-text-field variant="solo" density="compact" class="h-20" v-model="dform.firstName" :rules="nameRules"
            label="First Name" required></v-text-field>
          <v-text-field variant="solo" density="compact" class="h-20" v-model="dform.lastName" :rules="nameRules"
            label="Last Name" required></v-text-field>
          <v-text-field variant="solo" density="compact" class="h-20" v-model="dform.email" :rules="emailRules"
            label="E-mail" required></v-text-field>
          <v-text-field variant="solo" density="compact" class="h-20" v-model="dform.phone" :rules="nameRules"
            label="Phone" required></v-text-field>
         
          <div class="flex  xs:flex-row xs:justify-start md:justify-between items-center">
            <v-radio-group :rules="nameRules" density="compact" v-model="dform.gender" inline label="Gender">
              <v-radio label="Male" value="male"></v-radio>
              <v-radio label="Female" value="female"></v-radio>
            </v-radio-group>
            <v-radio-group label="Member Type" :rules="nameRules" v-model="dform.memberType" density="compact" class=""
              inline>
              <v-radio label="In-House member" value="in_house_member"></v-radio>
              <v-radio label="Guest" value="guest"></v-radio>
            </v-radio-group>
          </div>

          <div class="flex">
            <v-btn :loading="loading" color="#0d285b" class="text-white" @click="CheckUser">
              Register
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="red" class="text-white" @click="(dialog = false)">
              Close
            </v-btn>
          </div>

        </v-form>
      </div>
    </v-dialog>
    <v-dialog v-model="success" persistent class="" max-width="490">
      <div class="relative bg-white pa-2 flex flex-col justify-center items-center gap-2 rounded-lg">
        <img width="200" src="@/assets/success.png" alt="">
        <p class="ma-0 pa-0 text-blue font-bold text-2xl text-center">Registration Succesful</p>
        <div class="flex xs:flex-col md:flex-row justify-center items-center gap-1">
          <img width="50" src="@/assets/mail.png" alt="">
          <p class="ma-0 pa-0 text-black text-center">Check your email for more details and information</p>
        </div>
        <p class="ma-0 pa-0 text-sm font-light font-serif">Follow us on</p>
        <div class="h-full flex items-center justify-center ">
          <v-btn size="small" variant="text" icon @click="Social('facbook')"><v-icon
              color="black">mdi-facebook</v-icon></v-btn>
          <v-btn color="transparent" size="small" variant="text" icon @click="Social('instagram')"><v-icon
              color="black">mdi-instagram</v-icon></v-btn>
          <v-btn size="small" variant="text" icon @click="Social('whatsapp')"><v-icon
              color="black">mdi-whatsapp</v-icon></v-btn>
        </div>
        <div class="absolute top-0 right-0"><v-btn @click="(success = false)" size="small" icon variant="text"><v-icon
              color="black">mdi-close</v-icon></v-btn></div>

      </div>

    </v-dialog>
    <v-dialog v-model="error" persistent class="" max-width="490">
      <div class="relative bg-white pa-2 flex flex-col justify-center items-center gap-2 rounded-lg">
        <img width="200" src="@/assets/error.png" alt="">
        <p class="ma-0 pa-0 text-red font-bold text-2xl text-center">You have already registerd to attend</p>
        <div class="flex xs:flex-col md:flex-row justify-center items-center gap-1">
          <img width="50" src="@/assets/mail.png" alt="">
          <p class="ma-0 pa-0 text-black text-center">Check your email for more details and information</p>
        </div>
        <div class="absolute top-0 right-0"><v-btn @click="(error = false)" size="small" icon variant="text"><v-icon
              color="black">mdi-close</v-icon></v-btn></div>
      </div>

    </v-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { crud, } from '@/services/index'
import { Pagination, Navigation } from "swiper";
import slide1 from "@/assets/images/slide1.jpg"
import emailjs from '@emailjs/browser';
import slide2 from "@/assets/images/slide2.jpg"
import slide3 from "@/assets/images/slide3.jpg"
import slide4 from "@/assets/images/slide4.jpg"
// Components
export default defineComponent({
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    dialog: false,
    success: false,
    error: false,
    modules: [Pagination, Navigation],
    dform: {},
    slides: [
      slide1,
      slide2,
      slide3,
      slide4
    ],
    valid: true,
    loading: false,
    name: '',
    nameRules: [
      v => !!v || 'Field is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ]
  }),
  setup() {
    return {

    };
  },
  methods: {
    Social(name) {
      if (name == 'facebook') {
        window.location.replace('https://www.facebook.com/kinplustechnologies')
      }
      if (name == 'instagram') {
        window.location.replace('https://chat.whatsapp.com/GW1NVU8Xq8DClmwosdSJQG')
      }
      if (name == 'whatsapp') {
        window.location.replace('https://chat.whatsapp.com/GW1NVU8Xq8DClmwosdSJQG')
      }
      if (name == 'tour') {
        window.location.replace('https://kinplusgroup.com')
      }
    },

    async CheckUser() {

      const { valid } = await this.$refs.form.validate()

      let registered = false
      if (valid) {
        this.loading = true
        const res = await crud.getAllDoc('MEMBERS')
        res.forEach((user) => {
          if (user.email == this.dform.email.toLowerCase()) {
            registered = true
          }
        })
        if (!registered) {
          this.Register()
        } else {
          this.loading = false
          this.error = true
          this.dialog = false

        }
      }

    },
    async Register() {
      try {
        await crud.addDocWithoutId('MEMBERS', this.dform)
        let data = { email: this.dform.email, firstName: this.dform.firstName, lastName: this.dform.lastName }
        this.SendWelcome(data)
        this.loading = false
        this.dialog = false
        this.success = true
      } catch (err) {
        err
        this.loading = false
      }
    },
    async SendWelcome(data) {
      try {
        var templateParams = {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lasttName,
        };
        await emailjs.send('service_8z302us', 'template_6q00vwb', templateParams, '0ZDFcggQjgklmQgFN')
      } catch (err) {
        err
      }

    }

  },

});

</script>
<style scoped>
.wraper {
  height: 100vh;
}

.mySwiper {
  height: 80%;
}

.header {
  height: 10%;
  background: #0d285b;
}

.footer {
  height: 10%;
  background: #0d285b;
}

.logo {
  width: 30%;
  aspect-ratio: 3/2;
}

.box {
  background: linear-gradient(rgba(0, 0, 0, 0.393), rgba(0, 0, 0, 0.402));
}

.content {
  width: 60%;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

.pop-up {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.forms {
  /* height: 90vh; */
  overflow-y: scroll;
  /* overflow: hidden; */
}

.forms::-webkit-scrollbar {
  width: 6px;
  background: rgba(128, 128, 128, 0.447);
  display: none;
}

.forms::-webkit-scrollbar-thumb {

  background: rgb(128, 128, 128);
}

@media (max-width: 768px) {
  .logo {
    width: 55%;
    aspect-ratio: 3/2;
  }

  .forms {
    /* height: 90vh; */
    overflow-y: scroll;
    overflow: hidden;
  }

  .pop-up {
    height: 90vh;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
}
</style>
