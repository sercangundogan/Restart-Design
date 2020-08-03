handleClick = () => {
    if(document.querySelector(".header").classList.contains('open')){
        document.querySelector('.header').classList.remove('open');
        document.querySelector('.mobile-menu').classList.remove('display')
       
    }else 
    {
        document.querySelector('.header').classList.add('open');
        document.querySelector('.mobile-menu').classList.add('display')
        
    }
    
}

mobileMenuClose = () => {
    document.querySelector('.header').classList.remove('open');
}   