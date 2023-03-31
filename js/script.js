window.addEventListener('DOMContentLoaded', ()=>{

    //tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader')

        console.log(tabs);

        function hideTabContent(){
            tabsContent.forEach(item=>{
                item.style.display='none';
            });

            tabs.forEach(item=>{
                item.classList.remove('tabheader__item_active');
            });
        }

        function showTabContent(i = 0){
            tabsContent[i].style.display = 'block';
            tabs[i].classList.add('tabheader__item_active');
        }

        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event)=>{
            const target = event.target;
            if(target && target.classList.contains('tabheader__item')){
                tabs.forEach((item, i)=>{
                    if (target == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

        //timer

        const timeEnd = '2023-03-31';
        function getTimeRemaining(endtime){
            const t = Date.parse(endtime) - Date.parse(new Date()),
                  days = Math.floor(t / (1000 * 60 * 60 * 24)),
                  hours = Math.floor(t / (1000 * 60 * 60) % 24),
                  minutes = Math.floor((t / 1000 / 60) % 60),
                  seconds = Math.floor((t / 1000) % 60);
            return{
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
        function setClock(selector, endtime){
            const timer = document.querySelector(selector),
                   days = document.querySelector('#days'),
                   hours = document.querySelector('#hours'),
                   minutes = document.querySelector('#minutes'),
                   seconsd = document.querySelector('#seconds'),
                   timeInterval = setInterval(updateClock, 1000);
            updateClock();
            function updateClock(){
                const t = getTimeRemaining(endtime);
                days.innerHTML = t.days;
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconsd.innerHTML = t.seconds;
                if(t.total <= 0){
                    clearInterval(timeInterval);
                    days.innerHTML = '0';
                    hours.innerHTML = '0';
                    minutes.innerHTML = '0';
                    seconsd.innerHTML = '0';
                }
            }
        }
    
    setClock('.timer', timeEnd);

    //Modal
    const modalTriger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]');

          function modalOpen(){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow='';
          };

          modalTriger.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow='hidden';
            });
          });
          modalClose.addEventListener('click', ()=>{
            /*modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow='';*/
            modalOpen();
          });
          modal.addEventListener('click', (e)=>{
            if (e.target === modal){
                /*modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow='';*/
                modalOpen();
            };
          });
          document.addEventListener('keydown', (e)=>{
            if (e.code === 'Escape'){
                /*modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow='';*/
                modalOpen();
            }
          });
});












