<template>
  <!-- App.vue -->

  <v-app>

    <v-navigation-drawer app width="500px">
        <!-- Provides the application the proper gutter -->
        <v-card
          v-for="type of types" :key="type"
          outlined
          tile
        >
          <v-card-title>{{ capitalize(type) }}</v-card-title>
          <v-card-text>
            <ColorAutocompleteComponent
              :colors="colors"
              v-model="selected[type]"
            ></ColorAutocompleteComponent>
            <ColorGridComponent
              v-for="fam of colorFamilies"
              :colorfam="fam"
              :key="fam"
              class="mr-2"
            ></ColorGridComponent>
          </v-card-text>
        </v-card>
    </v-navigation-drawer>

<!--
    <v-app-bar app>

    </v-app-bar> -->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid class="fill-height">
        <PalatteViewComponent
          :colors="selected"
        ></PalatteViewComponent>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import colors from './colors.json';
import { capitalize } from './lib/utils';
import onecolor from 'onecolor';
import ColorAutocompleteComponent from './components/ColorAutocompleteComponent.vue';
import PalatteViewComponent from './components/PalatteViewComponent.vue';
import ColorGridComponent from './components/ColorGridComponent.vue';

export default {
  name: 'App',

  components: { ColorAutocompleteComponent, PalatteViewComponent, ColorGridComponent },

  created(){
    colors.sort((a,b) => a.name > b.name ? 1 : -1)
  },

  mounted() {
    this.selected['base'] = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.selected['white'] = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.selected['accent'] = this.colors[Math.floor(Math.random() * this.colors.length)];
  },

  data: () => ({
    colorFamilies: [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
      'gray',
      'neutral',
      'white',
    ],
    colors,
    log: console.log,
    types: [
      'base',
      'white',
      'accent',
    ],
    selected: {
      base: {},
      white: {},
      accent: {},
    },
  }),
  methods: {
    capitalize,
    onecolor,
  },
};
</script>
