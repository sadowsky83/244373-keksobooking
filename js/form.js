'use strict';

var pins = document.querySelectorAll('.pin');
var dialogClose = document.querySelector('.dialog__close');
var dialog = document.querySelector('.dialog');
var tokyoPinMap = document.querySelector('.tokyo__pin-map');

var ENTER_KEY_CODE = 13;

// делегирование области tokyoPinMap
var delegatedChangeClass = function () {
  var target = event.target;
  while (target !=tokyoPinMap){
  if (target.classList.contains('pin')) {
  target.classList.add('pin--active');
  dialog.style.display = 'block';
return;}
  else {
    target = target.parentNode;
}
}
};

// Обработчик события по клику
var clickHandler = function (event) {
  deleteClassPinActive();
  delegatedChangeClass();
};
tokyoPinMap.addEventListener('click', clickHandler, true);

// Обработчик события по клавиатуре
var keydownHandler = function (event) {
  if (event.keyCode === ENTER_KEY_CODE) {
    deleteClassPinActive();
    delegatedChangeClass();
  }
};
tokyoPinMap.addEventListener('keydown', keydownHandler, true);

// Скрытие диалогового окна и удаление класса у метки
dialogClose.addEventListener('click', function () {
  dialog.style.display = 'none';
  deleteClassPinActive();
});

// функция удаления активного класса у обьектов с классом pin
var deleteClassPinActive = function () {
  for (var j = 0; j < pins.length; j++) {
    pins[j].classList.remove('pin--active');
    pins[j].setAttribute('aria-pressed', 'false');
  }
};

// Назначение атрибутов элементам на карте
for (var i = 0; i < pins.length; i++) {
  var element = pins[i];
  element.setAttribute('role', 'button');
  element.setAttribute('tabindex', '1');
  if (element.classList.contains('pin--active')) {
    element.setAttribute('aria-pressed', 'true');
  } else {
    element.setAttribute('aria-pressed', 'false');
  }
}

// проверка правильность введенных данных
var noticeFormTitle = document.getElementById('title');
var noticeFormPrice = document.getElementById('price');
var noticeFormAddress = document.getElementById('address');

noticeFormTitle.required = true;
noticeFormTitle.minLength = 30;
noticeFormTitle.maxLength = 100;

noticeFormPrice.required = true;
noticeFormPrice.type = 'number';
noticeFormPrice.min = 1000;
noticeFormPrice.max = 1000000;

noticeFormAddress.required = true;

// автоматисечкая корректировка полей в форме
var syncValue = function (firstForm, secondForm) {
  firstForm.value = secondForm.value;
};

// синхронизация полей «время заезда» и «время выезда»
var timeCheckInSelect = document.getElementById('time');
var timeCheckOutSelect = document.getElementById('timeout');

timeCheckInSelect.addEventListener('change', function () {
  syncValue(timeCheckOutSelect, timeCheckInSelect);
});

timeCheckOutSelect.addEventListener('change', function () {
  syncValue(timeCheckInSelect, timeCheckOutSelect);
});

// синхронизация полей «Тип жилья» и минимальной цены
var housingType = document.getElementById('type');

housingType.addEventListener('change', function () {
  if (housingType.value === 'flat') {
    noticeFormPrice.min = 1000;
    noticeFormPrice.placeholder = 1000;

  } else if (housingType.value === 'shack') {
    noticeFormPrice.min = 0;
    noticeFormPrice.placeholder = 0;
  } else {
    noticeFormPrice.min = 10000;
    noticeFormPrice.placeholder = 10000;
  }
});

// синхронизация полей количество комнат и количество гостей
var roomNumber = document.getElementById('room_number');
var capacityGuest = document.getElementById('capacity');

roomNumber.addEventListener('change', function () {
  syncValue(capacityGuest, roomNumber);
});

capacityGuest.addEventListener('change', function () {
  syncValue(roomNumber, capacityGuest);
});
