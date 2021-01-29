<template>
  <v-container>
    <v-row>
      <v-col cols="12"></v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Qui suis-je ?</h1>

        <p class="subheading font-weight-regular">
          Je m’appelle Hugo Loiseau, j’ai 23 ans. Je joue de la batterie et je
          suis passionné par le cinéma et les jeux vidéo. Fan d’innovation, j’ai
          toujours envie d’apprendre de nouvelles notions.
          <br />
          Je travaille actuellement en tant que développeur Frontend chez
          <b>Ketchapp</b>, une filiale d’<b>Ubisoft Paris mobile</b>,
          spécialisée dans les jeux mobiles hypercasual.
          <br />
          Je suis dans l’équipe Tools, nous développons des outils et des «
          développement kit » pour répondre aux besoins des différentes équipes
          de <b>Ketchapp</b>.
          <br />
          J’ai la chance de pouvoir interagir avec des professionnels du monde
          entiers : Ukraine, Chine, Russie, Etats-Unis, Canada, etc… Ce qui me
          permets de parfaire mon niveau d’anglais au quotidien.
        </p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Projets auxquels j'ai participé
        </h2>

        <v-row justify="center">
          <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(project, i) in projects" :key="i">
              <v-img :src="project.img" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3" style="color: white">
                    {{ project.name }}
                  </div>
                </v-row>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ce que je sais faire</h2>
        <v-row justify="center">
          <v-card
            v-for="(skill, i) in techSkills()"
            :key="i"
            style="margin: 25px"
          >
            <v-card-title class="subheading mx-3" target="_blank">{{
              skill.name
            }}</v-card-title>
            <v-card-subtitle
              >{{ skill.years }} an(s),
              {{ skill.projects }} projet(s)</v-card-subtitle
            >
          </v-card>
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Je suis</h2>
        <v-row justify="center">
          <v-card
            v-for="(skill, i) in humanSkills()"
            :key="i"
            style="margin: 25px"
          >
            <v-card-title class="subheading mx-3" target="_blank">{{
              skill.name
            }}</v-card-title>
            <v-card-subtitle></v-card-subtitle>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Project from "../store/Project";
import Skills from "../store/Skills";
import skills from "../assets/Skills.json";
import projects from "../assets/Projects.json";

@Component
export default class Home extends Vue {
  public projects = projects;
  public skills = skills;
  private schoolProject(): Array<Project> {
    return this.projects.filter((element: Project) => !element.pro);
  }
  private workProject(): Array<Project> {
    return this.projects.filter((element: Project) => element.pro);
  }
  private humanSkills(): Array<Skills> {
    return this.skills.filter((element: Skills) => !element.tech);
  }
  private techSkills(): Array<Skills> {
    return this.skills.filter((element: Skills) => element.tech);
  }
}
</script>
