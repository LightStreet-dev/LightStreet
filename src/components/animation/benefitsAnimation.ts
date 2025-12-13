import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const benefotsAnimation = (benefitsTitle:HTMLElement,benefitsList:HTMLElement,benefitsSVG:SVGSVGElement,benefitsTrigger:HTMLElement)=>{
 gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: benefitsTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        markers: true,
      },
    });

    tl.from(benefitsTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
     tl.from(benefitsList, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    })
     tl.from(benefitsSVG, {
      x: 50,
      opacity: 0,
      duration: 0.5,
    })
    
  
})}
export default benefotsAnimation
