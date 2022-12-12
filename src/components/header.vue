<template>
  <div class="px-3 header flex items-center justify-between  w-full">
      <div class="logo flex justify-start gap-3 items-center">
        <img class="logo" src="@/assets/images/logo.png" alt="">
        <img class="logo2 bg-white px-1  rounded-sm shadow-sm" src="@/assets/logo3.png" alt="">
        <img class="logo2 bg-white px-1 py-4  rounded-sm shadow-sm" src="@/assets/logo4.svg" alt="">
        <img class="logo2 bg-white px-1 py-2 rounded-sm shadow-sm" src="@/assets/logo2.png" alt="">
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
</template>

<script>
export default {
    name:'header.vue',

}
</script>

<style scoped>

.header{
    height: 15vh;
    background: #0d285b;
}

.logo {
  width: 25%;
  /* aspect-ratio: 3/2; */
}
.logo2 {
    width: 25%;
    /* aspect-ratio: 3/2; */
  }



@media (max-width: 768px) {
  .logo {
    width: 55%;
    aspect-ratio: 3/2;
  }
  .logo2 {
    width: 55%;
    /* aspect-ratio: 3/2; */
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