let tabsBtn = document.querySelectorAll('.button-type-c');
let tabsItem = document.querySelectorAll('.how__page-list');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('button-type-c--active')});
    e.currentTarget.classList.add('button-type-c--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('how__page-list--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__page-list--active');
  });
});
