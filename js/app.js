let arraySection=[];
arraySection=document.querySelectorAll('section');
let navList=document.getElementById('navbar__list');
//create the navigation bar dynamic depending on number of section in page
function createDynamicList()
{
    for (let section of arraySection) {
        let liItem=document.createElement('li');
        let sectionName=section.getAttribute('data-nav');
        let sectionID=section.getAttribute('id');
        liItem.innerHTML=`<a class='menu__link' data-nav=${section.id} href='#${sectionID}'>${sectionName}</a>`;
        navList.appendChild(liItem);
    }
}
//when user click on navigation item it will go to correct section with smooth
navList.addEventListener('click',function(even){
    even.preventDefault();
    if(even.target.dataset.nav)
    {
        document.getElementById(`${even.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
    }
});
//call or invoke
createDynamicList();
//call back function that check if section in viewport or not to add or remove(active class,active link class) 
function sectionInViewPort(elem){
    let posi=elem.getBoundingClientRect();
    return(posi.top>=-400&&posi.top<=150);
}
let navBar=document.getElementById('navbar__list');
//add your active class to the section thar scroll to it and add active link to link item
function toggleActiveClass()
{
    for (let section of arraySection) {
        let activeLink=navBar.querySelector(`[data-nav=${section.id}]`);
        console.log(activeLink);
        if(sectionInViewPort(section))
        {
            if(!section.classList.contains('your-active-class'))
            {
                activeLink.classList.add('active-link');
                section.classList.add('your-active-class');
            }
        }
        else{
            section.classList.remove('your-active-class');
            activeLink.classList.remove('active-link');
        }
    }
}
//add event listener when i scroll 
document.addEventListener('scroll',toggleActiveClass);

const topBtn=document.getElementById('goTop');
let isScroll;
let pageHeader=document.querySelector('.page__header');
/*
this function hide the fixed navigation bar if the user not scrolled the page (holdingthe page)
but not deleted just only hide it and if scroll the page the navigation bar will be show again
*/
document.addEventListener('scroll',function(){
    pageHeader.style.display='block';
    clearTimeout(isScroll);
    isScroll=setTimeout(function(){
        pageHeader.style.display='none';
    },4000);
    /*
    add event to button that will be showd if user scroll to down and if he go to top of page this
    buttom will be hide
    */
    window.scrollY>500?(topBtn.style.display="block"):(topBtn.style.display="none");
});

//add event to button that will go to top of page if user click on it
topBtn.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:"smooth"});
})