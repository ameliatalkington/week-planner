var $addEntryButton = document.querySelector('.add');
var $modalBackground = document.querySelector('.modal-background');
var $weekButtons = document.querySelector('.day-button-container');
var $dayOfWeekButton = document.querySelectorAll('.day-button');
var $dayTitle = document.querySelector('.day-title');

var $form = document.querySelector('.entry-form');
var $daySelect = document.querySelector('.day-of-week');
var $timeSelect = document.querySelector('.time');
var $textArea = document.querySelector('textarea');
var $tbody = document.querySelectorAll('tbody');

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

$weekButtons.addEventListener('click', function (event) {
  for (var i = 0; i < $dayOfWeekButton.length; i++) {
    if (event.target.value === $dayOfWeekButton[i].value) {
      $dayTitle.textContent = $dayOfWeekButton[i].value;
      addDataToTable($dayOfWeekButton[i].value);
    }
  }
});

function addDataToTable(dayValue) {
  for (var j = 0; j < data.entries.length; j++) {
    createTableDOM();
    var $entryTime = document.querySelector('.entry-time');
    var $entryDescription = document.querySelector('.entry-description');
    if (data.entries[j].day === dayValue) {
      $entryTime.textContent = data.entries[j].time;
      $entryDescription.textContent = data.entries[j].description;
    }
  }
}

function createTableDOM() {
  var trElement = document.createElement('tr');

  var tdTime = document.createElement('td');
  tdTime.setAttribute('class', 'entry-time');
  trElement.appendChild(tdTime);

  var tdDescription = document.createElement('td');
  tdDescription.setAttribute('class', 'entry-description');
  trElement.appendChild(tdDescription);

  // tdTime.textContent = data.
  // tdDescription.textContent = data.
  return trElement;
}

// for (var m = 0; m < $timeObj.time.length; m++) {
//   for (var k = 0; k < $tdElements.length; k++) {
//     if (k === 0) {
//       $tdElements[k].textContent = $timeObj.time[m];
//     }
//     else if (k % 2 === 0) {

//     } else {
//       $tdElements[k].textContent = $notesObj
//     }
//   }
// }
