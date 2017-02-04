'use strict';

var pin = document.querySelectorAll('.pin');
var dialogClose = document.querySelector('.dialog__close');
var dialog = document.querySelector('.dialog');

// функция удаления активного класса у обьектов с классом pin
var deleteClassPinActive = function () {
  for (var j = 0; j < pin.length; j++) {
    pin[j].classList.remove('pin--active');
  }
};

// добавление класс эктив меткам на карте и открытие окна диалог
for (var i = 0; i < pin.length; i++) {
  pin[i].addEventListener('click', function (action) {
    deleteClassPinActive();
    var target = action.currentTarget;
    target.classList.add('pin--active');
    dialog.style.display = 'block';
  });
}

// изъятие класса эктив у меток на карте и закрытие окна далог
dialogClose.addEventListener('click', function () {
  dialog.style.display = 'none';
  deleteClassPinActive();
});

// проверка правильность введенных данных
var noticeForm = document.querySelector('.notice__form');
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
var syncValue = function(firstForm, secondForm){
  firstForm.value = secondForm.value;
};

// синхронизация полей «время заезда» и «время выезда»
var timeCheckInSelect = document.getElementById('time');
var timeCheckOutSelect = document.getElementById('timeout');

timeCheckInSelect.addEventListener('change', function () {
syncValue(timeCheckOutSelect, timeCheckInSelect);
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
