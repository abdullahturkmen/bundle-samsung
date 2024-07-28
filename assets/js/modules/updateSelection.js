import { tweetList } from "./tweetModule.js";
export function updateSelection(selectedRadio) {
    const options = document.getElementsByName('options');
    options.forEach(option => {
        const label = document.querySelector(`label[for=${option.id}]`);
        label.classList.remove('font-bold');
        label.classList.remove('active');
    });

    const selectedLabel = document.querySelector(`label[for=${selectedRadio.id}]`);
    selectedLabel.classList.add('font-bold');
    selectedLabel.classList.add('active');

    if (selectedRadio.value == "all") {
        tweetList(false);
    }
    else {
        tweetList(true);
    }
}
