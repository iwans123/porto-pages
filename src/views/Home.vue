<template>
  <div>
    <Header/>
    <Tableporto/>
  </div>
</template>

<script>
// @ is an alias to /src
import Tableporto from '../components/Table.vue';
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    Tableporto,
    Header,
  },
};
</script>
