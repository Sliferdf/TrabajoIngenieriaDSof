import firebase from 'firebase';

export default {
    name: 'login',
    data: function () {
        return {};
    },
    methods: {
        Buscar() {
            let firebaseAppDefined = false

            setInterval(() => {

                if (!firebaseAppDefined) {
                    if (firebase.app()) {
                        // Tu código aquí
                        var condicion = document.getElementById('login').value;
                        var db = firebase.firestore();
                        var tabla = document.getElementById('tabla');

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
                                console.log("Error getting document:", error);
                            });
                        firebaseAppDefined = true
                    }
                }
            }, 100)
        },
    }
};
