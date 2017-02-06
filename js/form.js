'use strict';

var pins = document.querySelectorAll('.pin');
var dialogClose = document.querySelector('.dialog__close');
var dialog = document.querySelector('.dialog');
var tokyoPinMap = document.querySelector('.tokyo__pin-map');

var ENTER_KEY_CODE = 13;

// определение переменной ENTER_KEY_CODE (клавиши Ввод)
var activateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

// изменение ARIA роли
var statusAriaRole = function (element) {
  var pressed = (element.getAttribute('aria-pressed') === 'true');
  if (!pressed) {
    element.setAttribute('aria-pressed', !pressed);
  }
};

// функция удаления активного класса у обьектов с классом pin
var deleteClassPinActive = function () {
  for (var j = 0; j < pins.length; j++) {
    pins[j].classList.remove('pin--active');
  }
};

// добавление класс эктив меткам на карте и открытие окна диалог
var addClassPin = function (evt) {
  var element = evt.target.classList.contains('pin') ? evt.target : evt.target.parentElement;
  deleteClassPinActive();
  element.classList.add('pin--active');
  dialog.style.display = 'block';
};

// добавление класс эктив меткам на карте и открытие окна диалог по нажатию
var keyAddClassPin = function (evt) {
  if (activateEvent(evt)) {
    addClassPin(evt);
  }
};

// закрытие окна диалог
var closeDialog = function () {
  dialog.style.display = 'none';
  deleteClassPinActive();
  statusAriaRole(dialogClose);
};

// открвтие окна диалог и активация pin по клику
tokyoPinMap.addEventListener('click', addClassPin);

// открвтие окна диалог и активация pin по нажатию
tokyoPinMap.addEventListener('keydown', keyAddClassPin);

// закрытие окна диалог по клику
dialogClose.addEventListener('click', closeDialog);

// закрытие окна диалог по нажатию
dialogClose.addEventListener('keydown', function (evt) {
  if (activateEvent(evt)) {
    closeDialog();
  }
});

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
var syncValue = function(firstForm, secondForm) {
  firstForm.value = secondForm.value;
};

// синхронизация полей «время заезда» и «время выезда»
var timeCheckInSelect = document.getElementById('time');
var timeCheckOutSelect = document.getElementById('timeout');

timeCheckInSelect.addEventListener('change', function() {
  syncValue(timeCheckOutSelect, timeCheckInSelect);
});

timeCheckOutSelect.addEventListener('change', function() {
  syncValue(timeCheckInSelect, timeCheckOutSelect);
});

// синхронизация полей «Тип жилья» и минимальной цены
var housingType = document.getElementById('type');

housingType.addEventListener('change', function() {
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

roomNumber.addEventListener('change', function() {
  syncValue(capacityGuest, roomNumber);
});

capacityGuest.addEventListener('change', function() {
  syncValue(roomNumber, capacityGuest);
});
