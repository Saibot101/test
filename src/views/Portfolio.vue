<template>
  <div>
    <h1 class="text-center mt-10 mb-5 display-3">Portfolio</h1>
    <h5 class="text-center headline mt-2 mb-5">
      In this section I present my projects from university and my self learning
      adventures. <br />
      I wrote for the Cloud and Telegram project blog entries with explenations.
      <br />
      On my Github page are more projects uploaded.
    </h5>
    <v-container>
      <v-row class="mx-5">
        <!--
        <v-col lg="4" xl="3" md="6" sm="12">
          <v-card
            class="pa-4 mb-6"
            outlined
            tile
            to="/portfolio/cloud"
            :ripple="false"
          >
            <v-img src="../assets/fra-uas_2.png"> </v-img>
            <v-divider class="mt-4"></v-divider>
            <v-card-title class="justify-center"
              >CI /CD of a Cloud Functions Sercie</v-card-title
            >
          </v-card>
        </v-col>
        <v-col lg="4" xl="3" md="6" sm="12">
          <v-card
            class="pa-4 mb-6"
            outlined
            tile
            to="/portfolio/telegram"
            :ripple="false"
          >
            <v-img src="../assets/fra-uas_2.png"> </v-img>
            <v-divider class="mt-4"></v-divider>
            <v-card-title class="justify-center">Telegram</v-card-title>
          </v-card>
        </v-col>
        -->
        <v-col lg="4" xl="3" md="6" sm="12">
          <v-card
            class="pa-4 mb-6"
            outlined
            tile
            href="https://github.com/Saibot101/bachelor_thesis"
            :ripple="false"
          >
            <v-img src="../assets/fra-uas_2.png"> </v-img>
            <v-divider class="mt-4"></v-divider>
            <v-card-title class="justify-center">Bachelor Thesis</v-card-title>
          </v-card>
        </v-col>
        <v-col lg="4" xl="3" md="6" sm="12">
          <v-card
            class="pa-4"
            outlined
            tile
            href="https://github.com/Saibot101/bachelor_thesis"
            :ripple="false"
          >
            <v-img src="../assets/hyperledger-fabric_2.jpeg"> </v-img>
            <v-divider class="mt-4"></v-divider>
            <v-card-title class="justify-center">Bachelor Project</v-card-title>
          </v-card>
        </v-col>
        <v-col lg="4" xl="3" md="6" sm="12">
          <v-card
            class="pa-4"
            outlined
            tile
            href="https://github.com/Saibot101/bachelor_thesis"
            :ripple="false"
          >
            <v-img src="../assets/java_2.jpg"> </v-img>
            <v-divider class="mt-4"></v-divider>
            <v-card-title class="justify-center"
              >Bachelor Java Project</v-card-title
            >
          </v-card>
        </v-col>
        <v-col lg="4" xl="3" md="6" sm="12">
          <v-card
            class="pa-4"
            outlined
            tile
            href="https://github.com/Saibot101/bachelor_thesis"
            :ripple="false"
          >
            <v-img src="../assets/Terraform.png"> </v-img>
            <v-divider class="mt-4"></v-divider>
            <v-card-title class="justify-center">Bachelor Seminar</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
