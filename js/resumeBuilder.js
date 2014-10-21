var name = "Shawn Roe";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName).append(formattedRole);

var skills = ["aweseomness", "HTML", "teaching", "JS"];

// $("#main").append(skills);

var bio = {
	"name" : name,
	"role"  : role,
	"contact" : {
		"email" : "shawn@shawnroe.com",
		"github" : "vultor",
		"twitter" : "@kunostories",
		"Location" : "South Korea"
	}
	"logoURL" : "/vultor.png",
	"welcome" : "Hello World!",
	"skills" : skills
};

$("#main").append(bio);