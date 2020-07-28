<template>
  <div>
    <div>
      <b-jumbotron class="margin">
        <template v-slot:header>Menu de la semana</template>

        <template v-slot:lead>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
          featured content or information.
        </template>

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

.margin{
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