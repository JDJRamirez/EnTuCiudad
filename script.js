if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("../../../sw.js")
    .then(reg => 
        {
            console.log("Registro WS exitoso");
            // alert("OK");
        }
    )
    .catch(err =>
        {
            console.log("Error al registrar",err);
            // alert("NO");
        }
    );
}
