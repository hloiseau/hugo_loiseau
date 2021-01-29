<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"></v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">{{ skill.name }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-4">
        <h3>Liens vers les projets associés:</h3>
        <p v-for="link in skill.links" :key="link">
          <router-link :to="`/projects/${link}`">{{
            projects[link].name
          }}</router-link>
        </p>
        <div v-for="par in skill.pars" :key="par.title">
          <h3>{{ par.title }}</h3>
          <p v-html="par.par"></p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import skills from "../assets/Skills.json";
import projects from "../assets/Projects.json";

@Component
export default class Skills extends Vue {
  @Prop({ required: true })
  public id!: number;

  public skill = skills[this.id];
  public projects = projects;

  @Watch("id")
  onPropertyChanged(value: number) {
    this.skill = skills[value];
  }
}
</script>
