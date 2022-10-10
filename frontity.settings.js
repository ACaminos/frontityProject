const settings = {
  "name": "tvp",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    // Para poder dar de alta un nuevo tema, se elimina esta linea que es la que contiene el predeterminado.
    // {
    //   "name": "@frontity/mars-theme",
    //   "state": {
    //     "theme": {
    //       "menu": [
    //         [
    //           "Home",
    //           "/"
    //         ],
    //         [
    //           "Nature",
    //           "/category/nature/"
    //         ],
    //         [
    //           "Travel",
    //           "/category/travel/"
    //         ],
    //         [
    //           "Japan",
    //           "/tag/japan/"
    //         ],
    //         [
    //           "About Us",
    //           "/about-us/"
    //         ]
    //       ],
    //       "featured": {
    //         "showOnList": false,
    //         "showOnPost": false
    //       }
    //     }
    //   }
    // },


    // Se agrega esta linea que contiene el nuevo theme
    {
      name : "my-first-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "http://tvpabe.tvpublica.com.ar/"
          url: "https://test.frontity.org",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
