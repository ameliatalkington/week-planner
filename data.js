var data = {
  dayOfTheWeek: '',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('daily-planner-local-storage');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var parseDataJSON = JSON.stringify(data);
  localStorage.setItem('daily-planner-local-storage', parseDataJSON);
});
