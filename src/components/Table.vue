<template>
    <div class="container mt-5">
        <h1 class="mb-5 tittle">
            Portos
        </h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" style="height: 400px" v-for="porto in Portos" :key="porto.id">
                <router-link class="nav-link" :to="{ name: 'Detail',params: {id: porto.id}}">
                  <div class="card shadow p-3 mb-5 bg-body rounded">
                    <img src="../assets/card.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                            <h5 class="card-title text-muted">{{ porto.name }}</h5>
                    </div>
                  </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapGetters(['Portos']),
  },
};
</script>
<style scoped>
.tittle {
  font-weight: bold;
}
h5 {
  font-weight: bold;
}
</style>
