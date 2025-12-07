import gsap from "gsap";

export const heroTitleAnimation = (
  w1: HTMLElement,
  w2: HTMLElement,
  w3: HTMLElement,
  titleText: HTMLElement
) => {
  const tl = gsap.timeline({ ease: "power3.out" });
  tl.from(w1, {
    x: -100,
    opacity: 0,
    duration: 0.6,
  });
  tl.from(
    w2,
    {
      x: -100,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3"
  );
  tl.from(
    w3,
    {
      x: -100,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3"
  );
  tl.from(
    titleText,
    {
      y: 100,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.6"
  );
};

export const teamAnimation = (
  teamPicture: HTMLElement,
  teamText: HTMLElement,
  team: HTMLElement
) => {
  const media = gsap.matchMedia();
  media.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({ ease: "power3.out" });
    tl.from(teamPicture, {
      y: -100,
      opacity: 0,
      duration: 0.6,
    });
    tl.from(
      teamText,
      {
        y: 100,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.6"
    );
    tl.from(team, {
      opacity: 0,
      y: 0,
      rotationZ: 45,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
    },"+=0.3");
  });
};
