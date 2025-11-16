
type PortfolioItem = {
  img: string;
  retina: string;
  link:string;
};
type Portfolio = PortfolioItem[];


const portfolio: Portfolio = [
  {
    img: "/img/portfolio/1x/brige.jpg",
    retina: "/img/portfolio/2x/brige2x.jpg",
    link: "https://bridgenation.com.pl/"
  },
  {
    img: "/img/portfolio/1x/nanowo.jpg",
    retina: "/img/portfolio/2x/nanowo2x.jpg",
     link: "https://www.nanowo.com.pl"
  },
  {
    img: "/img/portfolio/1x/cherep.jpg",
    retina: "/img/portfolio/2x/cherep2x.jpg",
    link:"#"
  },
  {
    img: "/img/portfolio/1x/Behance.jpg",
    retina: "/img/portfolio/2x/Behance2x.jpg",
        link:"#"
  },
  {
    img: "/img/portfolio/1x/nft.jpg",
    retina: "/img/portfolio/2x/nft2x.jpg",
        link:"#"
  },
  {
    img: "/img/portfolio/1x/WIREFRAME.jpg",
    retina: "/img/portfolio/2x/WIREFRAME2x.jpg",
        link:"#"
  }
];

export default portfolio;
