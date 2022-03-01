<template>
    <div class="container">
        <div class="row mt-5">
            <h1>
                Form Contact
            </h1>
        </div>
        <form action="" class="mt-5 row">
            <div class="col-12 mb-3">
                <input v-model="input.name" type="text" class="form-control" id="name" placeholder="name">
            </div>
            <div class="col-12 mb-3">
                <input v-model="input.email" type="text" class="form-control" id="email" placeholder="email@mail.com">
            </div>
            <div class="col-12 mb-3">
                <textarea v-model="input.text" class="form-control" id="description" rows="4" placeholder="message ...."></textarea>
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-primary" @click="addValue()">
                    Submit
                </button>
            </div>
        </form>
        <hr>
        <div v-for="contact in contacts" :key="contact.name">
          <div class="card mb-3 shadow mb-5 bg-body rounded" style="max-width: 700px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../assets/akun.png" class="rounded-circle mt-3" alt="">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ contact.name }}</h5>
                  <p class="card-text">{{ contact.text }}</p>
                  <p class="card-text"><small class="text-muted">{{ contact.email }}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Form',
  data() {
    return {
      input: {
        name: '',
        email: '',
        text: '',
      },
      contacts: [],
    };
  },
  methods: {
    addValue() {
      this.contacts.push(this.input);
      this.input = {
        nama: '',
        email: '',
        text: '',
      };
    },
  },
};
</script>
<style scoped>
img {
  height: 100px;
}
</style>
