var $addEntryButton = document.querySelector('.add');
var $modalBackground = document.querySelector('.modal-background');
var $weekButtons = document.querySelector('.day-button-container');
var $dayOfWeekButton = document.querySelectorAll('.day-button');

var $form = document.querySelector('.entry-form');
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

$weekButtons.addEventListener('click', function(event) {
  for(var i = 0; i < $dayOfWeekButton.length; i++) {
    if (event.target.value === $dayOfWeekButton[i].value) {
      addDataToTable();
    }
  }
});

function addDataToTable() {

}
