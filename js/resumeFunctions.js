// When you click an image, launch the popUp with a higher resolution img
$(document).ready(function(){
      jQuery('.clickableImg img').on("click", function () {
        var clickedPicSrc = $(this).prop('src');
        var clickedPicAlt = $(this).prop('alt');
        var captionText = document.getElementById("caption");
        clickedPicSrc = clickedPicSrc.slice(-100,-4)+"L"+clickedPicSrc.slice(-4);
        captionText.innerHTML = clickedPicAlt;
        $('#myModal img').prop('src', clickedPicSrc);
        $('#myModal img').prop('alt', clickedPicAlt);
        $('#myModal').css("display", "block");
})});

// Check if resume divs have elements, if they don't then hide the div
if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
}
if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
}
if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
}
if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
}
if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
}
if(document.getElementsByClassName('honor-entry').length === 0) {
      document.getElementById('honor').style.display = 'none';
}
if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.display = 'none';
}
if(document.getElementById('map') === null) {
      document.getElementById('mapDiv').style.display = 'none';
}

// Log user clicks on resume page
var clickLocations = [];
function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}
$(document).click(function(loc) {
});

/*****************************************************
*** Generate the custom Google Map for the website ***
https://developers.google.com/maps/documentation/javascript/reference
*****************************************************/

// Declares global map variable
var map;

// initializeMap() is called when page is loaded
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // For the map to be displayed, the googleMap var must be
  // appended to #mapDiv in resumeBuilder.js
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  // locationFinder() returns an array of every location string from the JSONs
  // written for bio, education, and work
  function locationFinder() {

    // Initializes an empty array
    var locations = [];

    // Adds the multiple location property from bio to the locations array
    for (var i = 0; i < bio.contacts.location.length; i++) {
        locations.push(bio.contacts.location[i]);
    }

    // Iterates through school locations and appends each location to
    // the locations array, forEach is used for array iteration
    //education.schools.forEach(function(school){
    //  locations.push(school.location);
    //});

    // Iterates through work locations and appends each location to
    // the locations array, forEach is used for array iteration
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  CreateMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // Call function when google map is clicked
    google.maps.event.addListener(marker, 'click', function() {
      // *********************** TODO *****************************
    });

    // This is where the pin actually gets added to the map
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // Fit the map to the new marker
    map.fitBounds(bounds);
    // Center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
