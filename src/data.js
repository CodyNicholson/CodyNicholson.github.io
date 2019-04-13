const data =
{
	"bio": {
		"name": "Cody Nicholson",
		"role": "Software Engineer",
		"contacts": {
			"email": "codynicholson96@gmail.com",
			"github": "CodyNicholson",
			"location": "Chicago, IL",
			"linkedIn": "/in/codynicholson"
		},
		"welcomeMessage": "This is my résumé webpage where you can find all the details about my skills, experience, and background",
		"skills": [
			"Kafka", "Java", "C#", "Python", "TensorFlow", "Keras", "Computer Vision", "Image Processing", "C++", "Design Patterns", "Git", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Angular", "Jasmine",
			"Agile Methodologies", "ASP.NET MVC 5", "Entity Framework", "Bootstrap", "jQuery", "MySQL", "Linux", "Selenium Webdriver", "Acceptance Testing", "Leadership"
		],
		"bioPic": "https://imgur.com/OG1Mdc8.jpg",
		"buttonLinks": [
			["Download Résumé","https://drive.google.com/open?id=17B6AVFMMvX8CV8cx7DWSdJjvh4SG1-Ul"]
		]
	},
	"jobs": [
			{
					"employer": "Arity",
					"title": "Software Engineer",
					"location": "Chicago, IL",
					"dates": "February 2019 - Present",
					"description": "Developed telematic software to provide a driving score to users insured by our clients so they can more accurately predict the risk associated with driving behavior. Processed data using Spark, Kafka, and Hadoop to provide our clients with updated driving scores daily. Implemented streaming using Flink to replace our batch jobs and make our pipeline more fast and efficient.",
					"link": "https://www.arity.com/"
			},
			{
					"employer": "Trilogy Education Services",
					"title": "Data Science Teaching Assistant",
					"location": "Chicago, IL",
					"dates": "April 2018 - Present",
					"description": "Tutored struggling students by asking questions so I could then fill the gaps in their understanding. Planned curriculum with other teaching staff to ensure that the content was delivered in a way that was both easy to digest and appealed to different types of learners. Provided detailed feedback in grading homeworks and while helping with in-class activities.",
					"link": "https://www.trilogyed.com/"
			},
			{
					"employer": "Perficient",
					"title": "Associate Technical Consultant",
					"location": "Chicago, IL",
					"dates": "June 2018 - December 2018",
					"description": "Software engagement engineer responsible for delivery of customer-facing solutions projects for presentation to clients. Full-stack development using a wide range of technologies including: C#, ASP.NET Core, Entity Framework, Angular, PHP, MySQL, Microsoft DQL Management Studio, and ASP.NET Web Forms.",
					"link": "https://www.perficient.com/"
			},
			{
				"employer": "CDK Global",
				"title": "Full-Stack Development Intern",
				"location": "Hoffman Estates, IL",
				"dates": "June 2017 - August 2017",
				"description": "Developed software to complete various stories I received during our two-week sprint cycles using various frontend, backend, version control, project management, and unit testing technologies. Led a Hack-a-thon team in creating a web application to determine RGB values from given color names using data mining techniques.",
				"link": "http://www.cdkglobal.com/"
			},
			{
				"employer": "CNA Financial",
				"title": "Software Engineer",
				"location": "Chicago, IL",
				"dates": "October 2016 - June 2017",
				"description": "Engineered a software system to perform automated functional testing of many of the company’s projects. Created an excel spreadsheet generator that works alongside the functional automated testing system to export test results in a format that the business team could understand. Brought in new employees and taught them how to automate user stories.",
				"link": "https://www.cna.com/"
			},
			{
				"employer": "CNA Financial",
				"title": "Acceptance Testing Lead",
				"location": "Chicago, IL",
				"dates": "September 2016 - October 2016",
				"description": "Played an important role including the acceptance testing of our company's software systems by consolidating defects, creating project testing status reports, and putting together presentations. I also recruited new employees and facilitated their growth within the company. The tools I used included: Java, Selenium, Design Patterns, Intellij, and SVN.",
				"link": "https://www.cna.com/"
			},
			{
				"employer": "Textura Corporation",
				"title": "Software Development Engineer in Test Intern",
				"location": "Deerfield, IL",
				"dates": "June 2015 - May 2016",
				"description": "Automated test cases to make sure that our products were running smoothly, without errors. Created methods for various web pages to facilitate the work of myself and other automation engineers. Adapted to a fast paced work environment by learning various skills such as Java, Eclipse, SVN, Selenium, XPath, and SQL.",
				"link": "http://www.texturacorp.com/"
			}
		],
	"projects": [{
				"title": "Tetris Web Application",
				"dates": "July 2017",
				"description": "This is a Tetris game I programmed using HTML5 Canvas and JavaScript. The game randomly generates Tetris pieces for the player to place in the Tetris arena using the arrow keys to move them and the 'q' and 'w' keys to rotate them. When the player fills in an entire row they are rewarded with points. Every 50 points the player receives causes the pieces to drop faster.",
				"images": ["https://i.imgur.com/qytgbuK.jpg", "https://i.imgur.com/b2fd3Z1.jpg"],
				"captions": ["This is the message that displays when the page loads", "This is a picture of a person playing the game"],
				"link": "https://github.com/CodyNicholson/Tetris_Web_App_Project"
			},
			{
				"title": "Selenium Functional Automated Testing Framework",
				"dates": "April 2017",
				"description": "After two years of being a Software Development Engineer in Test, this project represents a high-level view of my capabilities as an automated testing engineer. The framework I have created is meant to be used to automate the functional testing of web applications using Selenium, Java, TestNG, and the Apache POI library for Java. After running a test you will receive an excel spreadsheet with detailed information about any of the failures that may have occurred. If a test fails you will also get a screenshot of what exactly the browser was looking at upon failure. Using this approach makes it very easy to run tests and track down errors at a speed unattainable by manual testers or even HP UFT. Also, Selenium does not require licensing like many other test automation software.",
				"images": ["https://i.imgur.com/7JldVnC.jpg", "https://i.imgur.com/Qc0s8fj.jpg", "https://i.imgur.com/O4zPnik.jpg"],
				"captions": ["Selenium is controlling the browser and is clicking the 'Github' button", "The TestNG output from the two tests I ran", "The output excel document with the results"],
				"link": "https://github.com/CodyNicholson/Selenium_Functional_Automated_Testing"
			},
			{
				"title": "Self-Driving Car Nanodegree Projects",
				"dates": "March 2017 - ",
				"description": "This is a link to a website where you can find all of the projects I completed while enrolled in the Self-Driving Car Nanodegree program. In these projects I used various skills including: python, image processing, computer vision, neural networks, deep learning, behavioral cloning, transfer learning, data mining, C++, Kalman filters, sensor fusion, Markov models, localization software development, motion models, particle filters, PID controllers, vehicle models, and model predictive controllers among other technologies.",
				"images": ["https://i.imgur.com/mtuUHZm.jpg", "https://i.imgur.com/xbZX0Ws.jpg", "https://i.imgur.com/TX6AKfo.jpg"],
				"captions": ["I used deep learning to train a model to drive a car around a simulated track all by itself",
					"Using computer vision and some math I was able to create a program that detects and highlights lane lines in a given image",
					"Using some more math I created a program that can track the location of vehicles in a given video"
				],
				"link": "https://codynicholson.github.io/Self-Driving_Car_Projects_Website/"
			},
			{
				"title": "Enodo",
				"dates": "January 2017 - March 2017",
				"description": "The Enodo web application was my capstone project at DePaul University applying towards my bachelor's degree in computer science. The application is a tool for researchers to use to create surveys, view results, and collect data. I led the team as the project manager after my proof of concept was approved by all the other team members. In addition to managing the team I also designed and implemented our database, most of the front-end, and a large portion of the business logic for the Home, Users, and Surveys pages. I also worked on performance optimization by creating web APIs that read data from our Users, Surveys, and Survey Results tables on the client-side to save server-side resources. I learned how to do all of this by taking Mosh Hamedani's ASP.NET MVC 5 Course on Udemy.",
				"images": ["https://i.imgur.com/tzqkxCf.jpg", "https://i.imgur.com/w53Icoo.jpg", "https://i.imgur.com/3I4M4Cn.jpg"],
				"captions": ["The Enodo homepage", "This is an example of someone taking a survey and using drag and drop to order the options", "Our D3 sunburst data visualization for the survey results"],
				"link": "https://github.com/CodyNicholson/Capstone_Project"
			},
			{
				"title": "Traffic Simulation Project",
				"dates": "October 2016 - November 2016",
				"description": "In the Fall quarter of 2016 I took my first graduate level class as a third-year undergraduate student at DePaul University: SE450 Object Oriented Software Development. The Traffic Simulation assignment was the final project for this course. I implemented the Factory Method, Visitor, Null Object, and State Design Patterns in this project. All of the details concerning the work I did and the decisions I made on this project can be found in my Github repository that you can get to by following the project title link.",
				"images": ["https://i.imgur.com/UT81rfz.jpg"],
				"captions": ["This is what the program looks like when you run it, you can see my debug log in the console"],
				"link": "https://github.com/CodyNicholson/Software_Development/tree/master/Object_Oriented_Software_Development/Traffic_Simulation_Project"
			},
			{
				"title": "Portfolio Website",
				"dates": "September 2016 - October 2016",
				"description": "Designed and developed my portfolio website to promote my professional image. It includes a homepage with a cover letter and a résumé page with all my skills, experience, and background information. The skills I used to complete this project were: HTML, CSS, JavaScript, jQuery, Bootstrap, Responsive Web Design, Linux, and Git.",
				"images": ["https://i.imgur.com/woR2WmD.jpg", "https://i.imgur.com/9F7rsPk.jpg", "https://i.imgur.com/wIESne4.jpg"],
				"captions": ["My portfolio homepage", "The top of my résumé page with my skills and welcome message", "The bottom of my résumé page with the places I have lived and worked displayed on google maps"],
				"link": "https://github.com/CodyNicholson/CodyNicholson.github.io"
			}
		],
	"schools": [{
				"name": "DePaul University",
				"location": "Chicago, IL",
				"degree": "Bachelor of Computer Science",
				"description": "I am a senior at DePaul University pursuing a Bachelor of Science (BS) degree in Computer Science and a minor in Mathematics that I will receive in June of 2018. I am enrolled in the combined degree program and plan to receive a Master of Science (MS) degree in Software Engineering after my fifth year at DePaul in 2019.",
				"dates": "2014-2018",
				"link": "https://www.depaul.edu/"
			},
			{
				"name": "Self-Driving Car Engineer Nanodegree",
				"location": "Udacity.com",
				"degree": "Udacity",
				"description": "In the fall of 2016 I applied to participate in Udacity's Self-Driving Car Nanodegree program because I wanted to learn cutting edge skills that I could use to change the world. I was accepted into the program in January of 2017. I will be learning all about how to design and develop the software that makes cars drive themselves, and I expect to finish this program in the winter of 2017-2018.",
				"dates": "2017-2018",
				"link": "https://www.udacity.com/drive"
			},
			{
				"name": "Front-End Web Developer Nanodegree",
				"location": "Udacity.com",
				"degree": "Udacity",
				"description": "I always aspired to be a full-stack developer because I wanted to gain as much experience as I could in both the front and back-end of applications. My first step in my journey towards full-stack development was to learn as much about the front-end as I could, so I started by taking classes in Udacity's Front-End Web Developer Nanodegree program.",
				"dates": "2016-2018",
				"link": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
			},
			{
				"name": "The Complete ASP.NET MVC 5 Course",
				"location": "Udemy.com",
				"degree": ["Udemy"],
				"description": "I was disappointed that I didn't get the chance to work much with a Microsoft program stack at my university, so I enrolled in this class on Udemy to learn how to develop enterprise applications using C#, Entity Framework, ASP.NET, and other Microsoft tools.",
				"dates": ["August 2017"],
				"link": "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Eudemy%2Ecom%2Fcertificate%2FUC-H8LCRVVB%2F&urlhash=nE7G&trk=profile_certification_title"
			},
			{
				"name": "James B. Conant High School",
				"location": "Hoffman Estates, IL",
				"degree": ["High School Diploma"],
				"description": "In high school I was an average student who ran cross country, track, and occasionally performed in gymnastics. I graduated with a 3.0 GPA and a 27 on my ACT. Once I got to college I started taking my education much more seriously.",
				"dates": ["2010-2014"],
				"link": "http://chs.d211.org/"
			}
		],
	"honors": [{
				"title": "Eagle Scout",
				"dates": "July 2014",
				"location": "Schaumburg, IL",
				"description": "After developing my leadership skills over six years I finally made it to the highest rank in scounting: Eagle. What this means is that I have extensive experience in working with others to achieve common goals, resolve conflicts, and facilitate the growth of others.",
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
		],
	"service": [{
			"title": "Eagle Project",
			"dates": "April 2014 - August 2014",
			"description": "Led an effort using 30+ volunteers to complete major phases of capital improvement including the demolition, removal, reconstruction, and addition of a handicap ramp for a sidewalk at the Church of the Holy Spirit. The improvement, besides looking better and having less tripping hazards, was the addition of a handicap ramp to allow people in wheelchairs to access the Church. I also led two different fund-raising efforts that resulted in the Church receiving an 85% discount on the total cost of the project.",
			"location": "Schaumburg, IL",
			"images": ["https://i.imgur.com/EoUapPU.jpg", "https://i.imgur.com/TjsYPcn.jpg"],
			"captions": ["The sidewalk after I lead the demolition team in breaking it up into small pieces that we could carry", "A small portion of the team and I at the project site", "The finished sidewalk with the added handicap ramp"]
		}],
    "map": {
        "locations": ["Chicago, IL", "Lincoln Park, IL", "Schaumburg, IL", "Hoffman Estates, IL", "Deerfield, IL"]
	}
}

export default data;
