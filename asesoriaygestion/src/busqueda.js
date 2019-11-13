import firebase from 'firebase';

class Busqueda {

    Busqueda() {

    }

    buscar(condicion, tabla) {
        let firebaseAppDefined = false

        setInterval(() => {

            if (!firebaseAppDefined) {
                if (firebase.app()) {
                    // Tu código aquí
                    var db = firebase.firestore();

                    var consulta = db.collection("Tramites").doc(condicion);

                    consulta.get()
                        .then(function (doc) {

                            if (doc.exists) {
                                console.log("Document data:", doc.data());
                                tabla.innerHTML = ' ';
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
                                    `

                            } else {
                                // doc.data() will be undefined in this case
                                alert("NO HAY UN TRÁMITE CON ESTE NÚMERO DE CONSECUTIVO, POR FAVOR VERIFICA EL NÚMERO O COMUNÍCATE CON LA EMPRESA PARA CONFIRMAR EL NÚMERO.")
                            }
                        }).catch(function (error) {
                            console.log("Error al obtener el documento. ", error);
                        });
                    firebaseAppDefined = true
                }
            }
        }, 100)
    }
}
