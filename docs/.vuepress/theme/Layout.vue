<template>
  <div class="theme-contaner">
    <h1>vue</h1>
    <Button>I am Button</Button>
  </div>
</template>
<script>
import Button from '../components/Button';

export default {
  components: {
    Button,
  }
}
    
</script>
<style scoped>
.theme-contaner {
  background-color: #46bd87;
}
</style>
