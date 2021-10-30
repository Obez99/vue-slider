Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    elementsList: [
      {
        image: "img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
      },

      {
        image: "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum."
      },

      {
        image: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      },

      {
        image: "img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
      },

      {
        image: "img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
      }
    ],

    currentImage: 0,
    autoSlide: "",
  },

  methods: {
    nextImage: function () {
      this.currentImage++;

      if (this.currentImage > this.elementsList.length - 1)
        this.currentImage = 0;
    },

    prevImage: function () {
      this.currentImage--

      if (this.currentImage < 0)
        this.currentImage = 4;
    },

    stopImage: function () {
      clearInterval(autoSlide);
    },

    startImage: function () {
      autoSlide = setInterval(this.nextImage, 3000)
    }

  },

  mounted() {
    autoSlide = setInterval(this.nextImage, 3000),

      window.addEventListener("keydown", function (e) {

        app.stopImage()

        if (e.key === "ArrowDown")
          app.nextImage()


        if (e.key === "ArrowUp")
          app.prevImage()

        app.startImage()
      })
  },

})