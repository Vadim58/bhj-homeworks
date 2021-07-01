let highLevelCheckBox = Array.from(document.querySelectorAll('div > ul > .interest > label > .interest__check'));
let highList = document.querySelectorAll('div > ul > .interest');
let listOfFood = highList[0].querySelector('ul');
let foodListItem = Array.from(listOfFood.querySelectorAll('li label .interest__check'));
let listOfPets = highList[1].querySelector('ul');
let petsListItem = Array.from(listOfPets.querySelectorAll('li label .interest__check'));



highLevelCheckBox[0].addEventListener('change', function() {
    for (let k = 0; k < foodListItem.length; k++) {
        if ((foodListItem[k].checked === false || foodListItem[k].checked === true) && highLevelCheckBox[0].checked === true) {
            foodListItem[k].checked = true;
        } else {
            foodListItem[k].checked = false;
        }
    }

})

highLevelCheckBox[1].addEventListener('change', function() {
    for (let i = 0; i < petsListItem.length; i++) {
        if ((petsListItem[i].checked === false || petsListItem[i].checked === true) && highLevelCheckBox[1].checked === true) {
            petsListItem[i].checked = true;
        } else {
            petsListItem[i].checked = false;
        }
    }

})