import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const contactAnimation = (
  contactTitle: HTMLElement,
  contactText: HTMLElement,
  contactLogo: SVGSVGElement,
  contactImg: HTMLImageElement,
  contactForm: HTMLElement,
  contactTrigger: HTMLElement
) => {
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();

  media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        markers: true,
      },
    });
    tl.from(contactTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    })
      .from(contactText, {
        y: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from(
        contactLogo,
        {
          rotate: 180,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      )
      .from(
        contactForm,
        {
          opacity: 0,
          rotateY: 90,
          duration: 0.8,
        },
        "-=0.5"
      );
  });
  media.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        markers: true,
      },
    });
    tl.from(contactTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    })
      .from(contactText, {
        y: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from(
        contactLogo,
        {
          rotate: 180,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      )
      .from(contactImg, {
        opacity: 0,
        rotateY: 90,
        duration: 0.8,
      })
      .from(
        contactForm,
        {
          opacity: 0,
          scale: 90,
          duration: 0.8,
        },
        "-=0.5"
      );
  });
};

export default contactAnimation;
