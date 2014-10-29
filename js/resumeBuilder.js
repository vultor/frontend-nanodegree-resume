/**********
 *
 * BIO
 *
***********/

var bio = {
	"name" : "Shawn Roe",
	"roles"  : ["Web Developer", "Teacher"],
	"welcomeMessage" : "Simplifying solar and making things better through the web.",
	"contacts" : {
		"email" : "shawn@shawnroe.com",
		"github" : "vultor",
		"twitter" : "@kunostories",
		"location" : "Gwangju, South Korea"
	},
	"webPic": "images/sroe-ocraroe-100.jpg",
	"teacherPic": "images/sroe-headshot-100.jpg",
	"skills" : ["HTML5", "CSS3", "JS", "PHP", "Teacher"]
}

// formatted
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole0 = HTMLheaderRole.replace("%data%", bio.roles[0]);
var formattedRole1 = HTMLheaderRole.replace("%data%", bio.roles[1]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

// teacher pic
var formattedBioPic = HTMLbioPic.replace("%data%", bio.teacherPic);
$("#header").append(formattedBioPic);
$("img.biopic:last").addClass("teacher");

// web developer pic
var formattedBioPic = HTMLbioPic.replace("%data%", bio.webPic);
$("#header").append(formattedBioPic);
$("img.biopic:last").addClass("web");
$("img.dark:last").removeClass("dark");

$("#header img").mouseenter(function() {
	$("#header img").addClass("dark");
	$(this).removeClass("dark");
});

// prepend and appended to resume
$("#header").prepend(formattedRole1);
$("#header").prepend(formattedRole0);
	$("#header span.role:last").hide();
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
// $("#header").append(formattedWelcomMsg);

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
		"minor": "Astronomy",
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
	  },
	  {
		"employer": "LASC and POLY Language Schools",
		"title": "Manager, Head of Human Resources, TOEIC &amp; TOEFL Instructor",
		"location": "Irvine, CA, USA",
		"dates": "2009-2010",
		"description": "Managed 12 employees, responsible for hiring all positions for 3 campuses. Taught TOEIC, TOEFL, English grammar, reading, writing, speaking and listening to foreign students mostly from Asian countries."
	  },
	  {
		"employer": "SAIC (Scientific Applications International Corporation)",
		"title": "Website Manager, Intern",
		"location": "Charlottesville, VA, USA",
		"dates": "2004-2005",
		"description": "Maintained websites, created an online database of books on sustainability, created Technology Assessments for US Army's Environmental Requirements and Technology Assessments (AERTA) Database, edited drafts with MS Word, improved PowerPoint presentations, and organized materials for US Army sustainability workshop presentations."
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

// change depending on role
$("#header img.web").mouseenter(function() {
	$("#header span.role:first").show();
	$("#header span.role:last").hide();
	$(".work-entry").slideDown();
	formattedRole = HTMLheaderRole.replace("%data%", bio.roles[0]);
});

$("#header img.teacher").mouseenter(function() {
	$("#header span.role:first").hide();
	$("#header span.role:last").show();
	$("#workExperience :nth-child(2)").slideUp();
	$("#workExperience :nth-child(7)").slideUp();
	formattedRole = HTMLheaderRole.replace("%data%", bio.roles[1]);
});



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
		"description": "SRoeCo Solar is an independent, solar information website that provides objective, verifiable, solar information and seeks to present it in an easily-understandable way. Built on WordPress with a custom theme.",
		"images": ["images/sroeco-solar-layout.png"],
		"url": "http://sroeco.com/solar"
	},
	{
		"title": "Sinful Treats Bakery",
		"dates": 2014,
		"description": "Sinful Treats Bakery is a sweet boutique bakery located in Hampton Roads, Virginia.Built on WordPress with a custom theme.",
		"images": ["images/sinful-treats-layout.png"],
		"url": "http://eatsinfultreats.com"
	},
	{
		"title": "Michael Simon Art",
		"dates": 2014,
		"description": "An online art portfolio for the American artist Michael Anthony Simon. Built from scratch on Twitter Bootstrap.",
		"images": ["images/simon-art-layout.png"],
		"url": "http://vultor.com/simonart"
	},
	{
		"title": "Sunshot Solar VA",
		"dates": 2013,
		"description": "Sunshot Solar Virginia promotes the use of solar energy in Virginia. Built from scratch on Twitter Bootstrap with custom-built interactive calculator.",
		"images": ["images/hand-sun-logo.png"],
		"url": "http://sunshotsolar.com"
	}
	]
}

projects.display = function() {
    //for (project in projects.projects) {

	$("#projects").append(HTMLprojectRow);

    for (var i=0; i<projects.projects.length; i++) {
    	// create div for each project
        $(".projects-row").append(HTMLprojectStart);

        var formattedURL = HTMLprojectURL.replace("%data%",projects.projects[i].url);

        // only show image if is exists
        if (projects.projects[i].images.length > 0) {
            for (image in projects.projects[i].images) {
                var formattedImage = formattedURL + HTMLprojectImage.replace("%data%",projects.projects[i].images[image]); 
                $(".project-entry:last").append(formattedImage);
            }
        }
        else {
        	$(".project-entry:last").append(formattedURL);
        }

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);

        var formattedTitle = formattedURL + formattedTitle;
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
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

// click locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

// display map
$("#mapDiv").append(googleMap);

/* visualization from http://bl.ocks.org/clayzermk1/9142407
$('#skillsH3').prepend('<h4 id="now" class="pull-right">Current Time:</h4>')

var now = new Date(d3.time.year.floor(new Date()));

var spacetime = d3.select('#now');
var width = 160,
    height = 160,
    radius = Math.min(width, height);

var radii = {
  "sun": radius / 8,
  "earthOrbit": radius / 2.5,
  "earth": radius / 32,
  "moonOrbit": radius / 16,
  "moon": radius / 96
};

// Space
var svg = spacetime.append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Sun
svg.append("circle")
  .attr("class", "sun")
  .attr("r", radii.sun)
  .style("fill", "rgba(255, 204, 0, 1.0)");

// Earth's orbit
svg.append("circle")
  .attr("class", "earthOrbit")
  .attr("r", radii.earthOrbit)
  .style("fill", "none")
  .style("stroke", "rgba(255, 204, 0, 0.25)");

// Current position of Earth in its orbit
var earthOrbitPosition = d3.svg.arc()
  .outerRadius(radii.earthOrbit + 1)
  .innerRadius(radii.earthOrbit - 1)
  .startAngle(0)
  .endAngle(0);
svg.append("path")
  .attr("class", "earthOrbitPosition")
  .attr("d", earthOrbitPosition)
  .style("fill", "rgba(255, 204, 0, 0.75)");

// Earth
svg.append("circle")
  .attr("class", "earth")
  .attr("r", radii.earth)
  .attr("transform", "translate(0," + -radii.earthOrbit + ")")
  .style("fill", "rgba(113, 170, 255, 1.0)");

// Time of day
var day = d3.svg.arc()
  .outerRadius(radii.earth)
  .innerRadius(0)
  .startAngle(0)
  .endAngle(0);
svg.append("path")
  .attr("class", "day")
  .attr("d", day)
  .attr("transform", "translate(0," + -radii.earthOrbit + ")")
  .style("fill", "rgba(53, 110, 195, 1.0)");

// Moon's orbit
svg.append("circle")
  .attr("class", "moonOrbit")
  .attr("r", radii.moonOrbit)
  .attr("transform", "translate(0," + -radii.earthOrbit + ")")
  .style("fill", "none")
  .style("stroke", "rgba(113, 170, 255, 0.25)");

// Current position of the Moon in its orbit
var moonOrbitPosition = d3.svg.arc()
  .outerRadius(radii.moonOrbit + 1)
  .innerRadius(radii.moonOrbit - 1)
  .startAngle(0)
  .endAngle(0);
svg.append("path")
  .attr("class", "moonOrbitPosition")
  .attr("d", moonOrbitPosition(now))
  .attr("transform", "translate(0," + -radii.earthOrbit + ")")
  .style("fill", "rgba(113, 170, 255, 0.75)");

// Moon
svg.append("circle")
  .attr("class", "moon")
  .attr("r", radii.moon)
  .attr("transform", "translate(0," + (-radii.earthOrbit + -radii.moonOrbit) + ")")
  .style("fill", "rgba(150, 150, 150, 1.0)");

// Update the clock every second
setInterval(function () {
  now = new Date();
  
  var interpolateEarthOrbitPosition = d3.interpolate(earthOrbitPosition.endAngle()(), (2 * Math.PI * d3.time.hours(d3.time.year.floor(now), now).length / d3.time.hours(d3.time.year.floor(now), d3.time.year.ceil(now)).length));
  
  var interpolateDay = d3.interpolate(day.endAngle()(), (2 * Math.PI * d3.time.seconds(d3.time.day.floor(now), now).length / d3.time.seconds(d3.time.day.floor(now), d3.time.day.ceil(now)).length));
  
  var interpolateMoonOrbitPosition = d3.interpolate(moonOrbitPosition.endAngle()(), (2 * Math.PI * d3.time.hours(d3.time.month.floor(now), now).length / d3.time.hours(d3.time.month.floor(now), d3.time.month.ceil(now)).length));
  
  d3.transition().tween("orbit", function () {
    return function (t) {
      // Animate Earth orbit position
      d3.select(".earthOrbitPosition").attr("d", earthOrbitPosition.endAngle(interpolateEarthOrbitPosition(t)));

      // Transition Earth
      d3.select(".earth")
        .attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")");

      // Animate day
      // Transition day
      d3.select(".day")
        .attr("d", day.endAngle(interpolateDay(t)))
        .attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")");
      
      // Transition Moon orbit
      d3.select(".moonOrbit")
        .attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")");

      // Animate Moon orbit position
      // Transition Moon orbit position
      d3.select(".moonOrbitPosition")
        .attr("d", moonOrbitPosition.endAngle(interpolateMoonOrbitPosition(t)))
        .attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")");
      
      // Transition Moon
      d3.select(".moon")
        .attr("transform", "translate(" + (radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + radii.moonOrbit * Math.sin(interpolateMoonOrbitPosition(t) - moonOrbitPosition.startAngle()())) + "," + (-radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + -radii.moonOrbit * Math.cos(interpolateMoonOrbitPosition(t) - moonOrbitPosition.startAngle()())) + ")");
    };
  });
}, 1000);
$('svg').attr("class", "pull-right");
*/