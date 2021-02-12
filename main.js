var $addEntryButton = document.querySelector('.add');
var $modalBackground = document.querySelector('.modal-background');

var $form = document.querySelector('.entry-form');
console.log('$form: ', $form);
var $daySelect = document.querySelector('.day-of-week');

$addEntryButton.addEventListener('click', function (event) {
  $modalBackground.className = 'modal-background';
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var taskObject = {
    day: $daySelect.value
  };
  console.log('taskObject.day:', taskObject.day);
  $modalBackground.className = 'modal-background hidden';
});
