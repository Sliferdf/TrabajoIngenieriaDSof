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
    <form @submit.prevent="Buscar">
      <input type="numeric" id="login" class="fadeIn second" name="login" placeholder="Número de consecutivo">
      <input type="submit" class="fadeIn fourth" value="Buscar">
    </form>
  </div>
  <table class="table">
    <thead>
        <tr>
        <th scope="col">Consecutivo</th>
        <th scope="col">Nombre Empresa</th>
        <th scope="col">Nit</th>
        <th scope="col">Tipo de trámite</th>
        <th scope="col">Estado</th>
        <th scope="col">Anotaciones</th>
        <th scope="col">Recoger Documentos</th>
      </tr>
    </thead>
    <tbody id="tabla">
         <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>

import firebase from 'firebase';



export default {
    name: 'login',
    data: function() {
    return {};
     },
     methods: {
       Buscar(){
let firebaseAppDefined = false

 setInterval (() => {
   if ( ! firebaseAppDefined) {
     if ( firebase . app ()) {
       // Tu código aquí
        var db = firebase.firestore();
        var tabla=document.getElementById('tabla');

        db.collection("Tramites").where("consecutivo", "==", 123456).get().then((querySnapshot) => {
        tabla.innerHTML = ' ';
        querySnapshot.forEach((doc) => {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.data().consecutivo}</th>
        <th>${doc.data().NombreEmpresa}</th>
        <th>${doc.data().nit}</th>
        <th>${doc.data().tipoTrámite}</th>
        <th>${doc.data().estado}</th>
        <th>${doc.data().anotaciones}</th>
        <th>${doc.data().recoger}</th>
      </tr>
        `
    });
});
       firebaseAppDefined = true
     }
   }
 }, 100 ) 
     },
} };

</script>

<style src="../css/stylesBuscar.css"></style>
