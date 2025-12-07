 import gsap from "gsap";
 
 const headerAnimation = (headerContainer:HTMLElement,headerContent:HTMLElement) =>{
     const tl = gsap.timeline({ ease: "power3.out" });

      tl.from(headerContainer, {
    y: -100,
    opacity: 0,
    duration: 0.8,
  });
   tl.from(headerContent, {
    opacity: 0,
      duration: 0.8,
  }); 
}

export default headerAnimation