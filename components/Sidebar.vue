<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <b-img v-bind="mainProps" rounded="circle" alt="Circle image" src="~/static/iconnavbar.png"></b-img> PUCHY
      </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button v-b-toggle.sidebar-right>
          <b-icon icon="grid3x3-gap"></b-icon>
        </b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar id="sidebar-right" title="Puchy" :backdrop-variant="variant" backdrop right shadow>
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
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
      variant: "dark"
    };
  }
};
</script>