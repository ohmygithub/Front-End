/**
    First-part: Information to be added
*/

/*basic information of me*/
var skills = ["Java", "JavaScript", "HTML5", "CSS3", "Bootstrap", "JQuery", "JSON", "Matlab", "SAS"];
var bio = {
	"name" : "Xinwei Wang",
	"role" : "Web Developer",
	"contactInfo" : {
		"email" : "xinweiwa@usc.edu",
		"github" : "ohmygithub",
		"mobile" : "+1 573-818-5612",
		"location" : "Los Angeles"
	},
	"pictureURL" : "images/mypicture.jpg",
	"welcomeMessage" : "You Came! You Saw! -- I Conquered!",
	"skills" : skills
};

/*my education background(including schools and online courses)*/
var education = {
	"schools" : [
		{
			"name" : "East China University of Science and Technology",
			"degree" : "Bachelor",
			"major" : "Biological Engineering",
			"dates" : "Aug. 2010 - Jun. 2014",
			"location" : "Shanghai",
            "schoolurl" : "http://www.ecust.edu.cn/s/2/t/31/main.htm"
		},
		{
			"name" : "University of Southern California",
			"degree" : "Master of Science",
			"major" : "Biomedical Engineering",
			"dates" : "Jan. 2015 - Dec. 2016",
			"location" : "Los Angeles",
            "schoolurl" : "http://www.usc.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Nanodegree",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
        {
			"title" : "Senior Front-End Nanodegree",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "https://www.udacity.com/course/senior-web-developer--nd802"
		}
	]
};


/**
    Second-part : Add all the information to the page
*/

/*my work experience*/
var work = {
//	"jobs" : [
//		{
//			"title" : "Front-end developer",
//			"dates" : "2017",
//			"description" : "this job is about blablabla",
//			"employer" : "some great company"
//		},
//		{
//			"title" : "Full-stack Web Developer",
//			"dates" : "2018",
//			"description" : "this job is blablabla",
//			"employer" : "another great company"
//		}
//	]
};

/*projects I have done*/
var projects = {
	"projects" : [
		{
			"title" : "Mockup-Design",
			"dates" : "Jan. 2016",
			"images" : [
                {
                    img : "images/project1.jpg"
                }
            ],
			"description" : "I was provided a design mockup as a PDF-file and must replicate that design in HTML and CSS. I developed a responsive website that will display images, descriptions and links to each of the portfolio projects I completed through the course of the Front-End Web Developer nanodegree.",
            "githuburl" : "https://github.com/ohmygithub/Front-End/tree/master/Project1"
		},
		{
			"title" : "Resume-JavaScript",
			"dates" : "Jan. 2016",
			"description" : "In this project, I built my resume by writing a JS script that combined my personal information with pre-written HTML and CSS templates to generate my resume.",
			"images" : [
                {
                    img : "images/project2.jpg"
                }
            ],
            "githuburl" : "https://github.com/ohmygithub/Front-End/tree/master/Project2"
		}
	]
};


/*add header*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*add contact information*/
$("#topContacts").append(HTMLmobile.replace('%data%',bio.contactInfo.mobile));
$("#topContacts").append(HTMLemail.replace('%data%',bio.contactInfo.email));
$("#topContacts").append(HTMLgithub.replace('%data%',bio.contactInfo.github));
$("#topContacts").append(HTMLlocation.replace('%data%',bio.contactInfo.location));
$("#header").append(HTMLbioPic.replace('%data%',bio.pictureURL));
$("#header").append(HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage));

/*add skills at a glance*/
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in skills){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    };
}

/*add work experience*/
function displayWork(){
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkTitle.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedTitle + formattedEmployer;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        
     }
}
displayWork();

/*add projects*/
projects.display = function() {
    for(project in projects.projects) {
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
projects.display();

/*add education background(including schools and online courses)*/
function edu() {
    for(school in education.schools) {
        $('#education').append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%",education.schools[school].name).replace('#',education.schools[school].schoolurl);
        var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var schoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var schoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
        $('.education-entry:last').append(schoolName + " " + schoolDegree + " " + schoolMajor);
        $(schoolDates).insertAfter($('#education').children('.education-entry:last').children('a'));
        $(schoolLocation).insertAfter($('#education').children('.education-entry:last').children('em'));
    }
    $('#education').append(HTMLonlineClasses);
    for(course in education.onlineCourses) {
        $('#education').append(HTMLschoolStart);
        var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
        var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var onlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var onlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
        $('.education-entry:last').append(onlineTitle + " " + onlineSchool);
        $('#education').children('.education-entry:last').append(onlineDates);
        $('.education-entry:last').append('<em>'+onlineURL+'<em><br>');
    }
}
edu();

/*set image width*/
$('img').css('width','20%');

/*set internationalize button*/
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
	return name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
}
$("#main").append(internationalizeButton);
$("#btn").click(function(){
   $("#name").text(inName(bio.name)); 
});

$("#footerContacts").append(HTMLmobile.replace('%data%',bio.contactInfo.mobile));
$("#footerContacts").append(HTMLemail.replace('%data%',bio.contactInfo.email));
$("#footerContacts").append(HTMLgithub.replace('%data%',bio.contactInfo.github));
$("#footerContacts").append(HTMLlocation.replace('%data%',bio.contactInfo.location));

/*set map(Where I've Lived)*/
$("#mapDiv").append(googleMap);
