<template>

    <div class="toperi">
      <b-jumbotron bg-variant="warning" text-variant="white" class="margin">
        <template v-slot:header>Platos</template>

        <template v-slot:lead>Este es un listado de platos a su elección</template>
        <nuxt-link to="/">
          <b-button variant="dark">Regresar al inicio</b-button>
        </nuxt-link>
      </b-jumbotron>
      <div class="centermenu">
        <b-container fluid>
          <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="3">
            <b-col>
              <b-card
                title="Card Title"
                img-src="~/static/bolonconhuevo.jpeg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col>
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col>
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col>
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col>
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col>
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

</template>

<script>
export default {  
   asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  },
}
</script>
<style >

.toperi{
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
}

.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.display-3 {
  font-size: 45px;
}
</style>