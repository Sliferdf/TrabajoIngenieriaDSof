<template>

<div class="wrapper fadeInDown">
    <div id="nav">
      <router-link to="/">Principal</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/buscar">Buscar mi trámite</router-link>
    </div>
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Login Form -->
    <form>
      <input type="numeric" id="login" class="fadeIn second" name="login" placeholder="Número de consecutivo">
      <input type="submit" class="fadeIn fourth" value="Buscar">
    </form>
  </div>
</div>
</template>

<script>

import firebase from 'firebase';
export default {
    name: 'login',
    data: function() {
    return {};
     }
};
</script>

<style src="../css/stylesBuscar.css"></style>
