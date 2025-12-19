import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerAnimation = (
  footerNav: HTMLElement,
  footerSoc: HTMLElement,
  footerTitle: HTMLElement,
  footerSpan: HTMLElement,
  footerinfo: HTMLElement,
  footerTrigger: HTMLElement
) => {
  const media = gsap.matchMedia();

  media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerTrigger,
        start: "top 85%",
        toggleActions: "play none none none",
        markers: true,
      },
      ease: "power3.out",
    });

    tl.from([footerNav, footerTitle, footerSpan, footerSoc, footerinfo], {
      y: 40,
      opacity: 0,
      duration: 0.4,
      
    });
  });
  media.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        markers: true,
      },
      ease: "power3.out",
    });

    tl.from(footerNav, {
      x: -50,
      opacity: 0,
      duration: 0.5,
    })
     tl.from(footerSoc, {
      x: 50,
      opacity: 0,
      duration: 0.5,
    },"-=0.5")
     tl.from(footerTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    })
     tl.from(footerSpan, {
 
      opacity: 0,
      duration: 0.5,
    })
     tl.from(footerinfo, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    },"-=0.5")

    // 🔥 cleanup
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });
};

export default footerAnimation;
