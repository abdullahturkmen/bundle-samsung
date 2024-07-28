import { tweetList } from './modules/tweetModule.js';
import { trackScroll } from './modules/scrollModule.js';
import { highlightMiddleItems } from './modules/highlightModule.js'
import { updateSelection } from './modules/updateSelectionModule.js';
import { initializeModals } from './modules/modalModule.js'
import { toggleShareMenu, shareOnFacebook, shareOnTwitter, shareOnLinkedIn } from './modules/shareModule.js';

tweetList(false);

window.addEventListener('scroll', highlightMiddleItems);


document.addEventListener('DOMContentLoaded', function () {
    trackScroll();
    initializeModals();
    highlightMiddleItems()

    const options = document.getElementsByName('options');
    options.forEach(option => {
        option.addEventListener('click', function () {
            updateSelection(this);
            highlightMiddleItems()
        });
    });

    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', toggleShareMenu);
    }

    const facebookShare = document.getElementById('facebookShare');
    if (facebookShare) {
        facebookShare.addEventListener('click', shareOnFacebook);
    }

    const twitterShare = document.getElementById('twitterShare');
    if (twitterShare) {
        twitterShare.addEventListener('click', shareOnTwitter);
    }

    const linkedinShare = document.getElementById('linkedinShare');
    if (linkedinShare) {
        linkedinShare.addEventListener('click', shareOnLinkedIn);
    }

});

