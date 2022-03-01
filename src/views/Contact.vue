<template>
  <div>
    <Headercontact/>
    <Form/>
  </div>
</template>
<script>
// @ is an alias to /src
import Headercontact from '../components/Headercontact.vue';
import Form from '../components/Form.vue';

export default {
  name: 'Contact',
  components: {
    Headercontact,
    Form,
  },
};
</script>
<style scoped>
.bg {
  background-color: #94a4a5;
}
</style>
