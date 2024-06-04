function scrollToelement(elementSelector, instance = 0 ){
    const element= document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior:'smooth'});
    }
}
const link1 =document.getElementById("link1");
const link2 =document.getElementById("link2");
const link3 =document.getElementById("link3");

link1.addEventListener('click', () =>{
    scrollToelement('.header');
})
// scroll to the second element with "header" class
link2.addEventListener('click', () =>{
    scrollToelement('.header, 1 ');
})
link3.addEventListener('click', () =>{
    scrollToelement('.column');
})