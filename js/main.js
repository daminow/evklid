document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
})

document.addEventListener("DOMContentLoaded", (e) => {
    document.getElementById("open-search-form").addEventListener("click", (e) => {
        document.getElementById("search-form").classList.add("header__search-form--active")
    })

    document.getElementById("close-search-form").addEventListener("click", (e) => {
        document.getElementById("search-form").classList.remove("header__search-form--active")
        e.preventDefault()
    })
})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    a11y: {
        paginationBulletMessage: 'Тут название слайда {{index}}'
    }
});

new Accordion('.accordion-container');
