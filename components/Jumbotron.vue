<template>
  <div>
    <b-jumbotron class="todocentrado">
      <template v-slot:header>La sazón de la Puchy</template>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>

      <b-button variant="success" href="#">Sobre nosotros</b-button>
      <nuxt-link to="/menu">
        <b-button variant="primary">Menu de la semana</b-button>
      </nuxt-link>

      <div>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </div>
    </b-jumbotron>
  </div>
</template>

<style>
.prim {
  width: 50%;
  margin: auto;
}
</style>

