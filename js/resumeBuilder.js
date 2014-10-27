/**********
 *
 * BIO
 *
***********/

var bio = {
	"name" : "Shawn Roe",
	"role"  : "Web Developer",
	"welcomeMessage" : "Simplifying solar and making things better through the web.",
	"contacts" : {
		"email" : "shawn@shawnroe.com",
		"github" : "vultor",
		"twitter" : "@kunostories",
		"location" : "Gwangju, South Korea"
	},
	"bioPic": "images/sroe-headshot.jpg",
	"skills" : ["HTML5", "CSS3", "JS", "PHP", "Idea Man", "Educator", "Story-teller"]
}

// formatted
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

// prepend and appended to resume
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomMsg);

// contacts in footer as well
$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	//loop through and append skills 
	for(var i=0;i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}


/**********
 *
 * EDUCATION
 *
***********/

var education = {
	"schools": [
	  {
		"name": "HARVARD UNIVERSITY Extension School",
		"location": "Cambridge, MA, USA",
		"degree": "Masters",
		"major": "Liberal Arts in Information Technology",
		"dates": "2013-2018",
		"url": "http://www.extension.harvard.edu/"
	  },
	  {
		"name": "UNIVERSITY OF VIRGINIA",
		"location": "Charlottesville, VA, USA",
		"degree": "BA",
		"major": "Psychology",
		"dates": "2001-2005",
		"url": "http://www.virginia.edu/"
	  }
	],
	"onlineCourses": [
	  {
		"title": "jQuery",
		"school": "Code Academy",
		"dates": 2013,
		"url": "http://www.codecademy.com/en/tracks/jquery"
	  },
	  {
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud304"
	  },
	  {
		"title": "Customizing Bootstrap 3 with LESS",
		"school": "Lynda.com",
		"dates": 2014,
		"url": "http://www.lynda.com/sdk/Bootstrap-tutorials/Customizing-Bootstrap-3-LESS/161086-2.html"
	  }
	]
}

education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    
    var formattedURL = HTMLschoolURL.replace("%data%",education.schools[school].url);

    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);

    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);

    formattedName = formattedURL + formattedName + formattedDegree;
    $(".education-entry:last").append(formattedName);

    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }

  $("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
  		$("#education").append(HTMLschoolStart);
	    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);

	    var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);

	    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);

	    formattedOnline = formattedURL + formattedTitle + formattedSchool;
	    $(".education-entry:last").append(formattedOnline);
	}
}

// envoke the function
education.display();


/**********
 *
 * WORK
 *
***********/

var work = {
	"jobs": [
	  {
		"employer": "SRoeCo LLC",
		"title": "Owner/Founder",
		"location": "CA, USA",
		"dates": "2008-2014",
		"description": "Simplifying the solar installation process by providing solar knowledge, online calculators, and a sortable, searchable solar panel comparison table."
	  },
	  {
		"employer": "Chosun University",
		"title": "Assistant Professor",
		"location": "Gwangju, South Korea",
		"dates": 2014,
		"description": "Teaching English to University undergraduates and adult students at the Language Education Institute, and developing curriculum and classroom materials for a reading and discussion course."
	  },
	  {
		"employer": "Chonnam National University",
		"title": "English Instructor",
		"location": "Gwangju, South Korea",
		"dates": "2012-2013",
		"description": "Taught English to University professors, undergraduates and adult students at the Language Education Center at Chonnam National University."
	  },
	  {
		"employer": "Dongshin University",
		"title": "TESOL Instructor, Graduate School Professor, English Conversation Instructor",
		"location": "Naju, South Korea",
		"dates": "2010-2012",
		"description": "Trained TESOL certificate candidates on 'how to teach writing', assisted in the development of curriculum and material design for the course, taught IELTS speaking test preparation Graduate School students, conversational English to University undergraduates, and the highest level of speaking to adult Language Education Center students."
	  }
	]
}

// for in loop through jobs
work.display = function() {
  for (var job in work.jobs) {
    // new div for each job
    $("#workExperience").append(HTMLworkStart);

    // concatanate employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

// envoke the function
work.display();

/**********
 *
 * PROJECTS
 *
***********/

var projects = {
	"projects": [
	{
		"title": "SRoeCo Solar Website",
		"dates": "2008-2014",
		"description": "SRoeCo Solar is an independent, solar information website that provides objective, verifiable, solar information and seeks to present it in an easily-understandable way. It is committed to simplifying the solar installation process by providing solar knowledge, calculators, and a sortable, searchable solar panel comparison table. SRoeCo Solar simplifies solar to help the average person feel more comfortable making an informed decision to install solar panels. More solar is better.",
		"images": ["../portfolio/images/sroeco-solar-logo.png"],
		"url": "http://sroeco.com/solar"
	},
	{
		"title": "Sinful Treats Bakery",
		"dates": 2014,
		"description": "Sinful Treats Bakery is a sweet boutique bakery located in Hampton Roads, Virginia. Chef Stephanie Rolla (Chef Steph) bakes sinfully delicious desserts from scratch just like your Grandma used to make... except she's not your grandma. Sinful Treats specializes in baked goods like cupcakes, Monster Cookies, birthday and wedding cakes with unique flavor combinations like her famous (with adults) Grand Marnier cake or Guiness cake. Kids love things like our Ninja Turtle birthday cake, and elephant-shaped sugar cookies.",
		"images": ["../portfolio/images/sinful-treats-logo.png"],
		"url": "http://eatsinfultreats.com"
	}
	]
}

projects.display = function() {
    for (project in projects.projects) {
    	
    	// create div for each project
        $("#projects").append(HTMLprojectStart);

        var formattedURL = HTMLprojectURL.replace("%data%",projects.projects[project].url);
        
        // only show image if is exists
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = formattedURL + HTMLprojectImage.replace("%data%",projects.projects[project].images[image]); 
                $(".project-entry:last").append(formattedImage);
            }
        }

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);

        var formattedTitle = formattedURL + formattedTitle;
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

    }
}
// run projects display
projects.display();

/**********
 *
 * EXTRAS
 *
***********/

// internationalize name
function inName() {
    var aName = bio.name.trim().split(" ");
    aName[0] = aName[0].slice(0,1).toUpperCase() + aName[0].slice(1).toLowerCase();
    aName[1] = aName[1].toUpperCase();

    return aName[0] + " " + aName[1];
}

// display map
$("#mapDiv").append(googleMap);