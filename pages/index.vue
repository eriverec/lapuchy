<template>
  <div class="container ">
    <div>     
      <jumbotron /> 
    </div>
  </div>
</template>


<style >
.container {
  background-image: url("../static/fondo2.jpg");
  background-size: cover;

  
}
</style>

<script>
import Jumbotron from "~/components/Jumbotron.vue";

export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
  components: {
    Jumbotron
  },
};
</script>
