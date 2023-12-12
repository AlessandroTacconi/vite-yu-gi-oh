<script>
import AppMainTop from './AppMainTop.vue';
import AppMainBottom from './AppMainBottom.vue';

export default {
  name: 'AppMain',
  components: {
    AppMainTop,
    AppMainBottom,
  },
};
</script>

<template>
  <main>
    <AppMainTop />
    <AppMainBottom />
  </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

main {
  background-color: $bg-color;
}
</style>
