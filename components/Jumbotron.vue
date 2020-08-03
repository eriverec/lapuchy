<template>
  <div class="todocentrado animate__animated animate__fadeIn animate__delay-1s">
    <h3>Bienvenido a</h3>
    <h1>
      <strong class="titulocentral">La Sazón De La Puchy</strong>
    </h1>
    <h5>Síguenos en nuestras redes</h5>

    <b-button size="sm" class="animate__animated animate__fadeInLeft animate__delay-2s my-2 my-sm-0" variant="light">
      <a href="https://www.instagram.com/sazon_dela_puchy/" target="_blank">
        <img src="https://img.icons8.com/windows/24/000000/instagram-new.png" />
      </a>
    </b-button>
    <b-button size="sm" class="animate__animated animate__fadeInDown animate__delay-2s my-2 my-sm-0" variant="light">
      <a href="https://www.facebook.com/La-Saz%C3%B3n-de-la-Puchy-101903718241814/" target="_blank">
        <img src="https://img.icons8.com/windows/24/000000/facebook-new.png" />
      </a>
    </b-button>
    <b-button size="sm" class="animate__animated animate__fadeInRight animate__delay-2s my-2 my-sm-0" variant="light">
      <a href="https://api.whatsapp.com/send?phone=593963150913&text=Hola,%20quiero%20un%20pedido!" target="_blank">
        <img src="https://img.icons8.com/windows/24/000000/whatsapp.png" />
      </a>
    </b-button>
  </div>
</template>

<style>
.b {
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}
.titulocentral {
  text-transform: uppercase;
  color: #ffd700;
}
.wm {
  width: max-content;
}
.prim {
  width: 50%;
  margin: auto;
}

.display-3 {
  font-size: 45px;
}

.todocentrado {
  color: white;
  text-align: center;
}
</style>

