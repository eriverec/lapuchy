<template>
  <div class="container">
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
import Sidebar from "~/components/Sidebar.vue";

export default {
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
  components: {
    Jumbotron,
    Sidebar,
  },
};
</script>
