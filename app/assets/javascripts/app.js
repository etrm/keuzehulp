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
        var name = row.cells[0].textContent;
        if(!isNaN(sortnr)) store.push([sortnr, name, row]);
    }
    store.sort(function(x,y){
        if (y[0] > x[0]) return 1;
        if (y[0] < x[0]) return -1;

        if (y[1] > x[1]) return -1;
        if (y[1] < x[1]) return 1;
        return 0;
    });
    for(var i=0, len=store.length; i<len; i++){
        tbl.appendChild(store[i][2]);
    }
    store = null;
}

function hideDeselectAll(){
    $('#wis').hide();
}

function showDeslectAll(){
    $('#wis').show();
}

function renderDeselectAll(){
    if($('input:checkbox:checked').length > 0) {
        showDeslectAll();
    }
    else {
        hideDeselectAll();
    }
}

function updateAll(){
    updateScores();
    sortTable();
    renderDeselectAll();
}

$(document).ready(function(){
    $('input:checkbox').change(function() {
        updateAll();
    });

    $(document).ready(function(){
        $("#output table").sticky({topSpacing:20});
    });

    $('#wis').hide().click(function(){
        $('input:checkbox').removeAttr('checked');
        updateAll();
    });
    $('.tooltip').tooltipster();
});
