const menuIcon = document.querySelector('.menu-icon')
const navIcon = document.querySelector('.nav-icon')
const navMenu = document.querySelector('.nav-menu')
const navLi = document.querySelectorAll('.nav-links')



menuIcon.addEventListener('click',() => {
    navMenu.classList.toggle('open')
  let menuIconClose =  menuIcon.classList.toggle('nav-icon-close')

    if (menuIconClose) {  
        navIcon.classList.remove('nav-icon')
        navMenu.classList.remove('close')
    }
    else{
        navIcon.classList.add('nav-icon')
        navMenu.classList.add('close')
    }
})



navLi.forEach( (links) => {
    links.addEventListener('click',() => {
          navIcon.classList.toggle('nav-icon')
          menuIcon.classList.remove('nav-icon-close')
          navMenu.classList.toggle('open')
            
    }) 
})


 
 