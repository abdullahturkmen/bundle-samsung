export const trackScroll = (callback) => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        callback(scrollTop);
    });
}
