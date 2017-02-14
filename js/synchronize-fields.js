'use strict';

window.synchronizeFields = function (firstForm, secondForm, firstArray, secondArray, property) {
    firstForm.addEventListener('change', function () {
          secondForm[property] = secondArray[firstForm.selectedIndex];
        });
    secondForm.addEventListener('change', function () {
            firstForm[property] = firstArray[secondForm.selectedIndex];
        });
          if (property == 'min') {
            secondForm.placeholder = secondArray[secondForm.selectedIndex];
          };
        };
