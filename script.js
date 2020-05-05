if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("./sw.js")
    .then(reg => console.log("Registro WS exitoso"))
    .catch(err => console.log("Error al registrar",err));
}
