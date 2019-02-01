class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftBtn = this.carousel.querySelector('.left-button');
    this.rightBtn = this.carousel.querySelector('.right-button');

    this.leftBtn.addEventListener('click', () => this.move(false));
    this.rightBtn.addEventListener('click', () => this.move(true));

    this.images = this.carousel.querySelectorAll('img');
  }

  move(right) {
    const current = this.carousel.querySelector('.active');
    this.data = current.dataset.img;
    const num = right ? 1 : -1;
    const nextImg = this.carousel.querySelector(`.img[data-img="${Number(this.data) + num}"]`);
    if (nextImg) {
      if (right) {
        current.classList.replace('active', 'right');
      } else {
        current.classList.replace('active', 'left');
      }
      nextImg.classList.remove('left', 'right');
      nextImg.classList.add('active');
    }
  }
}

const carousel = document.querySelector('.carousel');

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
