<template>
    <div class="jumbotron">
        <Navbar/>
        <h1 class="mt-4">
          My portofolio
        </h1>
    </div>
</template>
<script>
// @ is an alias to /src
import Navbar from './Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>
<style scoped>
@font-face {
    font-family: 'You';
    src: url('../assets/font/You and Me.ttf');
}
.jumbotron {
    background-image: url('../assets/jumbotron.png');
    background-size: cover;
    height: 85vh;
}
h1 {
  font-family: 'You';
  font-size: 100pt;
  color: black;
}
</style>
