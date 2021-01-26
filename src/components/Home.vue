<template>
  <v-container>
    <v-row>
      <v-col cols="12"></v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Qui suis-je ?</h1>

        <p class="subheading font-weight-regular">
         Je m’appelle Hugo Loiseau, j’ai 23 ans, je fais de la batterie et je suis passionné par le cinéma et les jeux vidéo. Je suis quelqu’un de passionné par l’innovation et j’ai toujours envie d’apprendre de nouvelles choses.
         <br/>
Je travaille en tant que développeur Frontend chez Ketchapp, une entreprise spécialisée dans les jeux mobile hypercasual, appartenant à Ubisoft Paris mobile.
Je suis dans l’équipe Tools, nous développons des outils et SDK pour répondre aux besoins des différentes équipes de Ketchapp. 
<br />
J’ai la chance de pouvoir interagir dans avec des professionnels du monde entiers : Ukraine, Chine, Russie, Etats-Unis, Canada, etc… J’ai donc un très bon niveau d’anglais.
        </p>
      </v-col>
      <v-col class="mb-5" cols="12">
      <h2 class="headline font-weight-bold mb-3">Projets auxquels j'ai participé</h2>

        <v-row justify="center">
          <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(project, i) in projects" :key="i">
              <v-img :src=project.img height="100%" >
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3" style="color: white">{{ project.name }}</div>
                </v-row>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ce que je sais faire</h2>
        <v-row justify="center">
          <v-card v-for="(skill, i) in techSkills()" :key="i">
            <v-card-title class="subheading mx-3" target="_blank">{{ skill.name }}</v-card-title>
            <v-card-subtitle>{{skill.years}} an(s), {{skill.projects}} projet(s)</v-card-subtitle>
          </v-card>
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Je suis</h2>
        <v-row justify="center">
          <v-card v-for="(skill, i) in humanSkills()" :key="i">
            <v-card-title class="subheading mx-3" target="_blank">{{ skill.name }}</v-card-title>
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

@Component
export default class Home extends Vue {
  public projects = [
    {
      name: "Vue 360° de l'INSEP",
      img: "https://www.insep.fr/sites/default/files/styles/768x430/public/media/images/insep%20omnes.png?itok=q_euwlW8",
      id: 0,
      pro: true
    },
    {
      name: "Cahier Numérique de l'Entraineur (CNE)",
      img: "https://www.insep.fr/sites/default/files/styles/img__1920x500/public/media/images/udni%20bis.png?itok=I90CjODF",
      id: 1,
      pro: true
    },
    {
      name: "Ketchapp Portal",
      img: "data:image/jpeg;base64,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",
      id: 2,
      pro: true
    },
    {
      name: "Casino Bitcoin",
      img: "https://cryptonaute.fr/wp-content/uploads/2021/01/bitcoin-or-750x400.jpg",
      id: 3,
      pro: false
    },
    {
      name: "ProxiFarm",
      img: "https://maximeehanno.files.wordpress.com/2020/06/pf.png",
      id: 4,
      pro: false
    },
  ];
  public skills: Array<Skills> = [
    {
      name: "Ambitieux",
      id: 0,
      tech: false,
      years: null,
      projects: null
    },
    {
      name: "Autonome",
      id: 1,
      tech: false,
      years: null,
      projects: null
    },
    {
      name: "Orateur",
      id: 2,
      tech: false,
      years: null,
      projects: null
    },
    {
      name: "Force de proposition",
      id: 3,
      tech: false,
      years: null,
      projects: null
    },

    {
      name: "Vue.js",
      id: 5,
      tech: true,
      years: 2,
      projects: 3
    },
    {
      name: "C#/ASP.NET CORE",
      id: 6,
      tech: true,
      years: 3,
      projects: 4
    },
    {
      name: "JAVA/KOTLIN Android",
      id: 7,
      tech: true,
      years: 1,
      projects: 1
    },
    {
      name: "Développement web",
      id: 8,
      tech: true,
      years: 5,
      projects: 6
    },
    {
      name: "WPF, développement d’application Lourde",
      id: 9,
      tech: true,
      years: 1,
      projects: 1
    },
    {
      name: "Gestion de projet",
      id: 4,
      tech: true,
      years: 2,
      projects: 3
    }
  ];
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
