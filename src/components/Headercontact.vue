<template>
    <div class="jumbotron">
        <Navbar/>
        <div class="container mt-md-5">
            <div class="row">
                <div class="col-md-5">
                    <h1 class="mt-4 text-start">
                        Contact Us
                    </h1>
                    <p class="text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi repellendus nisi illo accusantium dolores accusamus eum modi!</p>
                </div>
                <div class="col-md-5">
                    <img src="../assets/contact.svg" alt="">
                </div>
            </div>
        </div>
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
.jumbotron {
    background-color: #94a4a5;
    height: 75vh;
}
img {
    max-width: 475px;
}
h1 {
    font-weight: bold;
}
</style>
