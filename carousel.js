import { reviews } from './reviews.js';

/**
 * Carousel class for review list and review access methods
 */
class Carousel {
    /**
     * Carousel initializer
     * @param {array} reviewList
     * reviewList - stores the list of reviews
     * iter - list iterator
     */
    constructor(reviewList) {
        this.reviewList = reviewList;
        this.iter = 0;
    }

    /**
     * Returns current review (at iter)
     * @returns current Review
     */
    getReview() {
        return this.reviewList[this.iter];
    }
    
    /**
     * Moves iterator to next review
     * Moves to start of list if iterator is at the end
     */
    nextReview() {
        this.iter === (this.reviewList.length - 1) ? this.iter = 0 : this.iter++;
    }

    /**
     * Moves iterator to previous review
     * Moves to end of list if iterator is at the start
     */
    prevReview() {
        this.iter === 0 ? this.iter = (this.reviewList.length - 1) : this.iter--;
    }

    /**
     * Moves iterator to random review
     * Does not reassign the same number
     */
    randomReview() {
        let num = Math.floor(Math.random() * this.reviewList.length);
        num === this.iter ? this.randomReview() : this.iter = num;
    }
}

// buttons
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('random-btn');

// create carousel object
const carousel = new Carousel(reviews);

/**
 * Displays current review in HTML content
 * @param {review} review object 
 */
function showReview(review) {
    document.getElementById('review-img').src = review.image;
    document.getElementById('review-name').innerHTML = review.name;
    document.getElementById('review-title').innerHTML= review.title;
    document.getElementById('review-desc').innerHTML = review.description;
}

/**
 * Gets next review and displays it
 */
nextBtn.addEventListener('click', function() {
    carousel.nextReview();
    showReview(carousel.getReview());
});

/**
 * Gets previous review and displays it
 */
prevBtn.addEventListener('click', function() {
    carousel.prevReview();
    showReview(carousel.getReview());
});

/**
 * Gets random review and displays it
 */
randomBtn.addEventListener('click', function() {
    carousel.randomReview();
    showReview(carousel.getReview());
})



showReview(carousel.getReview());