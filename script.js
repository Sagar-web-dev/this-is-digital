var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor:true,
  }); 

gsap.from("#img1", {
   
        y: 300,
        duration: 1.5,
        ease: Expo.easeInOut,
        opacity: 0,
    }, "-=.3")
gsap.from("#img2", {
        x: 100,
        duration: 2,
        ease: Expo.easeInOut,
        opacity: 0,
    }, "-=2")
gsap.from("#img3", {
        y: -200,
        duration: 2,
        ease: Expo.easeInOut,
        opacity: 0,
}, "-=2")
gsap.from("#dot",{
    scrollTrigger:{
        trigger: "#dot",
        start :"top 100%",
     },
    y:100,
    duration:2,
    ease: Expo.easeInOut,
        opacity: 0,
})
gsap.from("#part2>h1",{
    scrollTrigger:{
        trigger: "#part2>h1",
        start :"top 94%",
       
     },
    y:100,
    duration:1,
    ease: Expo.easeInOut,
        opacity: 0,
})
gsap.from("#about-us",{
    scrollTrigger:{
        trigger: "#about-us",
        start :"top 99%",
       
},
    y:100,
    duration:1,
    ease: Expo.easeInOut,
        opacity: 0,
        delay:-0.2
})
gsap.from("#part3-rl",{
    scrollTrigger:{
        trigger: "#part3-rl",
        start :"top 100%",
       
},
    y:100,
    duration:1,
    ease: Expo.easeInOut,
    opacity: 0,
})
gsap.from("#part3-ll",{
    scrollTrigger:{
        trigger: "#part3-ll",
        start :"top 90%",
      
},
    y:100,
    duration:1,
    ease: Expo.easeInOut,
    opacity: 0,
},"-=3")
gsap.from("#part3-left",{
    scrollTrigger:{
        trigger: "#part3-left",
        start :"top 50%",
      
},
    y:100,
    duration:1,
    ease: Expo.easeInOut,
    opacity: 0,
})
gsap.from("#part3-three",{
    scrollTrigger:{
        trigger: "#part3-three",
        start :"top 100%",
       
},
    y:50,
    duration:1,
    ease: Expo.easeInOut,
    opacity: 0,
})
gsap.from("#part4>h1",{
    scrollTrigger:{
        trigger: "#part4>h1",
        start :"top 100%",
      
},
    y:50,
    duration:1,
    ease: Expo.easeInOut,
    opacity: 0,
})
gsap.from("#part4-brand",{
    scrollTrigger:{
        trigger: "#part4-brand",
        start :"top 95%",
      // markers:"true",
},
    y:50,
    duration:1,
    ease: Expo.easeInOut,
    opacity: 0,
})

