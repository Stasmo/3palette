<template>
  <v-autocomplete
    label="Select a color"
    :items="colors"
    item-text="name"
    @change="selected"
    :value="value"
    clearable
  >
    <template v-slot:selection="data">
      <v-list-item-avatar>
        <v-avatar :style="{ backgroundColor: data.item.hex }"></v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-html="data.item.name"></v-list-item-title>
        <v-list-item-subtitle>{{ data.item.hex }}</v-list-item-subtitle>
      </v-list-item-content>
    </template>
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <v-list-item-avatar>
          <v-avatar :style="{ backgroundColor: data.item.hex }"></v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.name"></v-list-item-title>
          <v-list-item-subtitle>{{ data.item.hex }}</v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
import onecolor from 'onecolor';

export default {
  name: 'ColorAutocomplete',
  props: {
    colors: Array,
    value: Object,
  },
  methods: {
    onecolor,
    selected(e) {
      console.log(e);
      this.$emit('input', this.colors.find(c => c.name == e));
    },
  }
};
</script>
