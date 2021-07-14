const testClass =  document.getElementsByClassName('total-card');
const totalCount =  document.getElementsByClassName('total-count')
const statsCard = document.getElementsByClassName('stat-placeholder');
const dailyNumber = document.getElementsByClassName('number');
let checked = false;
const dark = "dark"
const light = "light"
const toggle = document.getElementById('check')
const viewing = document.getElementsByClassName('palceholder');
const media = document.getElementById('media');
const followers = document.getElementById('followers');
const overView = document.getElementById('row-three');
const darkMode = document.getElementById('toggle');


toggle.addEventListener('click', ()=>{
    if(checked == false){
        checked = true;
        const Body = document.querySelector('body');
        Body.style.backgroundColor = ('hsl(230, 17%, 14%)');
        media.style.color=("white");
        followers.style.color=("white")
        overView.style.color=("white")
        darkMode.style.color=("white")
        backgroundChange(dark);
    }else{
        checked = false;
        const Body = document.querySelector('body');
        Body.style.backgroundColor = ('hsl(0, 0%, 100%)');
        media.style.color=("black");
        followers.style.color=("black")
        overView.style.color=("black")
        darkMode.style.color=("black")
        backgroundChange(light);
    }
})


const backgroundChange= (color)=>{
    if(color == dark){
        
        for (i = 0; i < testClass.length; i++) {
            console.log(testClass)
            testClass[i].classList.toggle('testClass')
            testClass[i].classList.toggle('total-card-dark')
        }
        for (i = 0; i < totalCount.length; i++) {
            // totalCount[i].style.color = "white";
            totalCount[i].classList.toggle("total-count-dark");
        }
        for (i = 0; i < statsCard.length; i++) {
            console.log(statsCard.length)
            // statsCard[i].style.backgroundColor = "hsl(230, 17%, 14%)";
            statsCard[i].classList.toggle("stats-container")
            statsCard[i].classList.toggle("stats-container-dark")
        }
        for (i = 0; i < dailyNumber.length; i++) {
            dailyNumber[i].classList.toggle('number-dark')
        }
        for (i = 0; i < viewing.length; i++) {
            console.log(viewing)
            viewing[i].classList.toggle('viewing');
            // console.log(viewing)
            viewing[i].classList.toggle('viewing-dark'); 
             
        }
    }else{
        
        for (i = 0; i < testClass.length; i++) {
            testClass[i].classList.toggle('total-card-dark')
            testClass[i].classList.toggle('testClass')
        }
        for (i = 0; i < totalCount.length; i++) {
            // totalCount[i].style.color = "black";
            totalCount[i].classList.toggle("total-count-dark");
        }
        for (i = 0; i < statsCard.length; i++) {
            // statsCard[i].style.backgroundColor = "hsl(227, 47%, 96%)";
            statsCard[i].classList.toggle("stats-container-dark");
            statsCard[i].classList.toggle("stats-container");
        }
        for (i = 0; i < dailyNumber.length; i++) {
            dailyNumber[i].classList.toggle('number-dark')
        }

        for (i = 0; i < viewing.length; i++) {
            viewing[i].classList.toggle('viewing-dark')
            viewing[i].classList.toggle('viewing');
        }
    }

}