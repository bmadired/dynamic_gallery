const works = {
    "task1" : {"title": "Project 1", "url" : "project/task1_1.html"},
    "task2" : {"title": "Project 2", "url" : "Project/Frontend/displaybox2.html"},
    "task3" : {"title": "Project 3", "url" : "Project/Frontend/Midterm.html"},
    "task4" : {"title": "Project 4", "url" : "Project/Frontend/Task5.html"},
    "task5" : {"title": "Project 5", "url" : "Project/Frontend/Task7.html"},
    "task6" : {"title": "Project 6", "url" : "Project/Frontend/Task8.html"},
    "task7" : {"title": "Project 7", "url" : "Project/Frontend/Task9.html"},
    "task8" : {"title": "Project 8", "url" : "Project/Frontend/Task10.html"},
    "task9" : {"title": "Project 9", "url" : "Project/Frontend/Task11.html"},
    "task10" : {"title": "Project 10", "url" : "Project/Frontend/Task12.html"},
    "task11" : {"title": "Project 11", "url" : "Project/Frontend/Task13.html"},
    "task12" : {"title": "Project 12", "url" : "Project/Frontend/Task14.html"},
    "task13" : {"title": "Project 13", "url" : "Project/Frontend/Task15.html"},
    "task14" : {"title": "Project 14", "url" : "Project/Frontend/Task15(1).html"},
    "task15" : {"title": "Project 15", "url" : "Project/Frontend/Task15(2).html"},
    "task16" : {"title": "Project 16", "url" : "Project/Frontend/Task15(3).html"},
};

// write your code here 
// you need to display the list of work titles in a navigation panel 
// if a work title is clicked, the body section should display the work without reloading the page




// Get the navigation and iframe elements
const navDiv = document.getElementById("nav_div");
const contentFrame = document.getElementById("content_frame");

// Add project links to the navigation panel
for (let key in works) {
    let projectLink = document.createElement("div"); // Create a new div
    projectLink.innerText = works[key].title; // Set the text
    projectLink.className = "nav_item"; // Add styling class

    // When clicked, update the iframe to show the project
    projectLink.onclick = function () {
        contentFrame.src = works[key].url;
    };
    navDiv.appendChild(projectLink); // Add to the navigation panel

}

