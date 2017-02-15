'use strict';

window.synchronizeFields = function (firstForm, secondForm, firstArray, secondArray, property) {
  secondForm[property] = secondArray[firstForm.selectedIndex];
};
