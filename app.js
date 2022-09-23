const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const themeBtn = document.querySelector('.theme-btn');

function pageTransitions() {
    //click activo botones
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    
    //secciones activas
    allSections.addEventListener('click', function(e)  {
        const id = e.target.dataset.id;
        if (id) {
            //remover seleccion
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');


            //ocultar seleccion
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');

        }
    })
        //theme
        themeBtn.addEventListener('click',() =>{
            let element = document.body;
            element.classList.toggle('light-mode');
        }) 
}

pageTransitions();