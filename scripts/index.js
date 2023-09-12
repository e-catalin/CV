let tabLinks = document.getElementsByClassName("tabLinks");
let tabContents = document.getElementsByClassName("tabContents");

function opentab(tabname, event) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('activeLink');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('activeTab');
    }
    event.currentTarget.classList.add('activeLink');
    document.getElementById(tabname).classList.add('activeTab');
}


document.addEventListener("DOMContentLoaded", function(){

    
    let form = document.getElementById('sheetdb-form');
    const message= document.getElementById("message");
    
    form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form"))
      }).then(response => {
        message.innerHTML = 'Success! Your message has been sent.'
        setTimeout(function(){
            message.innerHTML =''
        },5000)
        form.reset();
        console.log('Success!', response);
      })
        .catch(error => {
            message.style.color = 'red';
            message.innerHTML = 'Oh no! Something went wrong.'
            setTimeout(function(){
                message.innerHTML =''
            },10000)
            form.reset();
            console.log('ERROR!', error);
          })
    });


    // Fetch the contents of all projects
    
    const projectIndexesToSelect = [3, 4, 5]; 

    
    fetch('more-projects.html')
        .then(response => response.text()) 
        .then(html => {

            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            
            const projects = tempDiv.querySelectorAll('.work');

           
            const selectedProjects = [];

            
            projectIndexesToSelect.forEach(index => {
                if (index >= 0 && index < projects.length) {
                    selectedProjects.push(projects[index]);
                }
            });

            
            const portfolioSection = document.getElementById('portfolio');
            const workList = portfolioSection.querySelector('.workList');
            selectedProjects.forEach(project => {
                workList.appendChild(project);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
});