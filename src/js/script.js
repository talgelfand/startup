'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.works__item'), // вкладки, на которые кликает пользователь
          tabsContent = document.querySelectorAll('.works__wrapper-photos'), // одна страница табов
          tabsParent = document.querySelector('.works__wrapper');

    function hideTabContent() { // скрываем весь контент на сайте
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => { // всем табам удаляем класс активности
            item.classList.remove('works__item_active');
        });
    }

    function showTabContent(i = 0) { // по дефолту видна первая страница табов
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('works__item_active');
    }

    hideTabContent();
    showTabContent(); 

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('works__item')) { // убеждаемся, что кликнули не в обертку
            tabs.forEach((item, i) => { // таб и его номер
                if (target == item) { 
                    // если элемент, в который кликнули, совпадает с элементом, который мы сейчас перебираем
                    hideTabContent();
                    showTabContent(i); 
                }
            });
        }
    });  

    // Read more

    const more = document.querySelectorAll('.posts__more'),
          descr = document.querySelectorAll('.posts__descr');
    let flag = false;

    function showMore(moreSelector, descrSelector) {
        moreSelector.addEventListener('click', (event) => {

            if (event.target || moreSelector.textContent) {
                flag = true;

                descrSelector.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam";
            } 

            if (flag) {
                moreSelector.textContent = "Read less";
                moreSelector.addEventListener('click', (event) => {
                    if (event.target) {
                        descrSelector.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam";
                        moreSelector.textContent = "Read more";
                    }
                });
            }
        });
    }

    showMore(more[0], descr[0]);
    showMore(more[1], descr[1]);

});