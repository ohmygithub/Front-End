var restaurantModel = function (eat, businessId) {
    'use strict';
	var self = this;
    var url = '';
	self.name = eat.name;
	self.position = eat.latLng;
    self.address = eat.address;
	self.marker = '';
	self.infowindow = '';
	self.selected = ko.observable(false);

	// Initialize the place object
	self.init = function () {
		self.createMarker();
		self.createInfowindow();
	};

	// Initialize marker of the place
	self.createMarker = function () {
		self.marker = new google.maps.Marker({
			map: myMap,
			position: self.position,
            animation: google.maps.Animation.DROP
		});

		google.maps.event.addListener(self.marker, 'click', self.select);
	};

	// Add marker to the view
	self.addMarker = function () {
		self.marker.setMap(myMap);
	};

	// Remove marker from the view
	self.removeMarker = function () {
		self.marker.setVisible(false);
	};

	// Initialize infowindow of the place
	self.createInfowindow = function () {
		self.infowindow = new google.maps.InfoWindow();
	};

	// Add infowindow to the view
	self.addInfowindow = function () {
        self.infowindow.setContent('<h3>' + self.name + '</h3>' + self.address + '<hr/><a href=' + url + ' />' + url + '</a>');
		self.infowindow.open(myMap, self.marker);

		// Set the marker and info window to the center
		myMap.setCenter(self.position);
	};

	self.closeInfowindow = function () {
		self.infowindow.close();
	};
    
    self.yelp = function(businessId, marker) {
            var auth = {
                consumerKey: "oZsD8h9BM0VQtveN7sYvHg",
                consumerSecret: "EQhmDrmyjsJH7F5s3SEe516JbGY",
                accessToken: "N-R-C5cfJXo-4LrgGcpBJUQ6w3Y2_I6_",
                accessTokenSecret: "H9H8IFqCUxHqXxqJuoM0dEtHiDo",
                serviceProvider: {
                    signatureMethod: "HMAC-SHA1"
                }
            };
            var yelp_url = 'https://api.yelp.com/v2/business/' + businessId;

            var parameters = {
                oauth_consumer_key: auth.consumerKey,
                oauth_token: auth.accessToken,
                oauth_nonce: nonce_generate(),
                oauth_timestamp: Math.floor(Date.now() / 1000),
                oauth_signature_method: 'HMAC-SHA1',
                oauth_version: '1.0',
                callback: 'cb' // This is crucial to include for jsonp implementation in AJAX or else the oauth-signature will be wrong.
            };

            var encodedSignature = oauthSignature.generate('GET', yelp_url, parameters, auth.consumerSecret, auth.accessTokenSecret);
            parameters.oauth_signature = encodedSignature;

            var errorTimeout = setTimeout(function() {
                alert("Something went wrong");
            }, 8000);

            $.ajax({
                url: yelp_url,
                data: parameters,
                cache: true, 
                dataType: 'jsonp',
                success: function(results) {
                    clearTimeout(errorTimeout);
                    url = results.url;
                    self.addInfowindow();
                },
                fail: function() {
                    alert("Problem occured!");
                }
            });
        };
    
    
    
	// Change view to selected place
	self.select = function () {

        if (self !== undefined) {
			self.closeInfowindow();
			self.selected(false);
		}

		self.selected(true);
        self.animation();
        self.yelp(businessId, self);

	};

    self.animation = function () {
        self.marker.addListener('click', toggleBounce(self));
    };

	self.init();
};



function toggleBounce(obj) 
{
    if (obj.marker.getAnimation() !== null) {
        obj.marker.setAnimation(null);
    } else {
        obj.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function nonce_generate(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

// Initialize google map
var myMap,
    marker;
function mapInit() {
    'use strict';
    
    var appView = new ViewModel();
    ko.applyBindings(appView);
    
	var initCenter = new google.maps.LatLng(34.066404, -118.296574);
	var mapOpts = {
		center: initCenter,
		zoom: 14
	};
	myMap = new google.maps.Map(document.getElementById('map'), mapOpts);
    
    appView.init();
}

var ViewModel = function () {
    'use strict';
	var self = this;
	self.filterText = ko.observable();
	self.filterList = ko.observableArray();
	self.currentLoc = ko.observable();

	// neighbourhood restaurants
	self.dining = ko.observableArray([
    new restaurantModel({name: Restaurants.restaurants[0].name, address: Restaurants.restaurants[0].address, latLng: new google.maps.LatLng(Restaurants.restaurants[0].lat, Restaurants.restaurants[0].lng)}, Restaurants.restaurants[0].businessId),
    new restaurantModel({name: Restaurants.restaurants[1].name, address: Restaurants.restaurants[1].address, latLng: new google.maps.LatLng(Restaurants.restaurants[1].lat, Restaurants.restaurants[1].lng)}, Restaurants.restaurants[1].businessId),
    new restaurantModel({name: Restaurants.restaurants[2].name, address: Restaurants.restaurants[2].address, latLng: new google.maps.LatLng(Restaurants.restaurants[2].lat, Restaurants.restaurants[2].lng)}, Restaurants.restaurants[2].businessId),
    new restaurantModel({name: Restaurants.restaurants[3].name, address: Restaurants.restaurants[3].address, latLng: new google.maps.LatLng(Restaurants.restaurants[3].lat, Restaurants.restaurants[3].lng)}, Restaurants.restaurants[3].businessId),
    new restaurantModel({name: Restaurants.restaurants[4].name, address: Restaurants.restaurants[4].address, latLng: new google.maps.LatLng(Restaurants.restaurants[4].lat, Restaurants.restaurants[4].lng)}, Restaurants.restaurants[4].businessId)
    ]);

	// Search and filter
	self.search = function (data) {
		var filter = data();
		self.filterList.removeAll();

		// Display all restaurants when no input in search box
		if (!filter) {filter = ""; }
		for (var i = 0, len = self.dining().length; i < len; i++) {
			if(self.dining()[i].name.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
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
		self.search(self.filterText);
	};
};
