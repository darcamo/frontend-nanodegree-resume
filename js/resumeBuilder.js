// xxxxxxxxxx Objects xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// bio, work, projects, education
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// $("#main").append("Darlan Cavalcante Moreira");
// var awesomeThoughts = "I'm Darlan and I'm AWESOME";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append("<br>", funThoughts);

// bio contains a name, role, welcomeMessage, contacts object and skills
// array. The contacts object should contain (but doesn't have to) a mobile
// number, email address, github username, twitter handle and location.
var bio = {
    "name": "Darlan Cavalcante Moreira",
    "role": "Web Designer",
    "contacts": {
        "email": "darcamo@gmail.com",
        "mobile": "9-9900-1071",
        "github": "darcamo",
        "location": "Fortaleza, Brazil"
    },
    "bioPic": "images/fry.jpg",
    "welcomeMessage": "Bem vindo ao meu resumé",
    "skills": ["programming", "latex", "MIMO"]
};


// work contains an array of jobs. Each job object in jobs should contain
// an employer, title, location, dates worked and description.
var work = {
    "works" : [
        {
            "employer": "FCPC",
            "title": "Researcher",
            "location": "Fortaleza, Brazil",
            "dates": "2005 - current",
            "description": "bla bla bla"
        },
        {
            "employer": "Ericsson",
            "title": "Internship",
            "location": "Kista, Sweden",
            "dates": "2007",
            "description": "bla bla bla"
        },
        {
            "employer": "Supélec",
            "title": "Internship",
            "location": "Gif-Sur-Yvette, France",
            "dates": "2010",
            "description": "bla bla bla"
        }
    ]
};


// projects contains an array of projects. Each project object in projects
// should contain a title, dates worked, description, and an images array
// with URL strings for project images.
var projectsObj = {
    "projects": [
        {
            "title": "pyphysim",
            "dates": "2012-",
            "description" : "Link Level Simulation in python",
            "images": ["url1", "url2", "url_etc"],
            "language": "python",
            "url": "https://github.com/darcamo/pyphysim"
        },
        {
            "title": "tikz-mimo-shapes",
            "dates": "2014",
            "description" : "Node shapes for tikz regarding transmitter/receivers with multiple antennas, as well as a simple \"base station\" and \"mobile station\" shapes.",
            "images": ["url1", "url2", "url_etc"],
            "language": "latex",
            "url": "https://github.com/darcamo/tikz-mimo-shapes"
        },
        {
            "title": "epsfrag2pdf",
            "dates": "2010",
            "description" : "Convert EPS files to PDF files while performing psfrag replacements..",
            "images": ["url1", "url2", "url_etc"],
            "language": "python, latex",
            "url": "https://github.com/darcamo/epsfrag2pdf"
        }
    ]
};


// xxxxxxxxxx Create methods for the projectsObj object xxxxxxxxxxxxxxxxxxx
// Append each project in "projects" to the page
projectsObj.display = function() {
    for (var proj in this.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",
                                                      this.projects[proj].title);
        var formattedDates = HTMLprojectDates.replace("%data%",
                                                      this.projects[proj].dates);
        var formattedDescription = HTMLprojectDescription.replace(
            "%data%",
            this.projects[proj].description);
        // var formattedImage = HTMLprojectImage.replace("%data%",
        //                                               this.projects[proj].images);
        
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        //$(".project-entry:last").append(formattedImage);
    }
};
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

projectsObj.display();


// education contains an array of schools. Each school object in schools
// contains a name, location, degree, majors array, dates attended and a
// url for the school's website. education also contains an onlineCourses
// array. Each onlineCourse object in onlineCourses should contain a title,
// school, dates attended and a url for the course.
var education = {
    "schools": [
        {
            "name": "UFC",
            "location": "Fortaleza",
            "year": 2004,
            "majors": ["Engineering"],
            "degree": "BS",
            "url": "www.ufc.br"
        },
        {
            "name": "UFC",
            "location": "Fortaleza",
            "year": 2007,
            "majors": ["Engineering"],
            "degree": "masters",
            "url": "www.ufc.br"
        }
    ],
    "onlineCourses" :
    [
        {
            "title": "Machine Learning",
            "school": "Coursera",
            "dates": 2014,
            "url" : "www.coursera.com"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "url": "www.udacity.com"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "www.udacity.com"
        }
    ]
};

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Function to internationalize a name. This will make first letter of first
// name a capital letter and all letters of the surname capital letters.
var inName = function(fullname) {
    // Remove white spaces around fullname
    fullname = fullname.trim();
    var nameArray = fullname.split(' ');
    var firstName = nameArray[0][0].toUpperCase() + nameArray[0].slice(1);
    var surName = nameArray.slice(1).join(' ').toUpperCase();
    return firstName + ' ' + surName;
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", "email");
var formattedContact = formattedContact.replace("%data%", bio.contacts.email);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedPic);
$("#header").prepend(formattedContact);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// Add the skills in bio (if there is any)
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}



function displayWork()
{
    for (var job in work.works) {
        $("#workExperience").append(HTMLworkStart);
        
        var jobName = HTMLworkTitle.replace("%data%", work.works[job].title);
        var employerName = HTMLworkEmployer.replace(
            "%data%", work.works[job].employer);
        var workLocation = HTMLworkLocation.replace(
            "%data%", work.works[job].location);
        var workDates = HTMLworkDates.replace("%data%", work.works[job].dates);
        var workDescription = HTMLworkDescription.replace(
            "%data%", work.works[job].description);
        
        $(".work-entry:last").append(employerName + jobName);
        $(".work-entry:last").append(workDates);
        $(".work-entry:last").append(workLocation);
        $(".work-entry:last").append(workDescription);
    }
}


// Add the previous jobs
displayWork();



$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);
