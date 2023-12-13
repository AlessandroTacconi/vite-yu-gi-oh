<script>
import ListaCarte from './ListaCarte.vue';
import { store } from '../store';
import ContatoreCarte from './ContatoreCarte.vue';

export default {
  name: 'AppMainBottom',
  components: {
    ListaCarte,
    ContatoreCarte,
  },

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="white container">
    <div>
      <ContatoreCarte />
      <div class="card-list">
        <ListaCarte
          v-for="card in store.cards"
          :img="card.card_images[0].image_url"
          :name="card.name"
          :archetype="card.archetype"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;
.white {
  background-color: white;
  padding: 50px;
  padding-bottom: 0;

  :deep(.card-counter) {
    background-color: black;
    padding: 20px;
    color: white;
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
