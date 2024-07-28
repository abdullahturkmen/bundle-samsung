import { tweetList } from "./tweetModule.js";
export function updateSelection(selectedRadio) {
    const options = document.getElementsByName('options');
    options.forEach(option => {
        const label = document.querySelector(`label[for=${option.id}]`);
        label.classList.remove('font-bold');
    });

    const selectedLabel = document.querySelector(`label[for=${selectedRadio.id}]`);
    selectedLabel.classList.add('font-bold');

    if (selectedRadio.value == "all") {
        tweetList(false);
    }
    else {
        tweetList(true);
    }
}
