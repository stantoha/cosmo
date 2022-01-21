window.addEventListener('DOMContentLoaded', ()=>{

    const tabs=document.querySelectorAll('.tabheader__item'),
    tabsContent=document.querySelectorAll('.tabcontent'),
    tabParent=document.querySelector('.tabheader__items');
   
   /*  tabs[0].addEventListener('click',()=>{
        if(tabParent.classList.contains('hide')){
         tabParent.classList.remove('hide');
         tabParent.classList.add('show', 'fade');
        }
        else{
         tabParent.classList.remove('show', 'fade');
         tabParent.classList.add('hide');
        }
    }); */
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

   });