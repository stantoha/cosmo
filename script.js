/* 
const buttons = document.querySelectorAll('.planet-list-link');
const content = document.querySelectorAll('.planet-info-list');
const solarSystem = document.querySelector('.solar-system');
const solarSButton = document.querySelector('.solarSystem-link');

const buttonClick = function () {
    solarSButton.addEventListener('click', function () {
        solarSystem.classList.toggle('hidden');
    });
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            if (!(solarSystem.classList.add('hidden'))) {
                if (!(content[i].classList.contains('hidden'))) {
                    content[i].classList.add('hidden');
                } else {
                    solarSystem.classList.add('hidden');
                    for (let j = 0; j < content.length; j++) {
                        if (j !== i) {
                            content[j].classList.add('hidden');
                        } else {
                            content[j].classList.toggle('hidden');
                        }
                    }
                }
            }
        });
    }
};
buttonClick(); */

/* window.addEventListener('DOMContentLoaded', ()=>{


   
       const tabs=document.querySelectorAll('.tabheader__item'),
       tabsContent=document.querySelectorAll('.tabcontent'),
       tabParent=document.querySelector('.tabheader__items');
      
       navButtons[0].addEventListener('click',()=>{
           if(tabParent.classList.contains('hide')){
            tabParent.classList.remove('hide');
            tabParent.classList.add('show', 'fade');
           }
           else{
            tabParent.classList.remove('show', 'fade');
            tabParent.classList.add('hide');
           }
       });
       function hideTabContent(){
           tabsContent.forEach(item=>{
               item.classList.add('hide');
               item.classList.remove('show','fade');
           });
           tabs.forEach(item=>{
              item.classList.remove('tabheader__item_active');
           });
       }
      
      function showTabContent(i=0){
          tabsContent[i].classList.add('show','fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add('tabheader__item_active');
      }
      
      hideTabContent();
      showTabContent();
   
   
   
       
      tabParent.addEventListener('click',(event)=>{
       const target=event.target;
       if(target && target.classList.contains('tabheader__item')){
           tabs.forEach((item,i)=>{
                if(target==item){
                   hideTabContent();
                   showTabContent(i);
                }
           });
       }
   });
   
      }); */