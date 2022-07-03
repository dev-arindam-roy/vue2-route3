<template>
  <div class="test1">
    <h1>Test #1 <br/> Must Check Console for route guard</h1>
    <button type="button" v-on:click="goback">Back1</button> || 
    <button type="button" v-on:click="goToTest2">Test #2</button> || 
    <button type="button" v-on:click="goToTest3">Test #3</button> || 
    <button type="button" v-on:click="goToTest4">Test #4</button> || 
    <router-link :to="{ name: 'prop1', params: { id: 120, name: 'Arindam & Santanu'} }">Route Prop #1</router-link> || 
    <router-link :to="{ name: 'routecode' }">Route Coding</router-link>
    <hr/>
    <img src="../assets/images/img1.png">
    <hr/>
    <img src="../assets/images/img2.png">
    <hr/>
    <img src="../assets/images/img3.png">
    <hr/>
    <img src="../assets/images/img4.png">
    <hr/>
    <img src="../assets/images/img5.png">
    <hr/>
    <img src="../assets/images/img6.png">
    <hr/>
    <img src="../assets/images/img7.png">
    <hr/>
    <img src="../assets/images/img8.png">
    <hr/>
    <img src="../assets/images/img9.png">
    <hr/>
    <img src="../assets/images/img10.png">
    <hr/>
    <img src="../assets/images/img11.png">
    <hr/>
    <img src="../assets/images/img12.png">
  </div>
</template>


<script>
export default {
  name: "Test1View",
  data() {
    return {

    }
  },
  methods: {
    goback() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    goToTest2() {
      this.$router.push({ name: 'test2', params: { 'id' : 12, 'slug' : 'page-slug' } })
    },
    goToTest3() {
      this.$router.push({ name: 'test3', params: { 'id' : 100 }, query: { isTest : 'yes', allok : 'yes-ok', 'ok' : 'yex'} })
    },
    goToTest4() {
      this.$router.push({ name: 'test4', params: { slug : 'page-slug', id : 123, xyz : 'abc'}, query: { isok : 'yex', myname : 'Arindam', vueVersion : 2} })
    }
  }
}
</script>
