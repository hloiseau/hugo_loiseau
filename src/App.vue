<template>
  <v-app>
    <v-app-bar class="d-none d-sm-block" fixed dark>
      <v-toolbar-title style="cursor: pointer" @click="toHome">
        Hugo Loiseau
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-divider dark vertical></v-divider>
      <v-spacer></v-spacer>
      <h4 style="cursor: pointer" @click="toTimeLine">Parcours</h4>
      <v-spacer></v-spacer>
      <v-divider dark vertical></v-divider>
      <v-spacer></v-spacer>
      <v-menu
        :close-on-content-click="false"
        transition="slide-y-transition"
        bottom
      >
        <template v-slot:activator="{ on }">
          <h4 style="cursor: pointer" v-on="on">Projets</h4>
        </template>
        <v-list>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title>Projets scolaires</v-list-item-title>
            </template>
            <v-list-item
              v-for="project in schoolProject()"
              :key="project.id"
              @click="toProjects(project.id)"
            >
              <v-list-item-title>{{ project.name }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title>Projets professionels</v-list-item-title>
            </template>
            <v-list-item
              v-for="project in workProject()"
              :key="project.id"
              @click="toProjects(project.id)"
            >
              <v-list-item-title>{{ project.name }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>
      <v-divider dark vertical></v-divider>
      <v-spacer></v-spacer>
      <v-menu
        :close-on-content-click="false"
        transition="slide-y-transition"
        bottom
      >
        <template v-slot:activator="{ on }">
          <h4 style="cursor: pointer" v-on="on">Compétences</h4>
        </template>
        <v-list>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title>Compétences humaines</v-list-item-title>
            </template>
            <v-list-item
              v-for="skill in humanSkills()"
              :key="skill.id"
              @click="toSkills(skill.id)"
            >
              <v-list-item-title>{{ skill.name }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title>Compétences Techniques</v-list-item-title>
            </template>
            <v-list-item
              v-for="skill in techSkills()"
              :key="skill.id"
              @click="toSkills(skill.id)"
            >
              <v-list-item-title>{{ skill.name }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>
      <v-divider dark vertical></v-divider>
      <v-spacer></v-spacer>
      <h4 style="cursor: pointer" @click="showCV">CV</h4>
      <v-spacer></v-spacer>
      <v-divider dark vertical></v-divider>
      <v-spacer></v-spacer>
      <h4 style="cursor: pointer" @click="toLinkedIn">LinkedIn</h4>
      <v-spacer></v-spacer>
      <v-divider dark vertical></v-divider>
      <v-spacer></v-spacer>
      <h4 style="cursor: pointer" @click="toGitHub">GitHub</h4>
      <v-spacer></v-spacer>
      <v-divider dark vertical></v-divider>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-app-bar
      class="d-sm-none"
      scroll-threshold="50"
      fixed
      inverted-scroll
      dark
    >
      <v-toolbar-title style="cursor: pointer" @click="toHome"
        >Hugo Loiseau</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" right dark app temporary>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title style="cursor: pointer" @click="toHome"
              >Hugo Loiseau</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link>
          <v-list-item-content>
            <h4 @click="toTimeLine">Parcours</h4>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-menu
              :close-on-content-click="false"
              transition="slide-y-transition"
              bottom
            >
              <template v-slot:activator="{ on }">
                <h4 style="cursor: pointer" v-on="on">Projets</h4>
              </template>
              <v-list>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-title>Projets scolaires</v-list-item-title>
                  </template>
                  <v-list-item
                    v-for="project in schoolProject()"
                    :key="project.id"
                    @click="toProjects(project.id)"
                  >
                    <v-list-item-title>{{ project.name }}</v-list-item-title>
                  </v-list-item>
                </v-list-group>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-title>Projets professionels</v-list-item-title>
                  </template>
                  <v-list-item
                    v-for="project in workProject()"
                    :key="project.id"
                    @click="toProjects(project.id)"
                  >
                    <v-list-item-title>{{ project.name }}</v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-menu>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-menu
              :close-on-content-click="false"
              transition="slide-y-transition"
              bottom
            >
              <template v-slot:activator="{ on }">
                <h4 style="cursor: pointer" v-on="on">Compétences</h4>
              </template>
              <v-list>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-title>Compétences humaines</v-list-item-title>
                  </template>
                  <v-list-item
                    v-for="skill in humanSkills()"
                    :key="skill.id"
                    @click="toSkills(skill.id)"
                  >
                    <v-list-item-title>{{ skill.name }}</v-list-item-title>
                  </v-list-item>
                </v-list-group>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-title>
                      Compétences Techniques
                    </v-list-item-title>
                  </template>
                  <v-list-item
                    v-for="skill in techSkills()"
                    :key="skill.id"
                    @click="toSkills(skill.id)"
                  >
                    <v-list-item-title>{{ skill.name }}</v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-menu>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <h4 style="cursor: pointer" @click="showCV">CV</h4>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <h4 style="cursor: pointer" @click="toLinkedIn">LinkedIn</h4>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <h4 style="cursor: pointer" @click="toGitHub">GitHub</h4>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-parallax v-if="img == homeImg" :src="img" :height="height">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-4 mb-4">Hugo Loiseau</h1>
          <h3 class="subheading"></h3>
        </v-col>
      </v-row>
    </v-parallax>
    <v-img v-else :src="img" :max-height="height">
      <v-row class="fill-height" align="center" justify="center">
        <div class="display-3" style="color: white">
          {{ projectName }}
        </div>
      </v-row>
    </v-img>
    <v-content >
      <router-view style="max-width: 1000px"></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Project from "./store/Project";
import skills from "./assets/Skills.json";
import projects from "./assets/Projects.json";
import Skills from "./store/Skills";

@Component
export default class App extends Vue {
  private pdf = require("@/assets/CV.pdf");
  private drawer = false;
  public skills = skills;
  public projects = projects;
  public height = 800;
  public homeImg =
    "https://www.itl.cat/pngfile/big/153-1533869_ipad-retina-source-code.jpg";
  public img = this.homeImg;
  public projectName = "";

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
  private toHome() {
    this.height = 800;
    this.img = this.homeImg;
    this.$router.push({ path: "/" });
  }
  private toTimeLine() {
    this.height = 500;
    this.img = this.homeImg;
    this.$router.push({ path: "/timeline" });
  }
  private toProjects(id: number) {
    this.height = 500;
    this.img = this.projects[id].img;
    this.projectName = this.projects[id].name;
    this.$router.replace({ path: `/projects/${id}` });
  }
  private toSkills(id: number) {
    this.height = 500;
    this.img = this.homeImg;
    this.$router.push({ path: `/skills/${id}` });
  }
  private showCV() {
    window.open(this.pdf, "_blank");
  }
  private toLinkedIn() {
    window.open("https://www.linkedin.com/in/hloiseau/", "_blank");
  }
  private toGitHub() {
    window.open("https://github.com/hloiseau", "_blank");
  }
}
</script>
