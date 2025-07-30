

export interface Review {
  id: number;
  text: string;
  photo: string;
}
const reviews:Review[] = [
  {
    id: 1,
    text: "Замовила розробку сайту — результат перевершив усі очікування! Швидко, якісно та з урахуванням усіх побажань. Рекомендую!",
    photo: "/img/reviews/karina.jpg",
  },
  {
    id: 2,
    text: "Great experience working with the developer! Clear communication, clean code, and delivered on time. Will definitely hire again.",
    photo: "/img/reviews/ja.jpg",
  },
  {
    id: 3,
    text: "Profesjonalne podejście i szybka realizacja projektu. Strona wygląda świetnie i działa bez zarzutu. Polecam z całego serca!",
     photo: "/img/reviews/andryshka.jpg",
  },
];
export default reviews