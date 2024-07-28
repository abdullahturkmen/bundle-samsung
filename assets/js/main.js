import { tweetList } from './modules/tweetModule.js';
import { trackScroll } from './modules/scrollModule.js';
import { highlightMiddleItems } from './modules/highlightModule.js'
import { updateSelection } from './modules/updateSelection.js';
import { initializeModals } from './modules/modalModule.js'

tweetList(false);

const handleScroll = (scrollTop) => {
    if (scrollTop > 1) {
        document.getElementById('navbar-logo').style.height = "80px"
        document.getElementById('navbar-description').style.display = "none"
    }
    else {
        document.getElementById('navbar-logo').style.height = "160px"
        document.getElementById('navbar-description').style.display = "block"
    }
}

trackScroll(handleScroll);

window.addEventListener('scroll', highlightMiddleItems);


document.addEventListener('DOMContentLoaded', function () {
    initializeModals();
    highlightMiddleItems()
    const options = document.getElementsByName('options');
    options.forEach(option => {
        option.addEventListener('click', function () {
            updateSelection(this);
            highlightMiddleItems()
        });
    });
});

