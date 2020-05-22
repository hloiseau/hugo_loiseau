<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"></v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Bienvenue sur mon portfolio</h1>

        <p class="subheading font-weight-regular">
          Actuellement à l'INSEP dans l'Unité du Développement Numérique et de
          l'Innovation (UDNI),
          <br />j'ai pour mission de développer des applications afin d'aider à
          la performance sportive.
          <br />Par exemple, une suite d'applications
          dédiés aux nouvelles méthodes d’entraînements des Sportifs de Haut
          Niveaux.
          <br />J'ai développé ce portfolio en TypeScript avec Vue.js.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Mon contact</h2>
        <v-row justify="center">
          <h3 class="font-weight-bold mb-3">
            <v-icon>mdi-card-account-mail</v-icon>hugo.loiseau61@gmail.com
          </h3>
        </v-row>
        <v-row justify="center">
          <h3 class="font-weight-bold mb-3">
            <v-icon>mdi-card-account-phone</v-icon>+33.(0)6.42.77.47.40
          </h3>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Projets auxquels j'ai participé</h2>

        <v-row justify="center">
          <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(project, i) in projects" :key="i">
              <v-sheet :color="white" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ project.name }}</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >{{ eco.text }}</a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiCardAccountMail, mdiCardAccountPhone } from "@mdi/js";
import Project from "../store/Project";
@Component
export default class Home extends Vue {
  public projects: Array<Project> = [
    {
      name: "Vue 360° de l'INSEP",
      id: 0,
      pro: true
    },
    {
      name: "Cahier Numérique de l'Entraineur (CNE)",
      id: 1,
      pro: true
    },
    {
      name: "Mise en œuvre de Jira et de l’agilité",
      id: 2,
      pro: true
    },
    {
      name: "Casino Bitcoin",
      id: 3,
      pro: false
    },
    {
      name: "Fusion",
      id: 4,
      pro: false
    },
    {
      name: "ProxiFarm",
      id: 5,
      pro: false
    },
    {
      name: "Dungeon Planet",
      id: 6,
      pro: false
    }
  ];
}
</script>
