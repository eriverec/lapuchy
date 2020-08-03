<template>
  <div class="toperi">
    <b-jumbotron class="margin">
      <template v-slot:header>Menú fin de semana</template>

      <template
        v-slot:lead
      >Estimada clientela este fin de semana te traemos los mejores manjares para ti.</template>
    </b-jumbotron>
    <div class="centermenu">
      <b-container fluid>
        <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="3">
          <b-col>
            <b-card
              title="Bolones"
              img-src="~/static/bolonconhuevo.jpeg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; "
              class="mb-2"
            >
              <b-card-text>
                <h5>Asesineytor (Grande)</h5>
                <b-icon icon="check2-square" font-scale="1"></b-icon> Queso
                <b-badge variant="warning">$3</b-badge>
                <br />

                <b-icon icon="check2-square" font-scale="1"></b-icon> Chicharrón
                <b-badge variant="warning">$3</b-badge>
                <br />

                <b-icon icon="check2-square" font-scale="1"></b-icon> Mixto
                <b-badge variant="warning">$4</b-badge>
                <br />
                <br />

                <h5>kryptoniano (Normal)</h5>
                <b-icon icon="check2-square" font-scale="1"></b-icon> Queso
                <b-badge variant="warning">$2.50</b-badge>
                <br />

                <b-icon icon="check2-square" font-scale="1"></b-icon> Chicharrón
                <b-badge variant="warning">$2.50</b-badge>
                <br />

                <b-icon icon="check2-square" font-scale="1"></b-icon> Mixto
                <b-badge variant="warning">$3</b-badge>
                <br />
                <br />

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
            <b-card
              title="Ceviches"
              img-src="~/static/cevi.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 50rem; heigth: 20px "
              class="mb-2"
            >
              <b-card-text>
                <b-icon icon="check2-square" font-scale="1"></b-icon> Pescado
                <b-badge variant="warning">$5</b-badge>
                <br />

                <b-icon icon="check2-square" font-scale="1"></b-icon> Camarón
                <b-badge variant="warning">$5</b-badge>
                <br />

                <b-icon icon="check2-square" font-scale="1"></b-icon> Mixto (Camarón, pescado curtido, calamar y pulpo.)
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
            <b-card
              title="Copa Mexicana"
              img-src="~/static/copa.jpeg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; "
              class="mb-2"
            >
              <b-card-text>
                <b-icon icon="check2-square" font-scale="1"></b-icon> Pequeña
                <b-badge variant="warning">$8</b-badge>
                <br />

                <b-icon icon="check2-square" font-scale="1"></b-icon> Grande
                <b-badge variant="warning">$20</b-badge>
                <br />
                <br />
                <b-alert show variant="warning">
                  Este producto es
                  <b>bajo pedido</b>
                </b-alert>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>


<style >
.toperi {
  margin-top: 80px;
}
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
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
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
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({});
      }, 500);
    });
  },
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
  head() {
    return {
      title: "Puchy",
      titleTemplate: "%s - Menú",
    };
  },
};
</script>