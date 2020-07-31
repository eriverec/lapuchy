<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="light" variant="faded">
      <b-navbar-brand to="/">
        <strong>P U C H Y</strong> 
      </b-navbar-brand>
  
      <b-navbar-nav class="ml-auto">
        <b-button variant="light" v-b-toggle.sidebar-right>
          <b-icon icon="chevron-double-left"></b-icon>
        </b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar id="sidebar-right" :backdrop-variant="variant" backdrop no-header right shadow>
      <template v-slot:footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Footer</strong>
          <b-button size="sm" @click="hide">Close</b-button>
        </div>
      </template>
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">
            <strong>PUCHY</strong>
          </h4>

          <nav class="mb-3 text-dark">
            <b-nav vertical>
              <b-nav-item @click="hide">
                <nuxt-link class="text-info" to="/">
                  <strong>Home</strong>
                </nuxt-link>
              </b-nav-item>
              <b-nav-item @click="hide">
                <nuxt-link class="text-info" to="/platos">
                  <strong>Platos</strong>
                </nuxt-link>
              </b-nav-item>
              <b-nav-item @click="hide">
                <nuxt-link class="text-info" to="/menu">
                  <strong>Menu de la semana</strong>
                </nuxt-link>
              </b-nav-item>
            </b-nav>
          </nav>

          <b-alert show variant="info">
            Servicio a domicilio solo <strong>Norte</strong>  <b-badge variant="success">$2</b-badge><br>
            Número de contacto <br>
            <h5><b-badge variant="dark">+593 963150913</b-badge></h5>
            
          </b-alert>
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