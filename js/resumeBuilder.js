var bio =
{
    "name" : "Cody Nicholson",
    "role" : "Undergrad at DePaul University",
    "contacts" :
    {
        "github" : "Cody-Nicholson96",
        "twitter" : "@CodyLiam7",
        "location" : "Chicago",
        "linkedIn" : "https://www.linkedin.com/in/codynicholson"
    },
    "welcomMessage" : "Welcome to my resume",
    "skills" :
    [
        "Java", "Python", "Git", "HTML", "CSS", "JavaScript", "Linux", "Bootstrap", "Responsive Web Design", "Selenium",
        "SQL", "Leadership", "Acceptance Testing", "Microsoft Excel", "SharePoint", "Agile Methodologies"
    ],
    "bioPic" : "../images/codyHead.jpg"
};

var work =
{
    "jobs" :
        [
            {
                "employer": "Textura",
                "title": "Software Development Engineer in Test",
                "location": "Chicago, IL",
                "dates": "June 2015 - May 2016",
                "description": "Automated test cases to make sure that our products were running smoothly, without errors. " +
                "Created methods for various web pages to facilitate the work of myself and other automation engineers. " +
                "Adapted to a fast paced work environment by learning various skills such as Java, Eclipse, SVN, Selenium, XPath, and SQL."
            }
        ]
};

work.display = function()
{
    for (job in work.jobs)
    {
        // Creates a div with class work-entry
        $("#workExperience").append(HTMLworkStart);
        // Creates variables to hold the job information for each job
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        // Adds the job info to the newly created div
        $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedDescription);
    }
};

var education =
{
    "schools" :
    [
        {
            "name" : "DePaul University",
            "location" : "Chicago, IL",
            "degree" : "Bachelor's Degree in Computer Science expected in 2018",
            "majors" : ["Computer Science"],
            "dates" : "Class of 2018"
        }
    ],
    "onlineCourses" :
    [
        {
            "title" : "",
            "school" : "Udacity",
            "date" : "2016",
            "url" : "Udacity.com"
        }
    ]
};

education.display = function()
{
    for (edu in education.schools)
    {
        // Creates a div with class education-entry
        $("#education").append(HTMLschoolStart);
        // Creates variables to hold the edu information for each school
        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        // Adds the edu info to the newly created div
        $(".education-entry:last").append(formattedTitle).append(formattedDates).append(formattedLocation).append(formattedMajors);
    }
};


var projects =
{
    "projs" :
    [
        {
            "title" : "MyProject",
            "dates" : "2016",
            "description" : "A project I made",
            "images" : "images/197x148.gif"
        }
    ]
};
/*
projects.display = function()
{
    for (project in projects.projs)
    {
        // Creates a div with class work-entry
        $("#projects").append(HTMLprojectStart);
        // Creates variables to hold the project information for each job
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projs[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projs[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projs[project].description);
        // Adds the Employment description to the newly created div
        $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
        if (projects.projs[project].images.length > 0)
        {
            for (img in projects.projs[project].images)
            {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projs[project].images[img]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(HTMLskillsStart);
$("#topContacts")/*.append(formattedEmail)*/.append(formattedGithub).append(formattedlinkedIn).append(formattedTwitter).append(formattedLocation);
$("#footerContacts")/*.append(formattedEmail)*/.append(formattedGithub).append(formattedlinkedIn).append(formattedTwitter).append(formattedLocation);


// Runs the display functions
work.display();
/*projects.display();*/
education.display();


// Adds all my skills to index.html
for(i = 0; i < bio.skills.length; i++)
{
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
}


// Click log
$(document).click(function(loc)
{
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
});


// Location
function locationizer(work_obj)
{
    var locationArray = [];
    for(job in work_obj.jobs)
    {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));


// Change name to international format
function inName(name_obj)
{
    name_obj = name_obj.trim().split(" ");
    console.log(name_obj);
    name_obj[1] = name_obj[1].toUpperCase();
    name_obj[0] = name_obj[0].slice(0,1).toUpperCase() + name_obj[0].slice(1).toLowerCase();
    return name_obj[0] + " " + name_obj[1];
}
$('#main').append(internationalizeButton);