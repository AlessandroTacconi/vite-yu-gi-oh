<script>
import { store } from '../store';
export default {
  name: 'AppMainTop',
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="select container">
    <label for="scegli-archetipo"></label>
    <select
      id="scegli-archetipo"
      v-model="store.trovaArch"
      @change="$emit('trovaArchet')"
    >
      <option value="">cerca</option>
      <option
        selected
        :value="archetip.archetype_name"
        v-for="archetip in store.archetipi"
      >
        {{ archetip.archetype_name }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

select {
  margin: 25px 5px;
  padding: 15px;
  width: 160px;
  border-radius: 8px;
  border-color: transparent;
  border-right: 10px solid transparent;
}
</style>
