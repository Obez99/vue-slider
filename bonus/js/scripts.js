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
    intervalCheck: true,
  },

  methods: {
    //Function that updates counter to next image
    nextImage: function () {
      //Stops interval
      this.stopImage(this.intervalCheck)

      this.currentImage++;

      if (this.currentImage > this.elementsList.length - 1)
        this.currentImage = 0;

      //Starts interval if mouse is not over image
      if (this.intervalCheck === true)
        this.startImage()
    },

    //Function that updates counter to previous image
    prevImage: function () {
      //Stops interval
      this.stopImage(this.intervalCheck)

      this.currentImage--

      if (this.currentImage < 0)
        this.currentImage = 4;

      if (this.intervalCheck === true)
        this.startImage()
    },

    //Removes interval
    stopImage: function (bool) {
      clearInterval(autoSlide);
      this.intervalCheck = bool;
    },

    //Adds interval
    startImage: function () {
      autoSlide = setInterval(this.nextImage, 3000);
    }

  },

  mounted() {

    //Makes slider update every 3 seconds when Vue is mounted
    autoSlide = setInterval(this.nextImage, 3000),

      //When arrow up or down are pressed:
      //Resets interval and updates image
      window.addEventListener("keydown", function (e) {

        //Checks input and updates image
        if (e.key === "ArrowDown")
          app.nextImage()


        if (e.key === "ArrowUp")
          app.prevImage()

      })
  },

})