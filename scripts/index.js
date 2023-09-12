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


let sideMenu = document.getElementById("sideMenu")

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
    
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

    
        
});