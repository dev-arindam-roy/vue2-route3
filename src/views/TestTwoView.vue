<template>
  <div class="test2">
    <h1>Test #2</h1>
    <p>PARAMS OBJ: {{ $route.params }}</p>
    <p>PARAMS VALUE: {{ $route.params.id }}</p>
    <p>PARAMS VALUE: {{ $route.params.slug }}</p>
    <hr/>
    
  </div>
</template>


<script>
export default {
  name: "Test1View",
  data() {
    return {

    }
  },
  watch: {
    
  },
  methods: {
    goback() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>