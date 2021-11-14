const mobileNav = document.querySelector('.mobile-nav')
const navIcon = document.querySelector('.nav-icon')
document.querySelector('.mobile-nav > a').addEventListener('click', () => {
  mobileNav.classList.remove('openNav')
  navIcon.classList.remove('nav-anim')
})
navIcon.addEventListener('click', () => {
  if (mobileNav.classList.contains('openNav')) {
    mobileNav.classList.remove('openNav')
    navIcon.classList.remove('nav-anim')
  } else {
    navIcon.classList.add('nav-anim')
    mobileNav.classList.add('openNav')
  }
})
var scrollableElement = document.body
let scrollpos = window.scrollY
const nav = document.querySelector('.nav-container')
function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0
  }
  return event.deltaY < 0
}
const addClassOnScroll = () => nav.classList.add('sticky-nav')
const removeClassOnScroll = () => nav.classList.remove('sticky-nav')
function checkScrollDirection(event) {
  scrollpos = window.scrollY
  if (checkScrollDirectionIsUp(event) && scrollpos >= 700) {
    addClassOnScroll()
  } else {
    removeClassOnScroll()
  }
}
scrollableElement.addEventListener('wheel', checkScrollDirection)
window.addEventListener('scroll', function () {
  scrollpos = window.scrollY
  if (window.innerWidth < 600) {
    if (scrollpos >= 700) {
      addClassOnScroll()
    } else {
      removeClassOnScroll()
    }
  }
})
gsap.registerPlugin(ScrollTrigger)
gsap.from('#image1', {
  autoAlpha: 1,
  y: -400,
  ease: 'none',
  scrollTrigger: {
    trigger: '#image1',
    start: 'center center+=35%',
    end: 'center center-=40%',
    scrub: true,
    toggleActions: 'play none none reverse'
  }
})
gsap.from('#image2', {
  autoAlpha: 1,
  y: -400,
  ease: 'none',
  scrollTrigger: {
    trigger: '#image2',
    start: 'center center+=30%',
    end: 'center center-=40%',
    scrub: true,
    toggleActions: 'play none none reverse'
  }
})
gsap.from('#image3', {
  autoAlpha: 1,
  y: -400,
  ease: 'none',
  scrollTrigger: {
    trigger: '#image3',
    start: 'center center+=30%',
    end: 'center center-=40%',
    scrub: true,
    toggleActions: 'play none none reverse'
  }
})
const firstName = {
  initial: { y: 0 },
  animate: {
    y: 0,
    delay: 1.8,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.08,
      staggerDirection: 1
    }
  }
}
const headerTl = gsap.timeline()
headerTl
  .from('.brand-logo', {
    xPercent: -100,
    opacity: 0,
    duration: 1.1,
    ease: 'power2.inOut'
  })
  .from(['.nav-item'], {
    xPercent: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.inOut'
  })
const heroTl = gsap.timeline()
heroTl.from(
  [
    '.home-header__h1--span1, .home-header__h1--span2, .home-header__h1--span3, .home-header__h5, .hero-cta'
  ],
  {
    yPercent: 400,
    opacity: 0,
    duration: 1.2,
    stagger: 0.5,
    ease: 'power2.inOut'
  }
)
const phoneTl = gsap.timeline()
phoneTl
  .from('.home-header__img', {
    xPercent: 0,
    opacity: 0,
    duration: 1.2,
    delay: 2,
    scale: 1.2
  })
  .from('.home-header__bottom', { opacity: 0 })
