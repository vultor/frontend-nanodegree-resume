var bio = {
	"name" : "Shawn Roe",
	"role"  : "Web Developer",
	"welcomeMessage" : "Simplifying solar and making things better through the web.",
	"contact" : {
		"email" : "shawn@shawnroe.com",
		"github" : "vultor",
		"twitter" : "@kunostories",
		"location" : "South Korea"
	},
	"bioPic": "images/sroe-headshot.jpg",
	"skills" : ["HTML5", "CSS3", "JS", "PHP", "Business Vision Consultant", "Educator", "Story-teller", "Pitching", "Hitting HR's"]
}

var education = {
	"schools": [
	  {
		"name": "HARVARD UNIVERSITY Extension School",
		"location": "Cambridge, MA, USA",
		"degree": "Masters",
		"major": ["Liberal Arts in Information Technology"],
		"dates": "2013-2018",
		"url": "http://www.extension.harvard.edu/"
	  },
	  {
		"name": "UNIVERSITY OF VIRGINIA",
		"location": "Charlottesville, VA, USA",
		"degree": "BA",
		"major": ["Psychology"],
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

var work = {
	"jobs": [
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

var projects = {
	"projects": [
	{
		"title": "SRoeCo Solar Website",
		"dates": "2008-2014",
		"description": "SRoeCo Solar is an independent, solar information website that provides objective, verifiable, solar information and seeks to present it in an easily-understandable way. It is committed to simplifying the solar installation process by providing solar knowledge, calculators, and a sortable, searchable solar panel comparison table. SRoeCo Solar simplifies solar to help the average person feel more comfortable making an informed decision to install solar panels. More solar is better.",
		"images": ["http://www.sroeco.com/solar/sroeco_solar_title.png"]
	},
	{
		"title": "Sinful Treats Bakery",
		"dates": 2014,
		"description": "Sinful Treats Bakery is a sweet boutique bakery located in Hampton Roads, Virginia. Chef Stephanie Rolla (Chef Steph) bakes sinfully delicious desserts from scratch just like your Grandma used to make… except she’s not your grandma. Sinful Treats specializes in baked goods like cupcakes, Monster Cookies, birthday and wedding cakes with unique flavor combinations like her famous (with adults) Grand Marnier cake or Guiness cake. Kids love things like our Ninja Turtle birthday cake, and elephant-shaped sugar cookies.",
		"images": ["http://eatsinfultreats.com/test/wp-content/uploads/2014/02/sinful-treats-logo320x191.png"]
	}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomMsg);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}


function displayWork() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
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

displayWork();

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]); 
                $(".project-entry:last").append(formattedImage);
            }

        }
 
    }
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

// bio.display()
// education.display()
// work.display()
// portfolio.display()
// map.display()