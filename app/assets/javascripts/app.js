var models = [];

$.getJSON( "models.json", function( data ) {
  models = data;
});

function getCriteria () {
  var selected = [];
  $('input:checked').each(function() {
    selected.push($(this).attr('name'));
  });
  return selected;
}

function updateScores () {
  var criteria = getCriteria();

  $.each(models, function(){
    this.score = calculateScore(criteria, this.properties);
    cell = $("#" + this.key + " > .score");
    cell.html(toPercentageString(this.score));
    cell.css({"background-size": toPercentageString(this.score) + " 100%"});
  });
}

// Calculated score by comparing list of user 'wished' properties
// with the properties defined by the model.
function calculateScore(userProperties, modelProperties) {
  if (userProperties.length == 0) {
    return 0;
  }
  var matches = 0;
  for (var i = 0; i < userProperties.length; i++) {
    if ($.inArray(userProperties[i], modelProperties) > -1) {
      matches++;
    }
  }
  return matches / userProperties.length;
};

function toPercentageString(number) {
  return (number*100).toFixed(2) + "%";
}

// From http://stackoverflow.com/a/7558600
function sortTable(){
    var tbl = document.getElementById("output_table").tBodies[0];
    var store = [];
    for(var i=0, len=tbl.rows.length; i<len; i++){
        var row = tbl.rows[i];
        var sortnr = parseFloat(row.cells[1].textContent || row.cells[1].innerText);
        if(!isNaN(sortnr)) store.push([sortnr, row]);
    }
    store.sort(function(x,y){
        return y[0] - x[0];
    });
    for(var i=0, len=store.length; i<len; i++){
        tbl.appendChild(store[i][1]);
    }
    store = null;
}

$(document).ready(function(){
  $('input:checkbox').change(function() {
    updateScores();
    sortTable();
  });

  $(document).ready(function(){
    $("#output table").sticky({topSpacing:20});
  });
});
