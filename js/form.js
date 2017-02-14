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
var type = ['Лачуга', 'Квартира', 'Дворец'];
var prise = ['0', '1000', '10000'];

// массивы количества комнат/мест
var rooms = ['1 комната', '2 комнаты', '100 комнат'];
var guests = ['не для гостей', 'для 3 гостей', 'для 3 гостей'];

// логика по отрисовке меток на карте: добавление обработчиков, показ и закрытие карточки, отметку метки как активной.
window.initializePins(tokyoPinMap, pins, dialog, dialogClose);

// синхронизация полей «время заезда» и «время выезда»
var timeCheckInSelect = document.getElementById('time');
var timeCheckOutSelect = document.getElementById('timeout');

time.addEventListener('change', function () {
  window.synchronizeFields = function (timeCheckInSelect, timeCheckOutSelect, timeIn, timeOut, 'value');
});

// синхронизация полей «Тип жилья» и минимальной цены
var housingType = document.getElementById('type');
time.addEventListener('change', function () {
  window.synchronizeFields = function (housingType, noticeFormPrice, type, prise, 'min');
});

// синхронизация полей количество комнат и количество гостей
var roomNumber = document.getElementById('room_number');
var capacityGuest = document.getElementById('capacity');
time.addEventListener('change', function () {
  window.synchronizeFields = function (roomNumber, capacityGuest, rooms, guests, 'value');
});
