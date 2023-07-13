import { reviews } from './reviews.js';

class Carousel {
    constructor(reviewList) {
        this.reviewList = reviewList;
        this.i = 0;
    }

    getReview() {
        return this.reviewList[this.i];
    }
    
    nextItem() {
        this.i === (this.reviewList.length - 1) ? this.i = 0 : this.i++;
    }

    prevItem() {
        this.i === 0 ? this.i = (this.reviewList.length - 1) : this.i--;
    }
}

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const carousel = new Carousel(reviews);

function showReview(review) {
    document.getElementById('review-name').innerHTML = review.name;
    document.getElementById('review-title').innerHTMl= review.title;
    document.getElementById('review-desc').innerHTML = review.desc;
}

nextBtn.addEventListener('click', function() {
    carousel.nextItem();
    showReview(carousel.getReview());
});

prevBtn.addEventListener('click', function() {
    carousel.prevItem();
    showReview(carousel.getReview());
});