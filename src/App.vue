/* eslint-disable */
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <input type="number" v-model="money">
  <button  @click="updateMoney">firebase test</button>
  <p>Money: {{ money }}</p>
  
</template>

<script>
import {db} from './firebase/index.js'

export default {
  name: 'App',
  components: {
    
    // FucktheWorld5
  },
  data() {
    return {
      money: Number,
    };
  },
  methods: {
    //git add .
    //git commit -m 'test'
    //git push origin main
    
    updateMoney() {
      db.collection("firstCollection").doc().set({money:this.money})
   
      // 이 메소드는 입력 값이 변경될 때마다 실행됩니다.
      // 여기서는 데이터를 직접 업데이트하지 않고 사용자가 버튼을 클릭할 때 업데이트하게 할 거에요.
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>