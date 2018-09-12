"use strict";

$(function() {
    var $searchField = $("#search-field"),
        $popularTags = $("#popular-tags"),
        showTags,
        hideTags;

    showTags = function() {
        return $popularTags.show();
    };

    hideTags = function() {
        return $popularTags.hide();
    };

    return $searchField.ghostHunter({
        results: "#search-results",
        result_template: "<a id=\"gh-{{ref}}\" class=\"gh-search-item result\" href='{{link}}'>\n  <h2>{{title}}</h2>\n  <h4>{{pubDate}}</h4>\n</a>",
        // Search after each key press
        onKeyUp: true,
        // Index all posts on page load (if false indexing is done on search focus)
        onPageLoad: false,
        // Include static pages
        includepages: false,
        displaySearchInfo: true,
        // Show search info if zero results
        zeroResultsInfo: false,
        onComplete: function(query) {
            if (query.length > 0) {
                return hideTags();
            } else {
                return showTags();
            }
        }
    });
});
