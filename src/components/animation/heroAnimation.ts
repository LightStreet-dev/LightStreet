import gsap from "gsap";

export const heroTitleAnimation =(w1:HTMLElement,w2:HTMLElement,w3:HTMLElement)=>{
 const tl = gsap.timeline({ ease: "power3.out" });
  tl.from(w1, {
    x: -100,
    opacity: 0,
    duration: 0.6,
  });
    tl.from(w2, {
    x: -100,
    opacity: 0,
    duration: 0.6,
  }, "-=0.3");
    tl.from(w3, {
    x: -100,
    opacity: 0,
    duration: 0.6,
  }, "-=0.3");

}

export const teamAnimation =()=>{
    
}