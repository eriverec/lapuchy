<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="light" variant="faded">
      <b-navbar-brand to="/">
      <img src="~/static/iconnavbar2.png" class="d-inline-block align-top" alt="puchy">
        <strong>P U C H Y</strong>
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <a variant="light" v-b-toggle.sidebar-right>
          <b-icon font-scale="2" icon="list"></b-icon>
        </a>
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar id="sidebar-right" :backdrop-variant="variant" backdrop no-header right shadow>
      <template v-slot:footer="{}">
        <div class="d-flex bg-dark text-light align-items-center px-2 py-2">
          <div class="m-auto fs">© 2020 Puchy By Eri Vera</div>
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
                <nuxt-link class="text-info" to="/menu">
                  <strong>Menú fin de semana</strong>
                </nuxt-link>
              </b-nav-item>
            </b-nav>
          </nav>

          <b-alert show variant="info">
            Servicio a domicilio solo
            <strong>Norte</strong>
            <b-badge variant="success">$2</b-badge>
            <br />Número de contacto
            <br />
            <h5>
              <b-badge variant="dark">+593 963150913</b-badge>
              <b-button pill size="sm" class="" variant="outline-secondary">
                <a href="https://api.whatsapp.com/send?phone=593963150913&text=Hola,%20quiero%20un%20pedido!" target="_blank">
                  <img src="https://img.icons8.com/windows/24/000000/whatsapp.png" />
                </a>
              </b-button>
            </h5>
          </b-alert>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<style>
.fs {
  font-size: 13px;
}
.mr-30 {
  margin-right: 30px;
}
.align-top{
  width: 30px;
}
</style>


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