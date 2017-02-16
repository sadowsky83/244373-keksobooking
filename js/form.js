'use strict';

var pins = document.querySelectorAll('.pin');
var dialogClose = document.querySelector('.dialog__close');
var dialog = document.querySelector('.dialog');
var tokyoPinMap = document.querySelector('.tokyo__pin-map');

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

// массивы полей времени въезда/выезда
var timeIn = ['12', '13', '14'];
var timeOut = ['12', '13', '14'];

//  массивы полей типа жилья/стоимость
var type = ['flat', 'shack', 'palace'];
var prise = ['1000', '0', '10000'];

// массивы количества комнат/мест
var rooms = ['1room', '2rooms', '100rooms'];
var guests = ['noguest', '3guest', '3guest'];

// логика по отрисовке меток на карте: добавление обработчиков, показ и закрытие карточки, отметку метки как активной.
window.initializePins(tokyoPinMap, pins, dialog, dialogClose);

// синхронизация полей «время заезда» и «время выезда»
var timeCheckInSelect = document.getElementById('time');
var timeCheckOutSelect = document.getElementById('timeout');

timeCheckInSelect.addEventListener('change', function () {
  window.synchronizeFields(timeCheckInSelect, timeCheckOutSelect, timeIn, timeOut, 'value');
});

timeCheckOutSelect.addEventListener('change', function () {
  window.synchronizeFields(timeCheckOutSelect, timeCheckInSelect, timeOut, timeIn, 'value');
});

// синхронизация полей «Тип жилья» и минимальной цены
var housingType = document.getElementById('type');

housingType.addEventListener('change', function () {
  window.synchronizeFields(housingType, noticeFormPrice, type, prise, 'min');
  noticeFormPrice.placeholder = prise[type.indexOf(housingType.value)];
});

// синхронизация полей количество комнат и количество гостей
var roomNumber = document.getElementById('room_number');
var capacityGuest = document.getElementById('capacity');

roomNumber.addEventListener('change', function () {
  window.synchronizeFields(roomNumber, capacityGuest, rooms, guests, 'value');
});

capacityGuest.addEventListener('change', function () {
  window.synchronizeFields(capacityGuest, roomNumber, guests, rooms, 'value');
});
