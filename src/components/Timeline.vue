<template>
  <v-container>
    <v-timeline>
      <v-timeline-item v-for="(year, i) in Years" :key="i" :color="year.color">
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              {{ year.title }}
            </h2>
            <div>
              {{ year.text }}
            </div>
          </div>
        </template>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Timeline extends Vue {
  public Years = [
    {
      color: "cyan",
      year: "2016-2021",
      title: "IN'TECH, Groupe ESIEA",
      text:
        "Titre RNCP Niveau 1 Expert en Ingénierie Logicielle — Ivry-Sur-Seine(94)"
    },
    {
      color: "green",
      year: "Septembre 2020",
      title: "Ketchapp",
      text: "Front Developer"
    },
    {
      color: "amber",
      year: "Février 2019 — Septembre 2020",
      title: "INSEP",
      text: "Chef de projet application web et innovation"
    },
    {
      color: "orange",
      year: "2015-2016",
      title: "Bac S",
      text:
        "Spécialité informatique et Sciences du Numérique (ISN) – Lycée ALAIN – Alençon(61)"
    }
  ];
}
</script>
