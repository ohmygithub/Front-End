var restaurant = function(eat) {
	var self = this;
	self.name = eat.name;
	self.position = eat.latLng;
    self.address = eat.address;
	self.marker = '';
	self.infowindow = '';
	self.selected = ko.observable(false);

	// Initialize the place object
	self.init = function() {
		self.createMarker();
		self.createInfowindow();
	};

	// Initialize marker of the place
	self.createMarker = function() {
		self.marker = new google.maps.Marker({
			map: myMap,
			position: self.position
		});

		google.maps.event.addListener(self.marker, 'click', self.select);
	};

	// Add marker to the view
	self.addMarker = function() {
		self.marker.setMap(myMap);
	};

	// Remove marker from the view
	self.removeMarker = function() {
		self.marker.setMap(null);
	};

	// Initialize infowindow of the place
	self.createInfowindow = function() {
		self.infowindow = new google.maps.InfoWindow();
		self.infowindow.setContent('<h3>' + self.name + '</h3>' + self.address);
	};

	// Add infowindow to the view
	self.addInfowindow = function() {
		self.infowindow.open(myMap, self.marker);

		// Add foursquare explore to the info window
		self.location();

		// Set the marker and info window to the center
		myMap.setCenter(self.position);
	};

	self.closeInfowindow = function() {
		self.infowindow.close();
	};

	// Change view to selected place
	self.select = function() {
		if (appView.currentPlace() !== undefined) {
			appView.currentPlace().closeInfowindow();
			appView.currentPlace().selected(false);
		}

		appView.currentPlace(self);
		self.selected(true);
		appView.currentPlace().addInfowindow();
	};

	// restaurants' location
	self.location = function() {
//		self.address();
	};

	self.init();
};



// Initialize google map
var myMap;
function mapInit () {
	var initCenter = new google.maps.LatLng(34.066404, -118.296574);
	var mapOpts = {
		center: initCenter,
		zoom: 14,
	};
	myMap = new google.maps.Map(document.getElementById('map'), mapOpts);
}

var ViewModel = function() {
	var self = this;
	self.filterText = ko.observable();
	self.filterList = ko.observableArray();
	self.currentPlace = ko.observable();

	// neighbourhood restaurants
    var i;
	self.dining = ko.observableArray([
    new restaurant({name: Restaurants.restaurants[0].name, address: Restaurants.restaurants[0].address, latLng: new google.maps.LatLng(Restaurants.restaurants[0].lat, Restaurants.restaurants[0].lng)}),
    new restaurant({name: Restaurants.restaurants[1].name, address: Restaurants.restaurants[1].address, latLng: new google.maps.LatLng(Restaurants.restaurants[1].lat, Restaurants.restaurants[1].lng)}),
    new restaurant({name: Restaurants.restaurants[2].name, address: Restaurants.restaurants[2].address, latLng: new google.maps.LatLng(Restaurants.restaurants[2].lat, Restaurants.restaurants[2].lng)}),
    new restaurant({name: Restaurants.restaurants[3].name, address: Restaurants.restaurants[3].address, latLng: new google.maps.LatLng(Restaurants.restaurants[3].lat, Restaurants.restaurants[3].lng)}),
    new restaurant({name: Restaurants.restaurants[4].name, address: Restaurants.restaurants[4].address, latLng: new google.maps.LatLng(Restaurants.restaurants[4].lat, Restaurants.restaurants[4].lng)}),
    ]);

	// Search and filter
	self.search = function(data) {
		var filter = data();
		self.filterList.removeAll();
		self.removeMarkerAll();

		// Display all restaurants when no input in search box
		if(!filter) {filter = "";}
		for (var i = 0, len = self.dining().length; i < len; i++) {
			if(self.dining()[i].name.indexOf(filter) >= 0) {
				self.dining()[i].addMarker();
				self.filterList.push(self.dining()[i]);
			}
		}
	};

	// Remove all markers
	self.removeMarkerAll = function() {
		for (var i = 0; i < self.dining().length; i++) {
			self.dining()[i].removeMarker();
		}
	};

	// Initialize view model
	self.init = function() {
		mapInit();
		self.search(self.filterText);
	};
};

// Global variable to communicate with the ViewModel
var appView;
// Initialize the map when the document is ready
$(document).ready(function() {
  appView = new ViewModel();
  ko.applyBindings(appView);
  appView.init();
});