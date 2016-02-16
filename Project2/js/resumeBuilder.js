/**
    First-part: Information to be added
*/

/*basic information of me*/
var bio = {
	"name" : "Xinwei Wang",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "xinweiwa@usc.edu",
		"github" : "ohmygithub",
		"mobile" : "+1 573-818-5612",
		"location" : "Los Angeles"
	},
	"biopic" : "images/mypicture.jpg",
	"welcomeMessage" : "You Came! You Saw! -- I Conquered!",
	"skills" : ["Java", "JavaScript", "Github", "HTML5", "CSS3", "Bootstrap", "JQuery", "JSON", "Matlab", "SAS"]
};

/*my education background(including schools and online courses)*/
var education = {
	"schools" : [{
			"name" : "East China University of Science and Technology",
			"degree" : "Bachelor",
			"majors" : ["Biological Engineering"],
			"dates" : '08-2010~06-2014',
			"location" : "Shanghai",
            "url" : "http://www.ecust.edu.cn/s/2/t/31/main.htm"
		},
		{
			"name" : "University of Southern California",
			"degree" : "Master of Science",
			"majors" : "Biomedical Engineering",
			"dates" : '01-2015~12-2016',
			"location" : "Los Angeles",
            "url" : "http://www.usc.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Nanodegree",
			"school" : "Udacity",
			"date" : '2016',
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
        {
			"title" : "Senior Front-End Nanodegree",
			"school" : "Udacity",
			"date" : '2016',
			"url" : "https://www.udacity.com/course/senior-web-developer--nd802"
		}
	]
};

/*my work experience*/
var work = {
	"jobs" : [
		{
			"title" : "Front-End Developer",
			"dates" : '2017',
			"description" : "this job is really awesome",
			"employer" : "Udacity",
            "url" : "https://www.udacity.com/",
            "location" : "Silicon Valley"
		},
		{
			"title" : "Full-Stack Web Developer",
			"dates" : '2018',
			"description" : "this job pays me a lot",
			"employer" : "Google",
            "url" : "https://www.google.com/",
            "location" : "Silicon Valley"
		}
	]
};

/*projects I have done*/
var projects = {
	"projects" : [{
			"title" : "Mockup-Design",
			"dates" : '01-2016',
			"images" : ["images/project1.jpg"],
			"description" : "I was provided a design mockup as a PDF-file and must replicate that design in HTML and CSS. I developed a responsive website that will display images, descriptions and links to each of the portfolio projects I completed through the course of the Front-End Web Developer nanodegree.",
            "githuburl" : "https://github.com/ohmygithub/Front-End/tree/master/Project1"
		},
		{
			"title" : "Resume-JavaScript",
			"dates" : '01-2016',
			"description" : "In this project, I built my resume by writing a JS script that combined my personal information with pre-written HTML and CSS templates to generate my resume.",
			"images" : ["images/project2.jpg"],
            "githuburl" : "https://github.com/ohmygithub/Front-End/tree/master/Project2"
		},
		{
			"title" : "Classic Arcade Game Clone",
			"dates" : '02-2016',
			"description" : "I was provided visual assets and a game loop engine; using these tools, I added a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
			"images" : ["images/project3.jpg"],
            "githuburl" : "https://github.com/ohmygithub/Front-End/tree/master/Project3"
		}
	]
};



/**
    Second-part : Add all the information to the page
*/

/*add header and footer*/
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);              $("#topContacts").append(HTMLmobile.replace('%data%',bio.contacts.mobile)).append(HTMLemail.replace('%data%',bio.contacts.email)).append(HTMLgithub.replace('%data%',bio.contacts.github)).append(HTMLlocation.replace('%data%',bio.contacts.location));
    $("#cont").append(HTMLbioPic.replace('%data%',bio.biopic)).append(HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage));
    if(bio.skills.length > 0) {
    $("#skl").append(HTMLskillsStart);
        for (var skill in bio.skills){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        };
    }
 $("#footerContacts").append(HTMLmobile.replace('%data%',bio.contacts.mobile)).append(HTMLemail.replace('%data%',bio.contacts.email)).append(HTMLgithub.replace('%data%',bio.contacts.github)).append(HTMLlocation.replace('%data%',bio.contacts.location));
}

/*add work experience*/
work.display = function() {
    for(var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer).replace('#',work.jobs[job].url);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedEmployerTitle = formattedTitle + formattedEmployer + formattedLocation;
        $(".location-text:last").append(formattedLocation);
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription+'<br>');
     }
}

/*add projects*/
projects.display = function() {
    for(var project in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title).replace("#",projects.projects[project].githuburl);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $('.project-entry:last').append(formattedTitle + " " + formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $('.project-entry:last').append(formattedDescription);
        if(projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image].img);
                $('.project-entry:last').append(formattedImage);
            }
        }        
    }
}

/*add education background(including schools and online courses)*/
education.display = function() {
    for(var school in education.schools) {
        $('#education').append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%",education.schools[school].name).replace('#',education.schools[school].url);
        var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var schoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var schoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $('.education-entry:last').append(schoolName + " " + schoolDegree + " " + schoolMajor);
        $(schoolDates).insertAfter($('#education').children('.education-entry:last').children('a'));
        $(schoolLocation).insertAfter($('#education').children('.education-entry:last').children('em'));
    }
    $('#education').append(HTMLonlineClasses);
    for(var course in education.onlineCourses) {
        $('#education').append(HTMLschoolStart);
        var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
        var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var onlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
        var onlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
        $('.education-entry:last').append(onlineTitle + " " + onlineSchool);
        $('#education').children('.education-entry:last').append(onlineDates);
        $('.education-entry:last').append('<em>'+onlineURL+'<em><br>');
    }
}

/*set image width*/
function imgWidth() {
    $('img').css('width','20%');
}

/*set internationalize button*/
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
	return name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
}
function interbutton(){
    $("#main").append(internationalizeButton);
    $("#btn").click(function(){
        $("#name").text(inName(bio.name)); 
    });
}

/*add map(Where I've Lived)*/
function displaymap() {
    $("#mapDiv").append(googleMap);
}


/**
    Third-part : Display all the information that added
*/

$("<div id='cont'></div>").insertAfter("#topContacts");
$("<div id='skl'></div>").insertAfter("#cont");
education.display();
projects.display();
work.display();
imgWidth();
interbutton();
bio.display();
displaymap();
