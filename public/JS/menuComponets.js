const aboutMe = document.getElementById('menu-component-0');
const workExp = document.getElementById('menu-component-1');
const education = document.getElementById('menu-component-2');
const techSkills = document.getElementById('menu-component-3');
const projects = document.getElementById('menu-component-4');

const listComponets = document.getElementById('list-componets');
const componentSection = document.getElementById('cover');


listComponets.addEventListener('click', function(event){

    const targetElement = event.target;

    // Mover secciones a la Izquierda del DOM en responsive
    function changeComponent(){

        const aboutMeComp = document.getElementById('about-me');
        const WorkExperienceComp = document.getElementById('work-experience');
        const educationComp = document.getElementById('education');
        const techSkillsComp = document.getElementById('tech-skills');
        const projectsComp = document.getElementById('projects');

        if(targetElement.textContent == 'work experice'){
            
            console.log('WorkExperience');

            aboutMeComp.classList.add('section-inactive');
            WorkExperienceComp.classList.remove('section-inactive');

        } else if(targetElement.textContent == 'education'){

            console.log('education');

            WorkExperienceComp.classList.add('section-inactive');
            educationComp.classList.remove('section-inactive');

        } else if(targetElement.textContent == 'technical skills'){

            console.log('Technical Skills')

            educationComp.classList.add('section-inactive');
            techSkillsComp.classList.remove('section-inactive');

        } else if(targetElement.textContent == 'Projects'){

            console.log('Projects');

            techSkillsComp.classList.add('section-inactive');
            projectsComp.classList.remove('section-inactive');

        }else if(targetElement.textContent == 'about-me'){

            console.log('About-me');

            projectsComp.classList.add('section-inactive');
            aboutMeComp.classList.remove('section-inactive');
        }
    };


    if(targetElement.tagName == "LI"){
        console.log("Clicked on: ", targetElement.textContent);

        changeComponent();
        
        listComponets.querySelectorAll('li').forEach((li) =>{
            li.classList.remove('selected');
            targetElement.classList.add('selected');
        });
    }
});