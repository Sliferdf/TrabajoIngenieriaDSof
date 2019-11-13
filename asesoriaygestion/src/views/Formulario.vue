<<template>
    <div>
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
<router-link to="/Buscar">
  <button type="button" class="btn btn-dark">Buscar otro trámite</button>
</router-link> 
</div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data: function() {
    return {};
  },
  methods: {
    Buscar() {
      let firebaseAppDefined = false;

      setInterval(() => {
        if (!firebaseAppDefined) {
          if (firebase.app()) {
            // Tu código aquí
            var condicion = document.getElementById("login").value;
            var db = firebase.firestore();
            var tabla = document.getElementById("tabla");

            var consulta = db.collection("Tramites").doc(condicion);

            consulta
              .get()
              .then(function(doc) {
                if (doc.exists) {
                  console.log("Document data:", doc.data());
                  tabla.innerHTML = " ";
                  tabla.innerHTML += `
                  <tr>
                  <th scope="row">${doc.data().consecutivo}</th>
                  <th>${doc.data().NombreEmpresa}</th>
                  <th>${doc.data().nit}</th>
                  <th>${doc.data().tipoTramite}</th>
                  <th>${doc.data().estado}</th>
                  <th>${doc.data().anotaciones}</th>
                  <th>${doc.data().recoger}</th>
                </tr>
                  `;
                } else {
                  // doc.data() will be undefined in this case
                  alert(
                    "NO HAY UN TRÁMITE CON ESTE NÚMERO DE CONSECUTIVO, POR FAVOR VERIFICA EL NÚMERO O COMUNÍCATE CON LA EMPRESA PARA CONFIRMAR EL NÚMERO."
                  );
                }
              })
              .catch(function(error) {
                console.log("Error getting document:", error);
              });
            firebaseAppDefined = true;
          }
        }
      }, 100);
    }
  }
};
</script>