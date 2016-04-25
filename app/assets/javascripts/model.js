function Model (name) {
    this.name = name;
    this.link = 'http://www.et-model.com';
    this.properties = ['stad', 'gebied'];

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

        return matches/criteriaLength
    };
}
