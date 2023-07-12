import { reviews } from 'highlight.js';

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let i = 0;

nextBtn.addEventListener('click', function() {
    i++;
    document.getElementById('review-name').innerHTML = reviews[i]['name'];
});

prevBtn.addEventListener('click', function() {
    i--;
    document.getElementById('review-name').innerHTML = reviews[i]['name'];
});