// ==UserScript==
// @name        Giant Bomb review images
// @namespace   https://github.com/KamasamaK/gb-review-images
// @description Inserts old review images into newer site design
// @match       https://*.giantbomb.com/reviews/*
// @version     1.40
// @author      KamasamaK
// @grant       none
// @license     MIT
// ==/UserScript==

/*
 This script is subject to fail on a redesign of the site
 Thanks to Ben Coello for creating the images for the original members
 Thanks to Giant Bomb user papercut for providing the Alex and Patrick images used here
*/
(function () {
    "use strict";

    var parentNode = document.getElementsByClassName("news-hdr")[0];
    var reviewerName = document.getElementsByClassName("news-byline")[0].getElementsByTagName("a")[0].textContent;
    var scoreNode = document.getElementsByClassName("score score-big score-special")[0];
    var numberScore = scoreNode.getElementsByTagName("span")[0].textContent;
    var systemList = document.getElementsByClassName("system-list")[0];

    var imgNode = document.createElement("img");
    imgNode.setAttribute("height", "150");
    imgNode.setAttribute("align", "left");

    var reviewImages = new Object();

    reviewImages["Jeff Gerstmann"] = new Object();
    reviewImages["Jeff Gerstmann"]["1"] = "https://static.giantbomb.com/uploads/original/0/9253/2492756-jeff-1.png";
    reviewImages["Jeff Gerstmann"]["2"] = "https://static.giantbomb.com/uploads/original/0/9253/2492757-jeff-2.png";
    reviewImages["Jeff Gerstmann"]["3"] = "https://static.giantbomb.com/uploads/original/0/9253/2492758-jeff-3.png";
    reviewImages["Jeff Gerstmann"]["4"] = "https://static.giantbomb.com/uploads/original/0/9253/2492759-jeff-4.png";
    reviewImages["Jeff Gerstmann"]["5"] = "https://static.giantbomb.com/uploads/original/0/9253/2492760-jeff-5.png";

    reviewImages["Brad Shoemaker"] = new Object();
    reviewImages["Brad Shoemaker"]["1"] = "https://static.giantbomb.com/uploads/original/0/9253/2492750-brad-1.png";
    reviewImages["Brad Shoemaker"]["2"] = "https://static.giantbomb.com/uploads/original/0/9253/2492751-brad-2.png";
    reviewImages["Brad Shoemaker"]["3"] = "https://static.giantbomb.com/uploads/original/0/9253/2492753-brad-3.png";
    reviewImages["Brad Shoemaker"]["4"] = "https://static.giantbomb.com/uploads/original/0/9253/2492754-brad-4.png";
    reviewImages["Brad Shoemaker"]["5"] = "https://static.giantbomb.com/uploads/original/0/9253/2492755-brad-5.png";

    reviewImages["Ryan Davis"] = new Object();
    reviewImages["Ryan Davis"]["1"] = "https://static.giantbomb.com/uploads/original/0/9253/2492761-ryan-1.png";
    reviewImages["Ryan Davis"]["2"] = "https://static.giantbomb.com/uploads/original/0/9253/2492762-ryan-2.png";
    reviewImages["Ryan Davis"]["3"] = "https://static.giantbomb.com/uploads/original/0/9253/2492763-ryan-3.png";
    reviewImages["Ryan Davis"]["4"] = "https://static.giantbomb.com/uploads/original/0/9253/2492764-ryan-4.png";
    reviewImages["Ryan Davis"]["5"] = "https://static.giantbomb.com/uploads/original/0/9253/2492765-ryan-5.png";

    reviewImages["Vinny Caravella"] = new Object();
    reviewImages["Vinny Caravella"]["1"] = "https://static.giantbomb.com/uploads/original/0/9253/2492766-vinny-1.png";
    reviewImages["Vinny Caravella"]["2"] = "https://static.giantbomb.com/uploads/original/0/9253/2492767-vinny-2.png";
    reviewImages["Vinny Caravella"]["3"] = "https://static.giantbomb.com/uploads/original/0/9253/2492768-vinny-3.png";
    reviewImages["Vinny Caravella"]["4"] = "https://static.giantbomb.com/uploads/original/0/9253/2492769-vinny-4.png";
    reviewImages["Vinny Caravella"]["5"] = "https://static.giantbomb.com/uploads/original/0/9253/2492770-vinny-5.png";

    reviewImages["Alex Navarro"] = new Object();
    reviewImages["Alex Navarro"]["1"] = "https://static.giantbomb.com/uploads/original/0/9253/2337134-alex_1.png";
    reviewImages["Alex Navarro"]["2"] = "https://static.giantbomb.com/uploads/original/0/9253/2337135-alex_2.png";
    reviewImages["Alex Navarro"]["3"] = "https://static.giantbomb.com/uploads/original/0/9253/2337136-alex_3.png";
    reviewImages["Alex Navarro"]["4"] = "https://static.giantbomb.com/uploads/original/0/9253/2337137-alex_4.png";
    reviewImages["Alex Navarro"]["5"] = "https://static.giantbomb.com/uploads/original/0/9253/2337138-alex_5.png";

    reviewImages["Patrick Klepek"] = new Object();
    reviewImages["Patrick Klepek"]["1"] = "https://static.giantbomb.com/uploads/original/0/9253/2336676-patrick_1.png";
    reviewImages["Patrick Klepek"]["2"] = "https://static.giantbomb.com/uploads/original/0/9253/2336677-patrick_2.png";
    reviewImages["Patrick Klepek"]["3"] = "https://static.giantbomb.com/uploads/original/0/9253/2336678-patrick_3.png";
    reviewImages["Patrick Klepek"]["4"] = "https://static.giantbomb.com/uploads/original/0/9253/2336679-patrick_4.png";
    reviewImages["Patrick Klepek"]["5"] = "https://static.giantbomb.com/uploads/original/0/9253/2336680-patrick_5.png";

    reviewImages["Dave Snider"] = new Object();
    reviewImages["Drew Scanlon"] = new Object();
    reviewImages["Matt Kessler"] = new Object();
    reviewImages["Andy McCurdy"] = new Object();
    for (var i = 1; i <= 5; i++) {
        var numStr = i.toString();
        reviewImages["Dave Snider"][numStr] = "https://static.giantbomb.com/uploads/original/0/9253/2492775-snide.png";
        reviewImages["Drew Scanlon"][numStr] = "https://static.giantbomb.com/uploads/original/0/9253/2492773-drewbert.png";
        reviewImages["Matt Kessler"][numStr] = "https://static.giantbomb.com/uploads/original/0/9253/2492774-mattbodega.png";
        reviewImages["Andy McCurdy"][numStr] = "https://static.giantbomb.com/uploads/original/0/9253/2492772-andy.png";
    }

    if (reviewImages.hasOwnProperty(reviewerName) && reviewImages[reviewerName][numberScore]) {
        imgNode.setAttribute("src", reviewImages[reviewerName][numberScore]);
    } else {
        return false;
    }

    parentNode.insertBefore(imgNode, scoreNode);
    // Use CSS instead?
    parentNode.insertBefore(document.createElement("br"), scoreNode);
    parentNode.insertBefore(document.createElement("br"), systemList);
    parentNode.insertBefore(document.createElement("br"), systemList);
    parentNode.insertBefore(document.createElement("br"), systemList);
})();