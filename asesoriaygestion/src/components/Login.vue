<template>
<div class="wrapper fadeInDown">
    <div id="nav">
      <router-link to="/home">Principal</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/buscar">Buscar mi trámite</router-link>
    </div>
    <router-view/>
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="fadeIn first">
      <img src="https://www.trysens.com/app/img/login.svg" id="icon" alt="User Icon" />
    </div>

    <!-- Login Form -->
    <form>
      <input type="email" id="login" class="fadeIn second" name="login" placeholder="login" v-model="email">
      <input type="password" id="password" class="fadeIn third" name="login" placeholder="password" v-model="password">
      <input type="submit" class="fadeIn fourth" value="Log In" @click="login" >
    </form>

  </div>
</div>
</template>

<script>

import firebase from 'firebase';

export default {
    name: 'login',
    data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`El usuario se encuentra registrado`);
            this.$router.push('ingreso');
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};

</script>

<style src="../css/style.css"></style>
