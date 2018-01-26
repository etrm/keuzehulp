/*globals $, document*/

(function () {
    'use strict';

    var models = [];

    $.getJSON("models.json", function (data) {
        models = data;
    });

    function getCriteria() {
        var selected = [];
        $('input:checked').each(function () {
            selected.push($(this).attr('name'));
        });
        return selected;
    }

    // Calculated score by comparing list of user 'wished' properties
    // with the properties defined by the model.
    function calculateScore(userProperties, modelProperties) {
        if (userProperties.length === 0) {
            return 0;
        }

        var matches = 0,
            i = 0;

        for (i = 0; i < userProperties.length; i += 1) {
            if ($.inArray(userProperties[i], modelProperties) > -1) {
                matches += 1;
            }
        }
        return matches / userProperties.length;
    }

    function toPercentageString(number) {
        return (number * 100).toFixed(2) + "%";
    }

    function updateScores() {
        var cell,
            criteria = getCriteria();

        $.each(models, function () {
            this.score = calculateScore(criteria, this.properties);
            cell = $("#" + this.key + " > .score");
            cell.html(toPercentageString(this.score));
            cell.css({"background-size": toPercentageString(this.score) + " 100%"});
        });
    }

    // From http://stackoverflow.com/a/7558600
    function sortTable() {
        var tbl = document.getElementById("output_table").tBodies[0],
            store = [],
            len,
            i,
            row,
            sortnr,
            name;

        for (i = 0, len = tbl.rows.length; i < len; i += 1) {
            row    = tbl.rows[i];
            sortnr = parseFloat(row.cells[1].textContent || row.cells[1].innerText);
            name   = row.cells[0].textContent;

            if (!isNaN(sortnr)) {
                store.push([sortnr, name, row]);
            }
        }

        store.sort(function (x, y) {
            if (y[0] > x[0]) { return 1; }
            if (y[0] < x[0]) { return -1; }

            if (y[1] > x[1]) { return -1; }
            if (y[1] < x[1]) { return 1; }
            return 0;
        });

        for (i = 0, len = store.length; i < len; i += 1) {
            tbl.appendChild(store[i][2]);
        }
        store = null;
    }

    function hideDeselectAll() {
        $('#wis').hide();
    }

    function showDeslectAll() {
        $('#wis').show();
    }

    function renderDeselectAll() {
        if ($('input:checkbox:checked').length > 0) {
            showDeslectAll();
        } else {
            hideDeselectAll();
        }
    }

    function trackClick() {
        if (ga) {
            ga('send', 'event', 'filter', $(this).attr('name'), 'Filter');
        }
    }

    function updateAll() {
        updateScores();
        sortTable();
        renderDeselectAll();
        trackClick.call(this);
    }

    $(document).ready(function () {
        $('input:checkbox').change(updateAll);
        $("#output table").sticky({ topSpacing: 20 });

        $('#wis').hide().click(function () {
            $('input:checkbox').removeAttr('checked');
            updateAll();
        });

        $('.tooltip').tooltipster();
    });
}());
