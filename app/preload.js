// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    let ads = document.querySelector('.c-ads');
    if (ads) {
        ads.style.display = 'none';
    }
});
