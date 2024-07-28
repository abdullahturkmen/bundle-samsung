import { tweetList } from './modules/tweetModule.js';
import { trackScroll } from './modules/scrollModule.js';
import { highlightMiddleItems } from './modules/highlightModule.js'

tweetList();



const handleScroll = (scrollTop) => {
    if (scrollTop > 1) {
        document.getElementById('navbar-logo').style.height = "80px"
    }
    else {
        document.getElementById('navbar-logo').style.height = "160px"
    }
}

trackScroll(handleScroll);


window.addEventListener('scroll', highlightMiddleItems);

document.addEventListener('DOMContentLoaded', highlightMiddleItems);