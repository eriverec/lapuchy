<template>
  <div>
    <div>
      <b-jumbotron bg-variant="dark" text-variant="white" class="margin">
        <template v-slot:header>Menu fin de semana</template>

        <template
          v-slot:lead
        >Estimada clientela este fin de semana te traemos los mejores manjares para ti solo aquí.</template>
        <nuxt-link to="/">
          <b-button variant="primary">Regresar al inicio</b-button>
        </nuxt-link>
      </b-jumbotron>
      <div class="centermenu">
        <b-container fluid>
          <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="3">
            <b-col>
              <b-card class="mb-2">
                <template v-slot:header>
                  <h4 class="mb-0">Ceviches</h4>
                </template>
                <b-card-text>
                  <b-icon icon="check2-square" font-scale="1"></b-icon>Pescado
                  <b-badge variant="warning">$5</b-badge>
                  <br />

                  <b-icon icon="check2-square" font-scale="1"></b-icon>Camarón
                  <b-badge variant="warning">$5</b-badge>
                  <br />

                  <b-icon icon="check2-square" font-scale="1"></b-icon>Mixto (Camarón, pescado curtido, calamar y pulpo.)
                  <b-badge variant="warning">${{ sum }}</b-badge>
                  <br /> 
                  <b-alert show variant="info">
              
                    <b-form-checkbox
                      switch
                      id="checkbox-2"
                      v-model="checkedNumbers"
                      name="checkbox-2"
                      value="1"
                      unchecked-value="not_accepted"
                    >+ Concha.</b-form-checkbox>
                  </b-alert>

                  <b-alert show variant="warning">Todos los Ceviches Mixtos incluyen chifles</b-alert>
                </b-card-text>
              </b-card>
            </b-col>
            <b-col>
              <b-card class="mb-2">
                 <template v-slot:header>
                  <h4 class="mb-0">Bolones </h4>
                </template>
                <b-card-text>
                  <h3>Asesineytor (Grande)</h3>
                  <b-icon icon="check2-square" font-scale="1"></b-icon> Queso
                  <b-badge variant="warning">$3</b-badge>
                  <br />

                  <b-icon icon="check2-square" font-scale="1"></b-icon> Chicharrón 
                  <b-badge variant="warning">$3</b-badge>
                  <br />

                  <b-icon icon="check2-square" font-scale="1"></b-icon> Mixto
                  <b-badge variant="warning">$4</b-badge>
                  <br /> <br>

                  <h3>kryptoniano (Normal) </h3>
                  <b-icon icon="check2-square" font-scale="1"></b-icon> Queso
                  <b-badge variant="warning">$2.50</b-badge>
                  <br />

                  <b-icon icon="check2-square" font-scale="1"></b-icon> Chicharrón
                  <b-badge variant="warning">$2.50</b-badge>
                  <br />

                  <b-icon icon="check2-square" font-scale="1"></b-icon> Mixto
                  <b-badge variant="warning">$3</b-badge>
                  <br> <br>

                  <b-alert show variant="success">
                    <strong>Adicioneales</strong>
                    <br />
                    <b-icon icon="check2-square" font-scale="1"></b-icon> Porción de bistec
                  <b-badge variant="warning">$1.50</b-badge>
                  <br />

                  <b-icon icon="check2-square" font-scale="1"></b-icon> Huevo frito
                  <b-badge variant="warning">$0.50</b-badge>
                  <br />
                  </b-alert>
                </b-card-text>
              </b-card>
            </b-col>
             <b-col>
              <b-card class="mb-2">
                <template v-slot:header>
                  <h4 class="mb-0">Copa mexicana bajo pedido</h4>
                </template>
                <b-card-text>
                  <b-icon icon="check2-square" font-scale="1"></b-icon> Pequeña
                  <b-badge variant="warning">$8</b-badge>
                  <br />

                  <b-icon icon="check2-square" font-scale="1"></b-icon> Grande
                  <b-badge variant="warning">$20</b-badge>
                               

                  <b-alert show variant="warning">Todos los Ceviches Mixtos incluyen chifles</b-alert>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>


<style >
.centermenu {
  margin: auto;
  width: 90%;
  display: flex;
}
.mb-2 {
  margin: 10px;
  max-width: none !important;
}

.margin {
  margin: 20px;
}

.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
</style>


<script>
export default {
  data() {
    return {
      checkedNumbers: [],
    };
  },
  computed: {
    sum() {
      return this.checkedNumbers.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
      }, 6);
    },
  },
};
</script>