'use strict';

window.initializePins = function (field, object, block, closeBlock) {

  var ENTER_KEY_CODE = 13;

  // делегирование области tokyoPinMap
  var delegatedChangeClass = function () {
    var target = event.target;
    while (target !== field) {
      if (target.classList.contains('pin')) {
        target.classList.add('pin--active');
        block.style.display = 'block';
        return;
      } else {
        target = target.parentNode;
      }
    }
  };

  // Обработчик события по клику
  var clickHandler = function () {
    deleteClassPinActive();
    delegatedChangeClass();
  };
  field.addEventListener('click', clickHandler, true);

  // Обработчик события по клавиатуре
  var keydownHandler = function (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      deleteClassPinActive ();
      delegatedChangeClass ();
    }
  };
  field.addEventListener('keydown', keydownHandler, true);

  // Скрытие диалогового окна и удаление класса у метки
  closeBlock.addEventListener('click', function () {
    block.style.display = 'none';
    deleteClassPinActive();
  });

  // функция удаления активного класса у обьектов с классом pin
  var deleteClassPinActive = function () {
    for (var j = 0; j < object.length; j++) {
      object[j].classList.remove('pin--active');
      object[j].setAttribute('aria-pressed', 'false');
    }
  };
};
