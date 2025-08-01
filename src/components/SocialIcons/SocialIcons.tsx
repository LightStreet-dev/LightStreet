import clsx from "clsx";
import s from "./SocialIcons.module.css";

interface socialProps {
  isOpen?: boolean;}

const SocialIcons: React.FC<socialProps> = ({ isOpen }) => {
  return (
    <ul className={clsx(s.socIconsList, isOpen && s.socIconsListModal)}>
      <li><a href="https://www.instagram.com/dimonchikseagull/" target="blank">
        <svg className ={clsx(s.svg, isOpen && s.svgModal)} >
          <use href="/svg/symbol-defs.svg#icon-instagramLS"></use>
        </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/seagull-dmytro/" target="blank">
        <svg className ={clsx(s.svg, isOpen && s.svgModal)} >
          <use href="/svg/symbol-defs.svg#icon-linkedin-LS"></use>
        </svg>
        </a>
      </li>
    </ul>
  );
};
export default SocialIcons