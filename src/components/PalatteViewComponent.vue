<template>
  <v-sheet
    :style="{ backgroundColor: colors['base']?.hex, width: '100%' }"
    class="d-flex flex-row flex-row-reverse fill-height"
  >
    <div
      v-for="type, i of ['accent','white','base','white']"
      :key="`palatte-view-${type}-${i}`"
      style="width: 10%; height: 100%;"
      :style="{ backgroundColor: colors[type]?.hex }"
    ></div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    colors: Object
  }
}
</script>
