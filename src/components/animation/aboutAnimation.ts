import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const aboutAnimation = (
  aboutTitleAnimation: HTMLElement,
  aboutTextAnimation: HTMLElement,
  aboutTexteAnimationTwo: HTMLElement,
  aboutLogoAnimation: SVGSVGElement,
  aboutTrigger: HTMLElement
) => {
  gsap.registerPlugin(ScrollTrigger);
  const animateText = aboutTextAnimation.textContent;
  const animateTextTwo = aboutTexteAnimationTwo.textContent;
  if (!animateText || !animateTextTwo) return;
  const animText = splitText(aboutTextAnimation);
  const animTextTwo = splitText(aboutTexteAnimationTwo);
if (animText) Split(animText);
if (animTextTwo) Split(animTextTwo);
  const tl = gsap.timeline({
    ease: "power3.out",
    scrollTrigger: {
      trigger: aboutTrigger, // елемент, при якому запускається анімація
      start: "top 50%", // коли верх тригера входить у 80% висоти viewport
      toggleActions: "play none none none",
      markers: true,
    },
  });

  tl.from(aboutTitleAnimation, {
    y: -100,
    opacity: 0,
    duration: 0.8,
  });
  tl.from(aboutTextAnimation, {
    y: -100,
    opacity: 0,
    duration: 0.8,
  });
  tl.from(aboutTexteAnimationTwo, {
    y: -100,
    opacity: 0,
    duration: 0.8,
  });
  tl.from(aboutLogoAnimation, {
    y: 100,
    opacity: 0,
    rotateX: 180,
    duration: 0.8,
  });
};

export default aboutAnimation;

const splitText = (el: HTMLElement) => {
  if (!el.textContent) return;
  el.innerHTML = el.textContent.replace(/(\S*)/g, (m) => {
    return (
      `<div class="word">` +
      m.replace(/(-|#|)?\S(-|#|@)?/g, '<div class="letter">$&</div>') +
      `</div>`
    );
  });
  return el;
};

const Random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

const Split = (split: HTMLElement) => {
    split.querySelectorAll(".letter").forEach((el, idx) => {
       gsap.from(el, {
  opacity: 0,
  scale: 0.1,
  x: Random(-250, 500),
  y: Random(-250, 500),
  z: Random(-250, 500),
  delay: idx * 0.1,
  duration: 2,
        });
    });
}