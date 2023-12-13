import { reactive } from 'vue';

export const store = reactive({
  cards: [],
  apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',
  archetipi: [],
  apiURL2: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  trovaArch: '',
});
