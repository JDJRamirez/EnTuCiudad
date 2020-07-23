//asignar un nombre y versión al cache
const CACHE_NAME = 'v3_cache_ETC_JDJ',
  urlsToCache = [
    // './',
    // "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    // "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
    "https://fonts.googleapis.com/css2?family=Jaldi&display=swap",
    // "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
     './environments/style.css',
    //  './assets/font-awesome/',
     './assets/lib/w3css/w3.css',
     './script.js',
    // './index.html',
    './assets/img/campana.png',
    './apps/view/main/index.html',
    './apps/view/main/main.css',
    './apps/view/main/main.js',
    './apps/view/home/index.html',
    './apps/view/home/home.css',
    './apps/view/home/home.js',
    './apps/view/youtube/index.html',
    './apps/view/youtube/youtube.css',
    './apps/view/youtube/youtube.js',
    './apps/view/menu/index.html',
    './apps/view/menu/menu.css',
    './apps/view/menu/menu.js'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e =>
{
  const cacheWhitelist = [CACHE_NAME]
  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e =>
{
  // caches.open(CACHE_NAME)
  // .then(cache =>
  // {
  //   console.log(e);
    // return
    // cache.addAll(urlsToCache)
    // .then(() => self.skipWaiting())
  // })
  // .catch(err => console.log('Falló registro de cache', err))
  // console.log(e);
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res =>
      {
        // console.log(res);
        if (res)
        {
          // console.log(res);
          //recuperar del cache

          // console.log("recuperar del cache");
          return res
        }
        //recuperar de la petición a la url
        // console.log("recuperar de la url");
        return fetch(e.request)
      })
  )
})

// updateCache = ()=>
// {
//   return new Promise((resolve,reject)=>{
//     e.waitUntil(
//       caches.open(CACHE_NAME)
//         .then(cache => {
//           cache.addAll(urlsToCache).then(() => self.skipWaiting())
//           resolve(1);
//         })
//         .catch(err => {
//           console.log('Falló registro nuevo de cache', err);
//           reject(0);
//         })
//     )
//   });
// }
