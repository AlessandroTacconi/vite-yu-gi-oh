<script>
export default {
  name: 'AppMainTop',
};
</script>

<template>
  <div class="select container">
    <select>
      <option value="0">Alien</option>
      <option value="1">Prova1</option>
      <option value="2">Prova2</option>
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
