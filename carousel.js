import { reviews } from './reviews.js';

class Carousel {
    constructor(reviewList) {
        this.reviewList = reviewList;
        this.i = 0;
    }

    getReview() {
        return this.reviewList[this.i];
    }
    
    nextReview() {
        this.i === (this.reviewList.length - 1) ? this.i = 0 : this.i++;
    }

    prevReview() {
        this.i === 0 ? this.i = (this.reviewList.length - 1) : this.i--;
    }

    randomReview() {
        let num = Math.floor(Math.random() * this.reviewList.length);
        num === this.i ? this.randomReview() : this.i = num;
    }
}

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('random-btn');

const carousel = new Carousel(reviews);

function showReview(review) {
    document.getElementById('review-img').src = review.image;
    document.getElementById('review-name').innerHTML = review.name;
    document.getElementById('review-title').innerHTML= review.title;
    document.getElementById('review-desc').innerHTML = review.description;
}

nextBtn.addEventListener('click', function() {
    carousel.nextReview();
    showReview(carousel.getReview());
});

prevBtn.addEventListener('click', function() {
    carousel.prevReview();
    showReview(carousel.getReview());
});

randomBtn.addEventListener('click', function() {
    carousel.randomReview();
    showReview(carousel.getReview());
})



showReview(carousel.getReview());