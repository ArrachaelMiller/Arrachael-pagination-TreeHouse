/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
***/

//create variable to store list items in student-list, and variable to show number of items on each page
const numberPerPage = 10;
const studentList = document.querySelectorAll ("li.student-item");
const searchDiv = document.querySelector ('.student-search');
const noResultDiv = document.querySelector('.no-result');
const eachStudent = pageList.children;
const buttonDiv = document.querySelector ('.pagination');
const buttonUl = buttonDiv.querySelector('ul');
const ul = document.createElement('ul');


function numberPerPage () {
   let pages = Math.ceil (eachStudent.length/numberPerPage);
   return pages;
}

//loop for page button help from Paul @Hubspot
const div = document.createElement ('div');
div.className = 'pagination';
const ul = document.createElement ('ul');
div.appendChild(ul);
parent.appendChild(div);
for (let i=1; i<= numberOfPages(); i++) {
   let studentList = document.createElement ('li');
   let appendPageLinks = document.createElement ('a');
   appendPageLinks.className = 'active';
   appendPageLinks.href = '#';
   appendPageLinks.textContent =(i+1);
   buttonUl.appendChild(a);
   pageLinks.appendChild(li);
}

//when page is Loades, this function shows first ten students
function showFirstTen() {
   for (let i= 0; i< eachStudent.length; i++) {
      if ( i < numberPerPage) {
         eachStudent[i].style.display = '';
      } else {
         eachStudent[i].style.display = 'none';
      }
    }
 }
 showFirstTen ();
 //SeachBox dynamatically
function createSeachBox(); { 
let header = document.getElementsByClassName ('page-header')[0];
let seachDiv = document. createElement('div');
searchDiv.className = 'student-search';
let searchInput = document.createElement ('input');
   searchInput.placeholder = 'Search for students...';
   searchDiv.appendChild (searchInput);
let searchButton = document.createElement('button');
   searchButton.textContent = 'Search';
   searchDiv.appendChild(searchButton);
   header.appendChild(seachDiv);
   return(seachDiv);

}
//Adding Event Listener for Seach box when clicked
const searchResults = [];
searchButton.addEventListener ('click', () => {
   let filter =searchInput.value.toLowerCase();
   searchResults.length = 0;
   for (let i= 0; i < eachStudent.length; i++) {
      if (eachStudent [i].innerHTML.indexOf(filter) > -1) {
         eachStudent[i].style.display = '';
      } else {
         eachStudent[i].style.display = 'none';
         searchResults.push(i);
      }
   };
// When student are hidden, display 'no result'
   if (searchResults.length === eachStudent.length) {
      noResultDiv.innerHTML = '<h1> No Results </h1>';
   }
   else {
      noReultsDiv.innerHTML = '';
   }
});

// let's divide students between pages...adds a click event listener 
buttonDiv.addEventListener ('click', (event) => [
   noResultDiv.innerHTML = '';
   let buttonDiv = parseInt(event.target.textContent);
   let mex = buttonNumber = 10;
   let min = max - 10;
   for (let i =0; i < eachStudent.length; i++) {
      if (i >= min && i < man) {
         eachStudent[i].style.display = '';
} else {
   eachStudent[i].style.display = 'none';
}  
};

