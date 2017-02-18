'use strict';

(function () {
  window.synchronizeFields = function (firstForm, secondForm, firstArray, secondArray, property) {
    firstForm.addEventListener('change', function () {
      secondForm[property] = secondArray[firstArray.indexOf(firstForm.value)];
    });
  };
})();
