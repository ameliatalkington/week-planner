var $addEntryButton = document.querySelector('.add');
var $modalBackground = document.querySelector('.modal-background');

$addEntryButton.addEventListener('click', function (event) {
  $modalBackground.className = 'modal-background';
});

var $submitButton = document.querySelector('#submit');

$submitButton.addEventListener('click', function (event) {
  $modalBackground.className = 'modal-background hidden';
})
