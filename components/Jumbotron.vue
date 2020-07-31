<template>
  <div>
    <b-jumbotron class="todocentrado">
      <template v-slot:header><strong>La sazón de la Puchy</strong></template>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>

      <nuxt-link to="/menu">
        <b-button variant="primary">Menu de la semana</b-button>
      </nuxt-link>
      <NuxtLink to="/platos">
        <b-button variant="warning">Platos</b-button>
      </NuxtLink>

        <b-button v-b-modal.modal-1>Sobre nosotros</b-button>

        <b-modal id="modal-1" title="Sobre nosotros">
          <p class="my-4">Este es su mejor elección en comidas</p>
        </b-modal>
    
    </b-jumbotron>
  </div>
</template>

<style>
.prim {
  width: 50%;
  margin: auto;
}

.display-3 {
  font-size: 45px;
}

.btn{
  margin-bottom: 7px;
}
</style>

