let btn = document.querySelector('button');
let modal = document.querySelector('.modal');
let main5 = document.querySelector('#main5');
let modal2 = document.querySelector('.modal2');
let main6 = document.querySelector('#main6');


window.addEventListener('scroll', () => {
    console.log('ffff');
    if( window.scrollY > 300 ){
     btn.style.display = 'flex';
     console.log('used');
    }
    else{
        btn.style.display = 'none';
    }
  if( window.scrollY > 1850){
    main5.style.opacity = '0';
    modal.style.opacity = '1';
    modal.classList.add('active');
  }
  else{
    main5.style.opacity = '1';
    modal.style.opacity = '0';
  }
  if( window.scrollY > 2700){
    main6.style.opacity = '0';
    modal2.style.opacity = '1';
    modal2.classList.add('active');
  }
  else{
    main6.style.opacity = '1';
    modal2.style.opacity = '0';
  }  
})
btn.addEventListener('click', () => {
    window.scrollTo(0,0);
})