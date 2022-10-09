<template>
  <v-hover
    v-slot="{ hover }"
    style="cursor: pointer; display: inline-block;"
  >
    <table :class="`elevation-${hover ? 4 : 1}`">
      <tr v-for="i in rows" :key="i" class="box-row">
        <td
          v-for="j in cols"
          :key="`${i}-${j}`"
          class="box"
          :style="{ backgroundColor: desaturate(i - 1, j) }"
        ></td>
      </tr>
    </table>
  </v-hover>
</template>

<script>
import onecolor from 'onecolor';

export default {
  created() {
    this.increment = 1 / (this.rows * this.cols);
    this.offset = 1 / this.rows;
  },
  props: {
    rows: {
      type: Number,
      default: 5,
    },
    cols: {
      type: Number,
      default: 5,
    },
    colorfam: String,
  },
  methods: {
    onecolor,
    desaturate(row, col) {
      const diff = (col * this.increment) + (row * this.offset);

      return this.color?.lightness(1 - (0.2 + (diff * 0.5))).saturation(0.5 + (diff * 0.5)).hex();
    }
  },
  computed: {
    color() {
      return onecolor(this.colorfam);
    }
  },
};
</script>

<style>
.box {
  height: 5px;
  width: 5px;
  margin: 0;
  padding: 0;
}

.box-row {
  position: relative;
  padding: 0;
  margin: 0;
  height: 5px;
}
</style>
