<template>
  <div>
    <!--<b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand href="#">
        <b-img v-bind="mainProps" rounded="circle" alt="Circle image" src="~/static/iconnavbar.png"></b-img> PUCHY
      </b-navbar-brand>
  
      <b-navbar-nav class="ml-auto">
        <b-button v-b-toggle.sidebar-right>MENU
        </b-button>
      </b-navbar-nav>
    </b-navbar>-->

    <b-sidebar id="sidebar-right" :backdrop-variant="variant" backdrop right shadow>
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title"><strong>PUCHY</strong> </h4>

          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item @click="hide">
                <nuxt-link to="/platos">Platos</nuxt-link>
              </b-nav-item>
              <b-nav-item @click="hide">
                <nuxt-link to="/menu">
                  Menu de la semana
                </nuxt-link>
              </b-nav-item>

              <b-button v-b-modal.modal-1>Sobre nosotros</b-button>

              <b-modal id="modal-1" title="Sobre nosotros">
                <p class="my-4">Este es su mejor elección en comidas</p>
              </b-modal>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: {
        width: 30,
        height: 30,
      },
      variant: "dark",
    };
  },
};
</script>