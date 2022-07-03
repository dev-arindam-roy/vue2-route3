<template>
  <div class="test3">
    <h1>Test #3</h1>
    <div class="box">
        <div class="box1">
            <router-link :to="{ name: 'test3users'}">USERS</router-link><br/>
            <router-link :to="{ name: 'test3tasks', params: {taskid : 504}, query: {isSuccess : 'yes'}}">USERS - TASK</router-link><br/>
            <router-link :to="{ name: 'test3profile', params: {userid: 303} }">USERS - PROFILE</router-link><br/>
        </div>
        <div class="box2">
            <router-view></router-view>
        </div>
        <div style="clear: both;"></div>
    </div>
  </div>
</template>

<style scoped>
.box {
    width: 600px;
    margin: 10px auto;
}
.box1 {
    width: 45%;
    float: left;
}
.box2 {
    width: 45%;
    float: right;
}
</style>

