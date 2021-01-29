<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"></v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">{{ project.name }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-4">
        <h3>Liens vers les compétences associés:</h3>
        <p v-for="link in project.links" :key="link">
          <router-link :to="`/skills/${link}`">{{
            skills[link].name
          }}</router-link>
        </p>

        <div v-for="par in project.pars" :key="par.title">
          <h3>{{ par.title }}</h3>
          <p v-html="par.par"></p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(human, i) in project.collaborators" :key="i" class="mb-4">
        <a :href="human.url" target="_blank">
          <v-card style="margin: 25px">
            <v-card-title class="subheading mx-3" target="_blank">
              <v-avatar>
                <img :src="human.image" />
              </v-avatar>
              <v-spacer></v-spacer>
              {{ human.name }}
            </v-card-title>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import skills from "../assets/Skills.json";
import projects from "../assets/Projects.json";

@Component
export default class Project extends Vue {
  @Prop({ required: true })
  public id!: number;

  public project = projects[this.id];
  public skills = skills;

  @Watch("id")
  onPropertyChanged(value: number) {
    this.project = projects[value];
  }
}
</script>
