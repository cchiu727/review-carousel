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
        
        // if (this.i === (this.reviewList.length - 1))
        //     this.i = 0;
        // else
        //     this.i++;
        return this.getReview();
    }

    prevItem() {
        this.i === 0 ? this.i = (this.reviewList.length - 1) : this.i--;
        
        // if (this.i === 0)
        //     this.i = (this.reviewList.length - 1);
        // else
        //     this.i--;

        return this.getReview();
    }
}

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', function() {
    console.log('clicked next');
});

prevBtn.addEventListener('click', function() {
    console.log('clicked prev');
});