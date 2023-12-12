<script>
import { store } from '../store';
export default {
  name: 'ContatoreCarte',
  data() {
    return {
      store,
    };
  },

  components: {},
  props: ['num'],
};
</script>

<template>
  <div class="card-counter">Found {{ store.cards.length }} cards</div>
</template>
