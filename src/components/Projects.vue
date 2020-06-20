<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"></v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">{{project.name}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-4">
        <h3>Liens vers les compétences associés:</h3>
        <p v-for="link in project.links" :key="link">
          <router-link :to="`/skills/${link}`">{{skills[link].name}}</router-link>
        </p>

        <p v-for="(par, idx) in project.pars" :key="idx" v-html="par"></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mdiCardAccountMail, mdiCardAccountPhone } from "@mdi/js";
import skills from "../assets/Skills.json";
import projects from "../assets/Projects.json";

@Component
export default class Projects extends Vue {
  @Prop({ required: true })
  public id!: number;

  public project = projects[this.id];
  public skills = skills;
}
</script>
