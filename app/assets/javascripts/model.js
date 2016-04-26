function Model (object) {
    this.name = object.name;
    this.link = object.link;
    this.properties = object.properties;

    // Function Score returns value between 0 and 1
    this.score = function(criteria) {
        var criteriaLength = criteria.length;
        if (criteriaLength == 0) { return 0; }

        var matches = 0;
        for (var i = 0; i < criteriaLength; i++) {
            if ($.inArray(criteria[i], this.properties) > -1) {
                matches++;
            }
        }

        return matches / criteriaLength;
    };
}
