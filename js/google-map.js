var google;

function init() {
    // Latitude and longitude for Mehria Town, Attock
    var myLatlng = new google.maps.LatLng(33.8050,72.3527);

    var mapOptions = {
        // Initial zoom level
        zoom: 15,

        // Centering the map to Mehria Town, Attock
        center: myLatlng,

        // Disabling scrollwheel zoom
        scrollwheel: false,
        
        // Custom map styles
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain the map
    var mapElement = document.getElementById('map');

    // Create the Google Map using the element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Address for Mehria Town, Attock
    var address = 'Mehria Town, Attock';

    // Use the Geocoding API to convert the address to latitude and longitude
    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&sensor=false', function (data) {
        if (data.results && data.results.length > 0) {
            var p = data.results[0].geometry.location;
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png' // Custom marker icon
            });
        } else {
            console.error('Geocoding error: No results found for ' + address);
        }
    }).fail(function() {
        console.error('Geocoding API request failed.');
    });
}

google.maps.event.addDomListener(window, 'load', init);
