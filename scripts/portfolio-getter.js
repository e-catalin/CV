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