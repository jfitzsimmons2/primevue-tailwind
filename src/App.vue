<script setup lang="ts">
import Card from "primevue/card";
import HelloWorld from "./components/HelloWorld.vue";
import { usePrimeVue } from "primevue/config";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Panel from "primevue/panel";

import { computed } from "vue";

const pv = usePrimeVue();
const passThrough = computed(() => pv.config.pt);

console.log("passThrough", passThrough.value);
</script>

<template>
  <Card class="mx-auto my-4">
    <template #header> Card component </template>
    <template #content>
      <div class="text-center w-full">
        <div class="flex justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
          <a href="https://primevue.org" target="_blank">
            <img
              src="./assets/primevue-logo.webp"
              class="logo primevue"
              alt="PrimeVue logo"
            />
          </a>
        </div>
        <HelloWorld msg="Vite + Vue + PrimeVue" />
      </div>
    </template>
  </Card>

  <div class="sm:grid gap-4 sm:grid-cols-2">
    <div>
      <Card class="w-full">
        <template #header> Accordion component </template>
        <template #content>
          <Accordion>
            <AccordionTab header="what"
              >Reprehenderit voluptate Lorem ut exercitation irure excepteur ut
              culpa commodo. Ad tempor ut esse sit duis ad voluptate tempor.
              Exercitation proident fugiat ut minim incididunt aliqua non
              pariatur minim ea officia. Fugiat mollit quis sunt ex Lorem
              adipisicing. Incididunt esse culpa laborum pariatur officia non
              anim et. Dolor reprehenderit dolore dolor minim
              reprehenderit.</AccordionTab
            >
            <AccordionTab header="what"
              >Ullamco sint laborum nisi magna eu cupidatat laboris laborum sunt
              irure aute exercitation. Quis aute culpa dolore sunt ipsum laboris
              nulla ipsum veniam veniam. Duis elit tempor voluptate elit et
              culpa pariatur mollit anim nisi nisi enim reprehenderit. Veniam
              duis enim pariatur exercitation laborum veniam elit ut excepteur
              ullamco irure irure magna. Laboris ad commodo minim eu qui
              adipisicing pariatur dolore magna ea nostrud. Nostrud qui est ad
              nulla consequat consequat consequat cillum. Elit reprehenderit
              eiusmod elit commodo.</AccordionTab
            >
            <AccordionTab header="what"
              >Dolor aute esse elit aliquip veniam eu. Et culpa culpa occaecat
              consectetur irure commodo amet. Sunt commodo eiusmod qui excepteur
              est irure aute labore. Adipisicing consectetur consectetur tempor
              incididunt aliqua ut aliqua labore aute commodo tempor pariatur
              mollit veniam. Exercitation cupidatat anim enim dolor anim fugiat
              est commodo consectetur id ut adipisicing. Excepteur dolore sint
              tempor minim enim amet. Nisi do deserunt pariatur excepteur
              consequat Lorem commodo nisi.</AccordionTab
            >
          </Accordion>
        </template>
      </Card>
    </div>
    <div>
      <Panel
        :pt="{ root: { class: 'border-4 rounded-lg' } }"
        header="Panel component w/ overrides"
        toggleable
      >
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Panel>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
