<template>
  <button @click.prevent="onClick" class="btn"><slot /></button>
</template>

<script>
module.exports = {
  methods: {
    onClick() {
      alert('Hello World!')
    },
  },
}
</script>

<style>
.btn {
  background-color: #1976D2;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  transition: opacity .1s linear;
}
.btn:hover {
  opacity: .8;
}
</style>