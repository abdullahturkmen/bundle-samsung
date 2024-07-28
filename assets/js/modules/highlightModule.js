export function highlightMiddleItems() {
    const itemList = document.getElementById('tweet-list');
    const items = itemList.getElementsByTagName('li');
    const viewportHeight = window.innerHeight;

    const middle = viewportHeight / 2;

    for (let item of items) {
        const rect = item.getBoundingClientRect();
        const itemMiddle = rect.top + rect.height / 2;

        if (itemMiddle + 5 >= middle - rect.height / 2 && itemMiddle - 5 <= middle + rect.height / 2) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }
}
