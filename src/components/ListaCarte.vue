<script>
import { store } from '../store';
export default {
  name: 'ListaCarte',
  data() {
    return {
      store,
    };
  },

  components: {},
  props: ['img', 'name', 'archetype'],
};
</script>

<template>
  <ul>
    <li>
      <div><img :src="img" alt="" /></div>
      <div class="card">
        <h4>{{ name }}</h4>
        <div>{{ archetype }}</div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;
ul {
  width: calc((100% - 120px) / 5);
  list-style: none;
  li {
    img {
      max-width: 100%;
      display: block;
    }

    h4 {
      color: white;
      text-transform: uppercase;
      margin-bottom: 15px;
    }
  }
}

.card {
  background-color: $bg-color;
  padding: 20px 10px;
  text-align: center;
  height: 140px;
}
</style>
