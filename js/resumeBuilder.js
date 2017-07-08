var bio =
{
    "name" : "Cody Nicholson",
    "role" : "Undergrad at DePaul University",
    "contacts" :
    {
        "email" : "codynicholson96@gmail.com",
        "github" : "CodyNicholson",
        "twitter" : "@CodyLiam7",
        "location" : ["Schaumburg, IL", "Lincoln Park, IL"],
        "linkedIn" : "codynicholson"
    },
    "welcomeMessage" : "My name is Cody Nicholson and this is my résumé webpage where you can find all the details about my skills, experience, and background",
    "skills" :
    [
        "Java", "C#", "Python", "TensorFlow", "Artificial Neural Networks", "Keras", "Computer Vision", "Image Processing", "C++", "Design Patterns", "Git", "HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Jasmine",
        "Agile Methodologies", "ASP.NET MVC5", "Entity Framework", "Bootstrap", "jQuery", "SQL", "Linux", "Responsive Web Design", "Selenium Webdriver", "Acceptance Testing", "Leadership"
    ],
    "bioPic" : "../images/codyHead.jpg"
};

var work =
{
    "jobs" :
        [
            {
                "employer": "CDK Global",
                "title": "Full-Stack Development Intern",
                "location": "Hoffman Estates, IL",
                "dates": "June 2017 - August 2017",
                "description": "Engineered software to complete stories I received during our two week development sprint cycles using technologies "+
                "including: AngularJS, C#, JavaScript, TypeScript, Visual Studio, ASP.NET MVC5, .NET Core, HTML, CSS, Jasmine.",
                "link": "http://www.cdkglobal.com/"
            },
            {
                "employer": "CNA Financial",
                "title": "Software Engineer",
                "location": "Chicago, IL",
                "dates": "October 2016 - June 2017",
                "description": "Engineered a software system to preform automated functional testing of many of the company’s projects. " +
                    "Created an excel spreadsheet generator that works alongside the functional automated testing system to export test results " +
                    "in a format that the business team could understand. Brought in new employees and taught them how to automate user stories.",
                "link": "https://www.cna.com/"
            },
            {
                "employer": "CNA Financial",
                "title": "Acceptance Testing Lead",
                "location": "Chicago, IL",
                "dates": "September 2016 - October 2016",
                "description": "Played an important role including the acceptance testing of our company's software systems by consolidating defects, " +
                    "creating project testing status reports, and putting together presentations. I also recruited new employees and facilitated their " +
                    "growth within the company. The tools I used included: Java, Selenium, Design Patterns, Intellij, and SVN.",
                "link": "https://www.cna.com/"
            },
            {
                "employer": "Textura Corporation",
                "title": "Software Development Engineer in Test Intern",
                "location": "Deerfield, IL",
                "dates": "June 2015 - May 2016",
                "description": "Automated test cases to make sure that our products were running smoothly, without errors. " +
                    "Created methods for various web pages to facilitate the work of myself and other automation engineers. " +
                    "Adapted to a fast paced work environment by learning various skills such as Java, Eclipse, SVN, Selenium, XPath, and SQL.",
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

var education =
{
    "schools" :
    [
        {
            "name" : "DePaul University",
            "location" : "Chicago, IL",
            "degree" : "B.S. in Computer Science",
            "studied" : "Computer Science with a concentration on Software Engineering",
            "dates" : "2018",
            "link": "https://www.depaul.edu/"
        },
        {
            "name" : "James B. Conant High School",
            "location" : "Hoffman Estates, IL",
            "degree" : ["High School Diploma"],
            "studied" : "General Education",
            "dates" : ["2014"],
            "link": "http://chs.d211.org/"
        }
    ],
    "onlineCourses" :
    [
        {
            "title" : ["Responsive Web Design Fundamentals, How to use Git and Github", "Intro to Java Programming", "Programming Foundations with Python", "Responsive Images",
                        "Intro to HTML and CSS", "JavaScript Basics", "Intro to jQuery", "Software Development Process"],
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
        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("%link%", education.schools[edu].link);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].studied);
        // Adds the edu info to the newly created div
        $(".education-entry:last").append(formattedTitle).append(formattedDates).append(formattedDegree).append(formattedLocation).append(formattedMajors);
    }
};


var projects =
{
    "projs" :
    [
        {
            "title" : "Vehicle Detection Project",
            "dates" : "May 2017",
            "description" : "I created this project (part of the Udacity Self-Driving Car Nanodegree program) to teach a self-driving car to detect other vehicles on the road. First, I performed a Histogram of Oriented"+
                " Gradients (HOG) feature extraction on a labeled training set of images and trained a Linear SVM classifier based on these features. Next, I implemented a sliding-window technique that used my trained"+
                " classifier to search for vehicles in images or each frame of a video. I then ran my pipeline on a video stream and created a heat map of recurring detections frame by frame to reject outliers and follow detected vehicles.",
            "images" : ["../images/hog_example.jpg","../images/example_vehicle_and_not_vehicle.jpg","../images/heatmap.jpg","../images/test_pipeline.jpg"],
            "captions": ["In this picture you can see what an image looks like next to its histogram of oriented gradients","This is an example of a training sample used to teach my SVC Classifier the difference between an image with and an image without a car in it","This is an image of a heat map that is used to filter out false positives in the car detecting process","Finally - after using all of those techniques - this is an example of a single frame after going through my pipeline"],
            "link": "https://github.com/CodyNicholson/Vehicle_Detection_Project"
        },
        {
            "title" : "Advanced Lane Line Finding Project",
            "dates" : "May 2017",
            "description" : "In this project I wrote an algorithm to teach a self-driving car to identify lanes. To do this, I first computed the camera calibration matrix and distortion coefficients given a set of "+
                "chessboard images. Then, I applied a distortion correction to raw images. I used color transforms, gradients, etc., to create a thresholded binary image. Then I applied a perspective transform to change "+
                "the binary image perspective to a 'birds-eye view'. I detected the lane pixels and fit it to find the lane boundary. Then I determined the curvature of the lane and vehicle position with respect to center."+
                " Then I warped the detected lane boundaries back onto the original image. Lastly, I outputted a visual display of the lane boundaries and numerical estimation of lane curvature and vehicle position.",
            "images" : ["../images/highlighted_lane.jpg","../images/curved_img_before_perspective_transform.jpg","../images/warped_test_curved.jpg"],
            "captions": ["This is a single frame of the output of my project, the highlighted lane","This is an example of an image before being warped using the computer vision perspective transform","This image is the same image as the one before this one, it has just been zoomed into and stretched out to a bird's-eye view"],
            "link": "https://github.com/CodyNicholson/Advanced_Lane_Line_Finding_Project"
        },
        {
            "title" : "Behavioral Cloning Project",
            "dates" : "May 2017",
            "description" : "In this project I used the simulator provided by Udacity to collect data of good driving behavior. I then built a convolution neural network in Keras that predicts steering angles from images."+
                "Then I trained and validated the model with a training and validation set. After that I tested that the model successfully drives around the track without leaving the road, and posted a video of this on "+
                "youtube that there is a link for in the project summary on github. Lastly, I summarized the results with a written report.",
            "images" : ["../images/bcloning_Drive_Test.jpg","../images/center_lane_driving.jpg","../images/training_vs_validation.jpg"],
            "captions": ["In this image the car is driving itself, and in the console you can see the values for the car's angle and speed values","This is an example of a training image that was used to teach the model what good driving looks like","In this image you can see that the mean squared error is only a bit lower when testing on the validation set than it was for the training set"],
            "link": "https://github.com/CodyNicholson/Behavioral_Cloning_Project"
        },
        {
            "title" : "Traffic Sign Classifier",
            "dates" : "April 2017 - May 2017",
            "description" : "In this project I used a deep convolutional neural network to classify images of German traffic signs. The model architecture is inspired by the LeNet architecture created by Yann LeCun." +
                " I did this by preprocessing my dataset, constructing a model architecture, tuning my hyper-parameters, and training my model. I made this project as a student enrolled in the Self-Driving Car "+
                "Nanodegree program.",
            "images" : ["../images/stopSign.jpg","../images/traffic_sign_model_architecture.jpg","../images/lenet.jpg"],
            "captions": ["This is just one example of the 42 traffic signs my project can be used to classify","This image shows my model architecture at a high level","My model architecture is based off of this model architecture created by Yann LeCun called 'LeNet'"],
            "link": "https://github.com/CodyNicholson/Traffic_Sign_Classifier_Project"
        },
        {
            "title" : "Selenium Functional Automated Testing Framework",
            "dates" : "April 2017",
            "description" : "After two years of being a Software Development Engineer in Test, this project represents a high-level view of my capabilities as an automated testing engineer. The framework I have created " +
                "is meant to be used to automate the functional testing of web applications using Selenium, Java, TestNG, and the Apache POI library for Java. After running a test you will receive an excel spreadsheet " +
                "with detailed information about any of the failures that may have occurred. If a test fails you will also get a screenshot of what exactly the browser was looking at upon failure. Using this approach " +
                "makes it very easy to run tests and track down errors at a speed unattainable by manual testers or even HP UFT. Also, Selenium does not require licensing like many other test automation software.",
            "images" : ["../images/seleniumTesting.jpg","../images/seleniumConsoleOutput.jpg","../images/seleniumExcelOutput.jpg"],
            "captions": ["Selenium is controlling the browser and is clicking the 'Github' button","The TestNG output from the two tests I ran","The output excel document with the results"],
            "link": "https://github.com/CodyNicholson/Selenium_Functional_Automated_Testing"
        },
        {
            "title" : "Finding Lane Lines Project",
            "dates" : "March 2017",
            "description" : "The Finding Lane Lines Project was the first project I completed as a part of the Self-Driving Car Nanodegree Program offered by Udacity. In this project I programmed in python using the computer vision 2 library. I read in " +
                "images of roads, identified the lane lines, and highlighted them in red. This is important because we can teach self-driving cars to stay between these lines. " +
                "I did this by reading in each picture, gray scaling it to eliminate noise, applying the Gaussian blur to make the objects in the image more general, detecting the gradient with the Canny edge detection algorithm to find the lines, masking the image so that " +
                "we only look at the area we are interested in, finding the Hough Lines, filtering out the lines we don't want by looking only at lines with a certain slope, and finally highlighting the lines we found red.",
            "images" : ["../images/solidWhiteRight.jpg","../images/solidWhiteRightprocessed.jpg","../images/solidYellowLeft.jpg","../images/solidYellowLeftprocessed.jpg"],
            "captions": ["The solid white right lane line picture before processing","The solid white right lane line picture after processing","The solid yellow left lane line picture before processing","The solid yellow left lane line picture after processing"],
            "link": "https://github.com/CodyNicholson/Finding_Lane_Lines"
        },
        {
            "title" : "Enodo",
            "dates" : "January 2017 - March 2017",
            "description" : "The Enodo web application was my capstone project at DePaul University applying towards my bachelor's degree in computer science. The application is a tool for researchers to use to create surveys, view results, and collect data. " +
                "I led the team as the project manager after my proof of concept was approved by all the other team members. In addition to managing the team I also designed and implemented our database, " +
                "most of the front-end, and a large portion of the business logic for the Home, Users, and Surveys pages. I also worked on performance optimization by creating web APIs that read data from our Users, Surveys, and Survey Results tables on " +
                "the client-side to save server-side resources. I learned how to do all of this by taking Mosh Hamedani's ASP.NET MVC 5 Course on Udemy.",
            "images" : ["../images/enodoHomepage.jpg","../images/enodoUsers.jpg","../images/enodoTakeSurvey.jpg","../images/enogoSunburst.jpg"],
            "captions": ["The Enodo homepage","The data table with all of our users populated using a webAPI on the client side","This is an example of someone taking a survey and using drag and drop to order the options","Our D3 sunburst data visualization for the survey results"],
            "link": "https://github.com/CodyNicholson/Capstone_Project"
        },
        {
            "title" : "Traffic Simulation Project",
            "dates" : "October 2016 - November 2016",
            "description" : "In the Fall quarter of 2016 I took my first graduate level class as a third-year undergraduate student at DePaul University: SE450 Object Oriented Software Development. The Traffic Simulation assignment was the final project for this course. " +
                "I implemented the Factory Method, Visitor, Null Object, and State Design Patterns in this project. All of the details concerning the work I did and the decisions I made on this project can be found in my Github repository that you can get to by following the project title link.",
            "images" : ["../images/ObjectOrientedTrafficProblem.jpg"],
            "captions": ["This is what the program looks like when you run it, you can see my debug log in the console"],
            "link": "https://github.com/CodyNicholson/Software_Development/tree/master/Object_Oriented_Software_Development/Traffic_Simulation_Project"
        },
        {
            "title" : "Portfolio Website",
            "dates" : "September 2016 - October 2016",
            "description" : "Designed and developed my portfolio website to promote my professional image. It includes a homepage with a cover letter and a résumé page with all my skills, experience, and background information. The skills I used to complete this project were: HTML, CSS, " +
                "JavaScript, jQuery, Bootstrap, Responsive Web Design, Linux, and Git.",
            "images" : ["../images/homepage.jpg", "../images/resumePage.jpg", "../images/resumePage2.jpg"],
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

var honorsAndAwards =
{
    "honors" :
        [
            {
                "title": "Eagle Scout",
                "dates": "July 2014",
                "location": "Schaumburg, IL",
                "description": "After developing my leadership skills over six years I finally made it to the rank of Eagle."
                    + "What this means is that I have extensive experience in working with others to achieve common goals,"
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location[0]);

var comServe =
{
    "cService" :
    [
        {
            "title": "Eagle Project",
            "dates": "April 2014 - August 2014",
            "description": "Led an effort using 30+ volunteers to complete major phases of capital improvement including the demolition, removal, reconstruction,"
                + "and addition of a handicap ramp for a sidewalk at the Church of the Holy Spirit. The improvement, besides looking better and having less tripping hazards,"
                + "was the addition of a handicap ramp to allow people in wheelchairs to access the Church. I also led two different fund-raising efforts that resulted in"
                + "the Church receiving an 85% discount on the total cost of the project.",
            "location": "Schaumburg, IL",
            "images": ["../images/eagleProject1.jpg", "../images/eagleProject2.jpg", "../images/eagleProject3.jpg"],
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

$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(HTMLskillsStart).append(formattedwelcomeMessage).prepend(HTMLreturnHome);
$("#topContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn)/*.append(formattedTwitter)*/.append(formattedLocation);
$("#footerContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn)/*.append(formattedTwitter)*/.append(formattedLocation);


// Runs the display functions and enables Google Maps
work.display();
projects.display();
education.display();
honors.display();
comServe.display();

$("#mapDiv").append(googleMap);

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
