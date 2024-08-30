const scroll = new LocomotiveScroll({
       el: document.querySelector('#main'),
       smooth: true
   });
function page4Animation () {
      var projectc = document.querySelector('#project-container')
      var fixed = document.querySelector('#fixed-img');
     projectc.addEventListener('mouseenter', function(){
           fixed.style.display = "block"
     })
      
     projectc.addEventListener('mouseleave', function(){
            fixed.style.display = "none"
      })
     
      var elems = document.querySelectorAll('.project')
      elems.forEach(function(e){
            e.addEventListener('mouseenter', function(){
                   var img = e.getAttribute('data-img')
                   fixed.style.backgroundImage = `url(${img})`
            })
      })
     
}

page4Animation()


function swiperAnimation() 
{
      var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
      
}

swiperAnimation()