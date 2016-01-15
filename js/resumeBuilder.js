// /*
// This is empty on purpose! Your code to build the resume will go here.
// */
//  var name = "Nick Maskell";
//  var role = "Web Developer";

//  var formattedName = HTMLheaderName.replace('%data%', name); 

//  var formattedRole =  HTMLheaderRole.replace('%data%', role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var bio = {
// 	"name": "Nick Maskell",
// 	"role": "Web Developer",
// 	"contacts": {
// 		"mobile": "021 326676",
// 		"email": "nrmaskell@gmail.com",
// 		"github": "github.io/nickmask"
// 	},
// 	"welcomeMessage": "Yellow there",
// 	"skills": [
// 		"Web development", "Being cool", "Other stuff"
// 		],
// 	"bioPic": "/images/nick.jpg"
// };

// var work = {
//     "jobs": [
//         {
//             "employer": "EDA",
//             "title": "Account Manager",
//             "dates": "November 2015 - Present",
//         },
//         {
//             "employer": "<Unilever></Unilever>",
//             "title": "Student",
//             "dates": "2012 - 2014",
//         },
//     ],
//     "display": function () {
//         for (var job in work.jobs) {
//             $('#workExperience').append(HTMLworkStart);

//             var workEmployer = HTMLworkEmployer.replace(DATA, work.jobs[job].employer);
//             var workTitle = HTMLworkTitle.replace(DATA, work.jobs[job].title);
//             var workDates = HTMLworkDates.replace(DATA, work.jobs[job].dates);
//             var workDescription = HTMLworkDescription.replace(DATA, work.jobs[job].description);
//             // jQuery( ":last" ) Selects the last matched element
//             $('.work-entry:last').append(workEmployer + workTitle, workDates, workDescription);
//             $('.work-entry:last').children('a').attr('href', work.jobs[job].url);
//         }
//     }
// };


// // var work = {
// // 	"jobs": [ 
// // 	{
// // 		"title": "Web developer",
// // 		"employer": "Dev Academy",
// // 		"years": "1"
// // 	},
// // 	{
// // 		"title": "Marketing Manager",
// // 		"employer": "Unilever",
// // 		"years": "3"	
// // 	}
// // 	]
// // };

// var education = {
// 	"Schools": [
// 	{
// 		"name": "AUT",
// 		"city": "Auckland",
// 		"degree": "Bbus",
// 		"major": ["marketing", "sales"]
// 		},
// 	{
// 		"name": "Onehunga High",
// 		"city": "Auckland",
// 		"years": "2003-2007"
// 		}
// 	]
// };

// var projects = {
// 	"title": "Sample Project 1",
// 	"date": "2015",
// 	"description": "I did this really cool project and it was great"
// };

// if (bio.skills.length > 0) {
// 	$("#header").append(HTMLskillsStart);

// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
// 	$("#skills").append(formattedSkill);
// 	 formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
// 	$("#skills").append(formattedSkill);
// 	 formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
// 	$("#skills").append(formattedSkill);
// };

// // for ( job in work.jobs) {
// // 	$("workExperience").append(HtmlworkStart);

// // 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
// // 	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
// // 	var formattedEmployerTitle = formattedEmployer + formattedTitle;

// // 	$(".work-entry:last").append(formattedEmployerTitle);
// // };

// // for (var job in work.jobs) {
// //             $('#workExperience').append(HTMLworkStart);

// //             var workEmployer = HTMLworkEmployer.replace(DATA, work.jobs[job].employer);
// //             var workTitle = HTMLworkTitle.replace(DATA, work.jobs[job].title);
// //             var workDates = HTMLworkDates.replace(DATA, work.jobs[job].dates);
// //             var workDescription = HTMLworkDescription.replace(DATA, work.jobs[job].description);
// //             // jQuery( ":last" ) Selects the last matched element
// //             $('.work-entry:last').append(workEmployer + workTitle, workDates, workDescription);
// //             $('.work-entry:last').children('a').attr('href', work.jobs[job].url);
/*
This is empty on purpose! Your code to build the resume will go here.
 */

/***
 *  Building JSON
 *
bio:
   name : string
   role : string
   contacts : an object with
         mobile: string
         email: string
         github: string
         twitter: string
         location: string
   welcomeMessage: string
   skills: array of strings
   biopic: url
   display: function
education
   schools: array of objects with
        name: string
        location: string
        degree: string
        majors: array of strings
        dates: integer (graduation date)
        url: string
   onlineCourses: array with
        title: string
        school: string
        date: integer (date finished)
        url: string
   display: function
work
   jobs: array of objects with
        employer: string
        title: string
        url: string
        location: string
        dates: string (works with a hyphen between them)
        description: string
   display: function
projects
   projects: array of objects with
         title: string
         url: string
         dates: string (works with a hyphen between them)
         description: string
         images: array with string urls
   display: function
 */

var DATA = "%data%";

var bio = {
    "name": "Nick Maskell",
    "role": "Web Developer",
    "contacts":[
        {
            "mobile": "021 326676",
            "email": "nrmaskell@gmail.com",
            "Github": "github.io/nickmask",
            "Twitter": "@nickmask",
            "location": "Wellington"
        }
    ],
    "welcomeMessage": "Coming from a marketing, sales and account management background, I am now training in Web Development to further my skills",
    "biopic": "images/nick.jpg",
    "skills": [
        "Web Development",
        "Marketing",
        "Sales",
        "Account Management",
        "Analytics",
    ],
    "display": function () {
        var bioName = HTMLheaderName.replace(DATA, bio.name);
        var bioRole = HTMLheaderRole.replace(DATA, bio.role);
        var bioImage = HTMLbioPic.replace(DATA, bio.biopic);
        var bioMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

        $('#header').prepend(bioRole).prepend(bioName).append(bioImage, bioMessage);
        $('#header').append(HTMLskillsStart);

        var bioSkills = HTMLskills.replace(DATA, bio.skills.join(' ,  ') + ' .');
        $('#skills').append(bioSkills);

        for (var contact in bio.contacts) {
            var bioMobile = HTMLmobile.replace(DATA, bio.contacts[contact].mobile);
            var bioEmail = HTMLemail.replace(DATA, bio.contacts[contact].email);
            var bioGithub = HTMLgithub.replace(DATA, bio.contacts[contact].Github);
            var bioLocation = HTMLlocation.replace(DATA, bio.contacts[contact].location);
            var bioTwitter = HTMLtwitter.replace(DATA, bio.contacts[contact].Twitter);
            $('#topContacts').append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
            $('#footerContacts').append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
        }
    }
};



var education = {
    "schools": [
        {
            "name": "Enspiral Dev Academy",
            "location": "Wellington",
            "majors": "Web Development",
            "dates": 2015
        },
        {
            "name": "AUT",
            "location": "Wellington",
            "degree": "Bbus",
            "majors": "Marketing, Sales",
            "dates": "2008 - 2011"
        },
    ],
    "display": function () {

    for (var school in education.schools) {
        $('#education').append(HTMLschoolStart);

        var eduName = HTMLschoolName.replace(DATA, education.schools[school].name);
        var eduDegree = HTMLschoolDegree.replace(DATA, education.schools[school].degree);
        var eduDates = HTMLschoolDates.replace(DATA, education.schools[school].dates);
        var eduLocation = HTMLschoolLocation.replace(DATA, education.schools[school].location);
        var eduMajor = HTMLschoolMajor.replace(DATA, education.schools[school].majors);
        $('.education-entry:last').append(eduName + eduDegree, eduDates, eduLocation, eduMajor);
        $('.education-entry:last').children('a').attr('href',  education.schools[school].url);
    }

    $('#education').append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {

        $('#education').append(HTMLschoolStart);
        var eduOnlineTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[course].title);
        var eduOnlineSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[course].school);
        var eduOnlineDate =
            HTMLonlineDates.replace(DATA, education.onlineCourses[course].dates);
        var eduURL = HTMLonlineURL.replace(DATA, education.onlineCourses[course].url);
        $('.education-entry:last').append(eduOnlineTitle + eduOnlineSchool, eduOnlineDate, eduURL);
        $('.education-entry:last').children('a').attr('href',  education.onlineCourses[course].url);
    }
}
};

var work = {
    "jobs": [
        {
            "employer": "Unilever",
            "title": "Account Manager",
            "url": "http://www.unilever.com",
            "dates": "2012 - 2014",
            "location": "Auckland",
            "description": "Category Assistant, Account Manager"
        },
        {
            "employer": "Rio Muchacho",
            "title": "Interim Marketing Manager",
            "url": "http://www.riomuchacho.com",
            "dates": "2015",
            "location": "Ecuador",
            "description": "Designed site, worked on marketing"
        }
    ],
    "display": function () {
        for (var job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);

            var workEmployer = HTMLworkEmployer.replace(DATA, work.jobs[job].employer);
            var workTitle = HTMLworkTitle.replace(DATA, work.jobs[job].title);
            var workDates = HTMLworkDates.replace(DATA, work.jobs[job].dates);
            var workDescription = HTMLworkDescription.replace(DATA, work.jobs[job].description);
            // jQuery( ":last" ) Selects the last matched element
            $('.work-entry:last').append(workEmployer + workTitle, workDates, workDescription);
            $('.work-entry:last').children('a').attr('href', work.jobs[job].url);
        }
    }
};

var projects = {
    "project": [
        {
            "title": "Sample Project",
            "dates": "2016",
            "description": "This is a sample product and there is really nothing there. ",
            "images": [
                "images/197x148.gif"
            ]
        }
    ],
    "display": function(){
	for (var project in projects.project){
		$('#projects').append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace(DATA,projects.project[project].title);
		var projectDates = HTMLprojectDates.replace(DATA,projects.project[project].dates);
		var projectDescription = HTMLprojectDescription.replace(DATA,projects.project[project].description);

		$('.project-entry:last').append(projectTitle,projectDates,projectDescription);
        $('.project-entry:last').children("a").attr("href", projects.project[project].url);

    if(projects.project[project].images.length !== 0){
        for (var image in projects.project[project].images) {
			var projectImage = HTMLprojectImage.replace(DATA,projects.project[project].images[image]);
			$('.project-entry:last').append(projectImage);
		}
    }else{
        $('.project-entry:last').append(HTMLprojectNoImage);
    }
	}
}
};

$(document).click(function(loc) {

  var x= loc.pageX;
  var y = loc.pageY;
});



bio.display();
work.display();
education.display();
projects.display();

$('#mapDiv').append(googleMap);