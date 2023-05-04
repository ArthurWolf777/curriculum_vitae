const aboutMe = document.getElementById('menu-component-0');
const workExp = document.getElementById('menu-component-1');
const education = document.getElementById('menu-component-2');
const techSkills = document.getElementById('menu-component-3');
const projects = document.getElementById('menu-component-4');

const listComponets = document.getElementById('list-componets');
const componentSection = document.getElementById('cover');


listComponets.addEventListener('click', function(event){
    const targetElement = event.target;

    if(targetElement.tagName == "LI"){
        console.log("Clicked on: ", targetElement.textContent);
        
        listComponets.querySelectorAll('li').forEach((li) =>{
            li.classList.remove('selected');
            targetElement.classList.add('selected');
        });
    }
});