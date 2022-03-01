<template>
    <!-- <div class="container mt-5">
      <div v-if="detail !== undefined">
        <div class="border card">
          <img src="../assets/card.jpg" class="" alt="">
          <div class="border">
            <h5 class="card-title">{{ detail.name }}</h5>
            <p class="card-text">{{ detail.description }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <h1>detail not found</h1>
      </div>
    </div> -->
    <div>
      <Navbar class="bg"/>
      <div class="container">
        <h1 class="mt-5">
          Detail Porto
        </h1>
        <div class="card mb-3 mt-5 shadow p-3 mb-5 bg-body rounded" style="max-width: 1000px;" v-if="detail !== undefined">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../assets/card.jpg" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ detail.name }}</h5>
                <p class="card-text">{{ detail.description }}</p>
                <p class="card-text"><small class="text-muted">{{ detail.jenis }}</small></p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h1>detail not found</h1>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  name: 'Detail',
  computed: {
    ...mapGetters(['Portos']),
    detail() {
      return this.Portos.find((porto) => porto.id === this.$route.params.id);
    },
  },
};
</script>
<style scoped>
.bg {
  background-color: #94a4a5;
}
h1 {
  font-weight: bold;
}
</style>
