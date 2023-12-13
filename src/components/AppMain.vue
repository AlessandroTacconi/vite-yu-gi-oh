<script>
import axios from 'axios';
import { store } from '../store';

import AppMainTop from './AppMainTop.vue';
import AppMainBottom from './AppMainBottom.vue';

export default {
  name: 'AppMain',
  data() {
    return {
      store,
    };
  },
  components: {
    AppMainTop,
    AppMainBottom,
  },
  methods: {
    trovaCarte() {
      console.log(this.store.trovaArch);

      axios
        .get(this.store.apiURL + '?archetype=' + this.store.trovaArch)
        .then((response) => {
          this.store.cards = response.data.data;
        });
    },
  },
  created() {
    this.trovaCarte();

    axios.get(this.store.apiURL2).then((response) => {
      this.store.archetipi = response.data;
    });
  },
};
</script>

<template>
  <main>
    <AppMainTop @trovaArchet="trovaCarte" />
    <AppMainBottom />
  </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

main {
  background-color: $bg-color;
}
</style>
