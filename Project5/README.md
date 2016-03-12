## Website Performance Optimization portfolio project

# How to run
Download the entire directory, open html files with your browser. You can scale the map, click the marker on the map, search exist location.


# Instructions of Doing the project
You will develop a single page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this map including highlighted locations, third-party data about those locations and various ways to browse the content.

# How will I complete this Project?

Review our course JavaScript Design Patterns.

Download the Knockout framework. Knockout must be used to handle list, filter, and any other information on the page that is subject to changing state. Things that should not be handled by knockout: anything the map api is used for, creating markers, tracking their click events, making the map, refreshing the map.

Write code required to add a full-screen map to your page using the Google Maps API. For sake of efficiency, the map API should be called only once.

Write code required to display map markers identifying at least 5 locations that you are interested in within this neighborhood. Your app should display those locations by default when the page is loaded.

Implement a list view of the set of locations defined in step 4.

Provide a filter option that uses an input field to filter both the list view and the map markers displayed by default on load. The list view and the markers should update accordingly in real-time. Providing a search function through a third-party API is not enough to meet specifications.

Add functionality using third-party APIs to provide information when a map marker or list view entry is clicked (ex. Yelp reviews, Wikipedia, Flickr images, etc). Note that StreetView and Places don't count as an additional 3rd party API because they are libraries included in the Google Maps API. If you need a refresher on making AJAX requests to third-party servers, check out our Intro to AJAX course.

Add functionality to animate a map marker when either the list item associated with it or the map marker itself is selected.

Add functionality to open an infoWindow with the information described in step 7 when either a location is selected from the list view or its map marker is selected directly.

The app's interface should be intuitive to use. For example, the input text area to filter locations should be easy to locate. It should be easy to understand what set of locations is being filtered. Selecting a location via list item or map marker should cause the map marker to bounce or in some other way animate to indicate that the location has been selected and associated info window should open above map marker with additional information.

Error Handling: In case of error (e.g. in a situation where a third party api does not return the expected result) we expect your webpage to do one of the following: A message is displayed notifying the user that the data can't be loaded, OR There are no negative repercussions to the UI. Note: Please note that we expect students to handle errors if the browser has trouble initially reaching the 3rd-party site as well. For example, imagine a user is using your neighborhood map, but her firewall prevents her from accessing the Instagram servers. Here is a reference article on how to block websites with the hosts file. It is important to handle errors to give users a consistent and good experience with the webpage. Read this blogpost to learn more .Some JavaScript libraries provide special methods to handle errors. For example: refer to .fail() method discussed here if you use jQuery's ajax() method. We strongly encourage you to explore ways to handle errors in the library you are using to make API calls.