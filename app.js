const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.menu');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let curBtn = document.querySelectorAll('.active-btn');
            curBtn[0].className = curBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Section active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            // Remove selected from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const elem = document.getElementById(id);
            elem.classList.add('active');
        }
    })

    // Switch light / dark mode
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let elem = document.body;
        elem.classList.toggle('dark-mode');
    })
}

pageTransitions();
