var bio =
{
    "name" : "Cody Nicholson",
    "role" : "Senior Software Engineer",
    "contacts" :
    {
        "email" : "codynicholson96@gmail.com",
        "github" : "CodyNicholson",
        "location" : ["Chicago, IL", "Hoffman Estates, IL", "Schaumburg, IL", "Bronzeville, Chicago, IL"],
        "linkedIn" : "codynicholson"
    },
    "welcomeMessage" : "This is my résumé webpage where you can find all the details about my skills, experience, and background",
    "skills" :
    [
        "Kotlin", "Java", "Python", "JavaScript", "TypeScript", "C#", 
        "Postgres", "Prometheus", "Cassandra", "MongoDB", "Informix 4GL", "MySQL",
        "Spring Boot", "Kafka", "Spark", "React", "Redux", "Ajax", "jQuery", "ASP.NET Core", "Pandas", "Angular", "D3js", "Tensorflow", "Computer Vision", 
        "Heroku", "Jenkins", "Azure", "AWS", "Docker", 
        "Grafana", "Splunk", "Data Mining", "ETL", "Linux", "Agile", "Git", "JIRA"
    ],
    "bioPic" : "images/codyHead.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location[0]);

$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(HTMLskillsStart).append(formattedwelcomeMessage).prepend(HTMLreturnHome);
$("#topContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn).append(formattedLocation);
$("#footerContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn).append(formattedLocation);

// Adds all my skills to the header
for(i = 0; i < bio.skills.length; i++)
{
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
}

var work =
{
    "jobs" :
        [
            {
                "employer": "Peapod Digital Labs",
                "title": "Software Engineer II",
                "location": "Chicago, IL",
                "dates": "August 2020 - Present",
                "description": "Designed and developed new features for a legacy Informix 4GL order fulfillment application. Collaborated with engineering leadership to modernize procedural apps to be event-driven using Kafka, Java Spring Boot Micro Services, and Postgres.",
                "link": "https://www.peapoddigitallabs.com/home"
            },
            {
                "employer": "HackerU",
                "title": "Lead Full Stack Development Instructor",
                "location": "Chicago, IL",
                "dates": "December 2020 - Present",
                "description": "Facilitated the career development of students I had the privilege of instructing in the areas of web design, web development, artificial intelligence, and software engineering.",
                "link": "https://hackerusa.com/full-stack-development-coding/"
            },
            {
                "employer": "Chicago Artist Guide",
                "title": "Engineering Team Lead",
                "location": "Chicago, IL",
                "dates": "December 2020 - Present",
                "description": "Led the engineering effort to create a centralized place for Chicago theatre companies, individual artists, and communities to come together using tools including: React, NodeJS, AWS, Postgres, Java, Kotlin, Spring Boot. We remove common obstacles so artists can focus on what’s most important: making art. Hired new developers to join our team.",
                "link": "https://chiartistguide.weebly.com/the-team.html"
            },
            {
                "employer": "2U Inc.",
                "title": "Data Science Substitute Instructor",
                "location": "Chicago, IL",
                "dates": "October 2018 - December 2020",
                "description": "Led the class in learning tools including: VBA, Python, SQL, JS, ETL, Machine Learning and more. Delivered content in a format that was easy to digest and appealed to different types of learners. Provided interview questions and created a job hunting guide to supplement class material. Published articles to supplement class material.",
                "link": "https://www.trilogyed.com/"
            },
            {
                "employer": "2U Inc.",
                "title": "Data Science Teaching Assistant",
                "location": "Chicago, IL",
                "dates": "April 2018 - December 2020",
                "description": "Taught as one of three teachers in multiple cohorts of a six-month data science bootcamp. Provided detailed feedback while grading homework and helping with in-class activities. Demoed side projects I had worked on that used the tools we were learning. Facilitated the creation of a comfortable learning environment.",
                "link": "https://www.trilogyed.com/"
            },
            {
                "employer": "Arity",
                "title": "Software Engineer",
                "location": "Chicago, IL",
                "dates": "August 2019 - August 2020",
                "description": "Implemented micro-services to enroll users in many of Arity's products using: Kotlin, Java, Spring Boot, PCF, Kafka, Postgres, and Cassandra. Led Training Committee to better provide engineers with the resources they need to do their best work. Led the Young Professionals Organization in building a sense of community and facilitating career development.",
                "link": "https://www.arity.com/"
            },
            {
                "employer": "Arity",
                "title": "Data Engineer",
                "location": "Chicago, IL",
                "dates": "February 2019 - August 2019",
                "description": "Developed software to process telematic data and provide a driving score to users insured by our clients so they can more accurately predict the risk associated with driving behavior. Processed data using tools including: Python, Scala, Golang, Flink, Spark, Kafka, and Hadoop. Implemented streaming using Flink to replace nightly batch jobs.",
                "link": "https://www.arity.com/"
            },
            {
                "employer": "Perficient",
                "title": "Technical Consultant",
                "location": "Chicago, IL",
                "dates": "June 2018 - December 2018",
                "description": "Delivered customer-facing end-to-end software solutions for clients using a wide range of technologies including: C#, PHP, JavaScript, ASP.NET Core, Entity Framework, Angular, MySQL. Led presentations on project progress to clients where I shared insights, questioned design decisions, explained blockers, and gave estimates on the completion time for the project.",
                "link": "https://www.perficient.com/"
            },
            {
                "employer": "CDK Global",
                "title": "Software Engineer Intern",
                "location": "Hoffman Estates, IL",
                "dates": "June 2017 - August 2017",
                "description": "Developed software to complete various stories I received during our two-week sprint cycles using various frontend, backend, version control, project management, and unit testing technologies. Led a Hack-a-thon team in creating a web application to determine RGB values from given color names using data mining techniques.",
                "link": "http://www.cdkglobal.com/"
            },
            {
                "employer": "CNA Financial (Contract)",
                "title": "Lead Software Engineer in Test",
                "location": "Chicago, IL",
                "dates": "October 2016 - June 2017",
                "description": "Developed a software system to perform automated functional testing of many of the company’s projects. Created an excel spreadsheet generator that works alongside the automated testing system to export test results in a format that the business team could understand. Brought in new employees and taught them how to automate acceptance tests.",
                "link": "https://www.cna.com/"
            },
            {
                "employer": "CNA Financial (Contract)",
                "title": "Acceptance Testing Lead",
                "location": "Chicago, IL",
                "dates": "September 2016 - October 2016",
                "description": "Expedited the acceptance testing of our company's software systems by consolidating defects, creating project testing status reports, and putting together presentations. Recruited new employees and facilitated their growth within the company.",
                "link": "https://www.cna.com/"
            },
            {
                "employer": "Textura Corporation",
                "title": "Software Development Engineer in Test Intern",
                "location": "Deerfield, IL",
                "dates": "June 2015 - May 2016",
                "description": "Automated test cases to make sure that our products were running smoothly, without errors. Created methods for various web pages to facilitate the work of myself and other Software Development Engineers in Test. Adapted to a fast paced work environment by learning various skills such as Java, Eclipse, SVN, Selenium, XPath, JIRA, Jenkins, and SQL.",
                "link": "http://www.texturacorp.com/"
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
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title).replace("%link%", work.jobs[job].link);
        var formattedEmployerTitle = formattedTitle +formattedEmployer;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        // Adds the job info to the newly created div
        $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
    }
};

var projects =
{
    "projs" :
    [
        {
            "title" : "Project Task Board Application",
            "dates" : "January 2019",
            "description" : "This Project Task Board Application I built to get more experience working with Java Spring Boot - specifically connecting a React frontend to a Spring backend RESTFul API. " +
                "The project allows users to log tasks with their titles, acceptance criteria, and statues. Tasks have CRUD operations and update immediately without needing any additional calls to the database thanks to Redux.",
            "images" : ["images/projectboard_1.jpg","images/projectboard_2.jpg"],
            "captions": ["The home page with a list of the posts","This is an example of the details page for an individual post where you can see the comments"],
            "link": "https://github.com/CodyNicholson/Project_Board_Java_Spring_Boot_Project"
        },
        {
            "title" : "Blogging Web Application",
            "dates" : "January 2019",
            "description" : "I built this blogging application to get more experience with Ruby On Rails. From the home page you can click the 'Create New Post' button to add a post or you can click the title of any post in the " +
                "list of existing posts to view the details and comments on that post. From the post details page you can also add new comments, delete comments, edit the post, or delete the post which will also delete all the comments for that post.",
            "images" : ["images/rubyrailsblogging1.jpg","images/rubyrailsblogging2.jpg","images/rubyrailsblogging3.jpg"],
            "captions": ["The home page with a list of the posts","This is an example of the details page for an individual post where you can see the comments","This is the page you get to when you click 'Create New Post' on the Home page"],
            "link": "https://github.com/CodyNicholson/Ruby_On_Rails_Blog_Project"
        },
        {
            "title" : "Tetris Web Application",
            "dates" : "July 2017",
            "description" : "This is a Tetris game I programmed using HTML5 Canvas and JavaScript. The game randomly generates Tetris pieces for the player to place in the Tetris arena using the arrow keys to move them and the "+
                "'q' and 'w' keys to rotate them. When the player fills in an entire row they are rewarded with points. Every 50 points the player receives causes the pieces to drop faster.",
            "images" : ["images/tetrisMessage.jpg","images/tetrisGame.jpg"],
            "captions": ["This is the message that displays when the page loads","This is a picture of a person playing the game"],
            "link": "https://github.com/CodyNicholson/Tetris_Web_App_Project"
        },
        {
            "title" : "Selenium Functional Automated Testing Framework",
            "dates" : "April 2017",
            "description" : "After two years of being a Software Development Engineer in Test, this project represents a high-level view of my capabilities as an automated testing engineer. The framework I have created " +
                "is meant to be used to automate the functional testing of web applications using Selenium, Java, TestNG, and the Apache POI library for Java. After running a test you will receive an excel spreadsheet " +
                "with detailed information about any of the failures that may have occurred. If a test fails you will also get a screenshot of what exactly the browser was looking at upon failure. Using this approach " +
                "makes it very easy to run tests and track down errors at a speed unattainable by manual testers or even HP UFT. Also, Selenium does not require licensing like many other test automation software.",
            "images" : ["images/seleniumTesting.jpg","images/seleniumConsoleOutput.jpg","images/seleniumExcelOutput.jpg"],
            "captions": ["Selenium is controlling the browser and is clicking the 'Github' button","The TestNG output from the two tests I ran","The output excel document with the results"],
            "link": "https://github.com/CodyNicholson/Selenium_Automated_Testing_Project/"
        },
        {
            "title" : "Self-Driving Car Nanodegree Projects",
            "dates" : "March 2017 - ",
            "description" : "This is a link to a website where you can find all of the projects I completed while enrolled in the Self-Driving Car Nanodegree program. In these projects I used various skills including: " +
                "python, image processing, computer vision, neural networks, deep learning, behavioral cloning, transfer learning, data mining, C++, Kalman filters, sensor fusion, Markov models, localization software development, " +
                "motion models, particle filters, PID controllers, vehicle models, and model predictive controllers among other technologies.",
            "images" : ["images/bcloning_Drive_Test.jpg","images/highlighted_lane.jpg","images/test_pipeline.jpg"],
            "captions": ["I used deep learning to train a model to drive a car around a simulated track all by itself",
                "Using computer vision and some math I was able to create a program that detects and highlights lane lines in a given image",
                "Using some more math I created a program that can track the location of vehicles in a given video"],
            "link": "https://codynicholson.github.io/Self-Driving_Car_Projects/"
        },
        {
            "title" : "Enodo",
            "dates" : "January 2017 - March 2017",
            "description" : "The Enodo web application was my capstone project at DePaul University applying towards my bachelor's degree in computer science. The application is a tool for researchers to use to create surveys, view results, and collect data. " +
                "I led the team as the project manager after my proof of concept was approved by all the other team members. In addition to managing the team I also designed and implemented our database, " +
                "most of the front-end, and a large portion of the business logic for the Home, Users, and Surveys pages. I also worked on performance optimization by creating web APIs that read data from our Users, Surveys, and Survey Results tables on " +
                "the client-side to save server-side resources. I learned how to do all of this by taking Mosh Hamedani's ASP.NET MVC 5 Course on Udemy.",
            "images" : ["images/enodoHomepage.jpg","images/enodoTakeSurvey.jpg","images/enogoSunburst.jpg"],
            "captions": ["The Enodo homepage","This is an example of someone taking a survey and using drag and drop to order the options","Our D3 sunburst data visualization for the survey results"],
            "link": "https://github.com/CodyNicholson/Enodo_Project/"
        },
        {
            "title" : "Traffic Simulation Project",
            "dates" : "October 2016 - November 2016",
            "description" : "In the Fall quarter of 2016 I took my first graduate level class as a third-year undergraduate student at DePaul University: SE450 Object Oriented Software Development. The Traffic Simulation assignment was the final project for this course. " +
                "I implemented the Factory Method, Visitor, Null Object, and State Design Patterns in this project. All of the details concerning the work I did and the decisions I made on this project can be found in my Github repository that you can get to by following the project title link.",
            "images" : ["images/ObjectOrientedTrafficProblem.jpg"],
            "captions": ["This is what the program looks like when you run it, you can see my debug log in the console"],
            "link": "https://github.com/CodyNicholson/Software_Development/tree/master/Object_Oriented_Software_Development/Traffic_Simulation_Project"
        },
        {
            "title" : "Portfolio Website",
            "dates" : "September 2016 - October 2016",
            "description" : "Designed and developed my portfolio website to promote my professional image. It includes a homepage with a cover letter and a résumé page with all my skills, experience, and background information. The skills I used to complete this project were: HTML, CSS, " +
                "JavaScript, jQuery, Bootstrap, Responsive Web Design, Linux, and Git.",
            "images" : ["images/homepage.jpg", "images/resumePage.jpg", "images/resumePage2.jpg"],
            "captions": ["My portfolio homepage","The top of my résumé page with my skills and welcome message","The bottom of my résumé page with the places I have lived and worked displayed on google maps"],
            "link": "https://github.com/CodyNicholson/CodyNicholson.github.io"
        }
    ]
};

projects.display = function()
{
    for (p in projects.projs)
    {
        // Creates a div with class work-entry
        $("#projects").append(HTMLprojectStart);
        // Creates variables to hold the project information for each job
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projs[p].title).replace("%link%", projects.projs[p].link);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projs[p].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projs[p].description);
        // Adds the Employment description to the newly created div
        $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
        if (projects.projs[p].images.length > 0)
        {
            for (i in projects.projs[p].images)
            {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projs[p].images[i]).replace("%link%", projects.projs[p].link);
                formattedImage = formattedImage.replace("%caption%", projects.projs[p].captions[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

var education =
{
    "schools" :
    [
        {
            "name" : "DePaul University",
            "location" : "Chicago, IL",
            "degree" : "Bachelor of Computer Science",
            "description" : "I graduated DePaul University with a Bachelor of Science (BS) degree in Computer Science. During my time at DePaul I was a member of: The National Society of Collegiate Scholars, Computer Science Society, The National Society for Leadership and Success, and DePaul Virtual Reality Society.",
            "dates" : "2014-2018",
            "link": "https://www.depaul.edu/"
        },
        {
            "name" : "Self-Driving Car Engineer Nanodegree",
            "location" : "Udacity.com",
            "degree" : "Udacity",
            "description" : "In the fall of 2016 I applied to participate in Udacity's Self-Driving Car Nanodegree program because I wanted to learn "+
                "cutting edge skills that I could use to change the world. I was accepted into the program in January of 2017. I will be learning all "+
                "about how to design and develop the software that makes cars drive themselves, and I expect to finish this program in the winter of 2017-2018.",
            "dates" : "2017-2018",
            "link": "https://www.udacity.com/drive"
        },
        {
            "name" : "The Complete ASP.NET MVC 5 Course",
            "location" : "Udemy.com",
            "degree" : ["Udemy"],
            "description" : "I was disappointed that I didn't get the chance to work much with a Microsoft program stack at my university, so I enrolled in this class "+
                "on Udemy to learn how to develop enterprise applications using C#, Entity Framework, ASP.NET, and other Microsoft tools.",
            "dates" : ["August 2017"],
            "link": "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Eudemy%2Ecom%2Fcertificate%2FUC-H8LCRVVB%2F&urlhash=nE7G&trk=profile_certification_title"
        },
        {
            "name" : "Front-End Web Developer Nanodegree",
            "location" : "Udacity.com",
            "degree" : "Udacity",
            "description" : "I always aspired to be a full-stack developer because I wanted to gain as much experience as I could in both the front and "+
                "back-end of applications. My first step in my journey towards full-stack development was to learn as much about the front-end as I could, "+
                "so I started by taking classes in Udacity's Front-End Web Developer Nanodegree program.",
            "dates" : "2016-2018",
            "link": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "name" : "James B. Conant High School",
            "location" : "Hoffman Estates, IL",
            "degree" : ["High School Diploma"],
            "description" : "In high school I was an average student who ran cross country, track, and occasionally performed in gymnastics. I graduated "+
                "with a 3.0 GPA and a 27 on my ACT. Once I got to college I started taking my education much more seriously.",
            "dates" : ["2010-2014"],
            "link": "http://chs.d211.org/"
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
        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("%link%", education.schools[edu].link);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedMajors = HTMLschoolDescription.replace("%data%", education.schools[edu].description);
        // Adds the edu info to the newly created div
        $(".education-entry:last").append(formattedTitle).append(formattedDegree).append(formattedDates).append(formattedLocation).append(formattedMajors);
    }
};

var honorsAndAwards =
{
    "honors" :
        [
            {
                "title": "Eagle Scout",
                "dates": "July 2014",
                "location": "Schaumburg, IL",
                "description": "After developing my leadership skills over six years I finally made it to the highest rank in scounting: Eagle. "
                    + "What this means is that I have extensive experience in working with others to achieve common goals, "
                    + "resolve conflicts, and facilitate the growth of others.",
                "link": "http://www.scouting.org/"
            },
            {
                "title": "National Society of Collegiate Scholars",
                "dates": "September 2015",
                "location": "DePaul University",
                "description": "I was accepted into this organization because of my academic achievements at DePaul University",
                "link": "http://www.nscs.org/"
            },
            {
                "title": "National Society of Leadership and Success",
                "dates": "September 2016",
                "location": "DePaul University",
                "description": "I was accepted into this organization because of my leadership experience and my academic achievements at DePaul University",
                "link": "https://www.societyleadership.org/"
            }
        ]
};

honors.display = function()
{
    for (honor in honorsAndAwards.honors)
    {
        // Creates a div with class honor-entry
        $("#honors").append(HTMLhonorStart);
        // Creates variables to hold the honor information for each honor
        var formattedTitle = HTMLhonorTitle.replace("%data%", honorsAndAwards.honors[honor].title).replace("%link%", honorsAndAwards.honors[honor].link);
        var formattedDates = HTMLhonorDates.replace("%data%", honorsAndAwards.honors[honor].dates);
        var formattedLocation = HTMLhonorLocation.replace("%data%", honorsAndAwards.honors[honor].location)
        var formattedDescription = HTMLhonorDescription.replace("%data%", honorsAndAwards.honors[honor].description);
        // Adds the honor info to the newly created div
        $(".honor-entry:last").append(formattedTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
    }
};

var comServe =
{
    "cService" :
    [
        {
            "title": "Eagle Project",
            "dates": "April 2014 - August 2014",
            "description": "Led an effort using 30+ volunteers to complete major phases of capital improvement including the demolition, removal, reconstruction, "
                + "and addition of a handicap ramp for a sidewalk at the Church of the Holy Spirit. The improvement, besides looking better and having less tripping hazards, "
                + "was the addition of a handicap ramp to allow people in wheelchairs to access the Church. I also led two different fund-raising efforts that resulted in "
                + "the Church receiving an 85% discount on the total cost of the project.",
            "location": "Schaumburg, IL",
            "images": ["images/eagleProject1.jpg", "images/eagleProject2.jpg", "images/eagleProject3.jpg"],
            "captions": ["The sidewalk after I lead the demolition team in breaking it up into small pieces that we could carry", "A small portion of the team and I at the project site", "The finished sidewalk with the added handicap ramp"]
        }
    ]
};

comServe.display = function()
{
    for (p in comServe.cService)
    {
        // Creates a div with class work-entry
        $("#comService").append(HTMLcomServeStart);
        // Creates variables to hold the project information for each job
        var formattedTitle = HTMLcomServeTitle.replace("%data%", comServe.cService[p].title);
        var formattedDates = HTMLcomServeDates.replace("%data%", comServe.cService[p].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", comServe.cService[p].description);
        var formattedLocation = HTMLprojectLocation.replace("%data%", comServe.cService[p].location)
        // Adds the Employment description to the newly created div
        $(".comServe-entry:last").append(formattedTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
        if (comServe.cService[p].images.length > 0)
        {
            for (i in comServe.cService[p].images)
            {
                var formattedImage = HTMLcomServeImage.replace("%data%", comServe.cService[p].images[i]);
                formattedImage = formattedImage.replace("%caption%", comServe.cService[p].captions[i]);
                $(".comServe-entry:last").append(formattedImage);
            }
        }
    }
};

// Runs the display functions
work.display();
projects.display();
education.display();
honors.display();
comServe.display();

// Add googleMap element to the mapDiv
$("#mapDiv").append(googleMap);

// Log where users click on my website
$(document).click(function(loc)
{
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
});

// Get locations from jobs array to plot on googleMap
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
