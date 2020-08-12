<template>
  <div>
    
    <nuxt/>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
}
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
 /* background-image: url("../static/fondo2.jpg");
  background-size: cover;*/
  
}

.navbar{
  background:white;
    -moz-box-shadow: 3px -2px 10px 0px #ccc;
    -webkit-box-shadow: 3px -2px 10px 0px #ccc;
    box-shadow: 3px -2px 10px 0px #333;
}

.container {
  max-width: 100%;
  margin: 0px;
  padding: 0px;
  
overflow-y: hidden;
overflow-x: hidden ;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.todocentrado {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
</style>
