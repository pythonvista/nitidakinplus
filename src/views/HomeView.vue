<template>
  <div class="wraper w-full relative">
    <headerVue ></headerVue>
      <router-view/>
    <footerVue></footerVue>
    
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
