<script>
import axios from 'axios';
import ListaCarte from './ListaCarte.vue';

export default {
  name: 'AppMainBottom',
  components: {
    ListaCarte,
  },

  data() {
    return {
      cards: [],
      apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    };
  },
  created() {
    axios.get(this.apiURL).then((response) => {
      this.cards = response.data.data;
    });
  },
};
</script>

<template>
  <div class="white container">
    <div class="">
      <div class="card-counter">Found 39 cards</div>
      <div class="card-list">
        <ListaCarte
          v-for="card in cards"
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

  .card-counter {
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
