<template>
  <div  class="wrap around relative flex justify-center items-center ">
    
          <!-- <img class="absolute top-0 left-0 w-full h-full object-cover" src="@/assets/bgg.jpg"  alt=""> -->
    <div class="pa-10 gep-3 flex flex-col items-center justify-center text-center">
      <p class="leading-relaxed text-white text-4xl capitalize font-serif">Professional Certification Program <br> on technical Domain & Entrepreneurship <br> Brought to you by <br><span class="uppercase">Nitda</span>, <span class="uppercase">ekz</span>, Coursera and Kinplus</p>
      <v-btn size="large" @click="dialog = true">Login</v-btn>

    </div>

    <v-dialog v-model="dialog" class="" max-width="490">
      <div class="relative bg-white px-6 py-10 w-full flex flex-col justify-center items-center gap-2 rounded-lg">
        <p class="ma-0 pa-0 text-red font-bold text-2xl text-center">Login to Nitda Account</p>
        <v-form class="flex w-full xs:flex-col md:flex-col justify-center items-center gap-1">
          <v-text-field dense variant="solo" class="w-full" label="Email"></v-text-field>
          <v-text-field dense variant="solo" class="w-full" label="Password"></v-text-field>
          <v-btn >Login</v-btn>
        </v-form>
        <div class="absolute top-0 right-0"><v-btn @click="(error = false)" size="small" icon variant="text"><v-icon
              color="black">mdi-close</v-icon></v-btn></div>
      </div>
    </v-dialog>
  </div>
 
</template>

<script>
import bg from "@/assets/bgg.jpg"
export default {
  name: 'index',
  data: ()=>({
    bgname: bg,
    dialog:false
  })

}
</script>

<style scoped>

.wrap{
  height: 90vh;
  background:linear-gradient(rgba(0, 0, 0, 0.653), rgba(0, 0, 0, 0.598)), url('@/assets/bgg.jpg');
  background-position: center center;
}



</style>