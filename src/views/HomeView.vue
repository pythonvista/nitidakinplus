<template>
  <div class="wraper w-full relative">
    <headerVue ></headerVue>
      <router-view/>
    <footerVue></footerVue>
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
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
// import { crud, } from '@/services/index'

// Components
export default defineComponent({
  name: "HomeView",
  components: {
    headerVue,
    footerVue 
  },
  data: () => ({
    dialog: false,
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
 
  methods: {
   

  },

});

</script>
<style>

</style>
