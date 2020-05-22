import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import Project from "../Project";
@Module({ namespaced: true, name: "data" })
class Data extends VuexModule {
  public projects: Array<Project> = [
    {
      name: "Vue 360° de l'INSEP",
      id: 0,
      pro: true,
    },
    {
      name: "Cahier Numérique de l'Entraineur (CNE)",
      id: 1,
      pro: true,
    },
    {
      name: "Mise en œuvre de Jira et de l’agilité",
      id: 2,
      pro: true,
    },
    {
      name: "Casino Bitcoin",
      id: 3,
      pro: false,
    },
    {
      name: "Fusion",
      id: 4,
      pro: false,
    },
    {
      name: "ProxiFarm",
      id: 5,
      pro: false,
    },
    {
      name: "Dungeon Planet",
      id: 6,
      pro: false,
    },
  ];
}
export default Data;
