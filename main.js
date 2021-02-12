var $addEntryButton = document.querySelector('.add');
var $modalBackground = document.querySelector('.modal-background');

var $form = document.querySelector('.entry-form');
// console.log('$form: ', $form);
var $daySelect = document.querySelector('.day-of-week');
var $timeSelect = document.querySelector('.time');
var $textArea = document.querySelector('textarea');

$addEntryButton.addEventListener('click', function (event) {
  $modalBackground.className = 'modal-background';
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var taskObject = {
    day: $daySelect.value,
    time: $timeSelect.value,
    description: $textArea.value
  };
  data.entries.unshift(taskObject);
  data.nextEntryId++;
  $form.reset();
  $modalBackground.className = 'modal-background hidden';
});
