import { Link } from 'react-router-dom';
import { useScrollTo } from '../../custom-hooks/use-scroll-to';
import './Button-in-card.css';

const ButtonInCard = ({ nextCardIdAndUrl, bgColor }) => {
  const scrollTo = useScrollTo();

  const handleClick = (e, url) => {
    e.preventDefault();
    scrollTo(`${url}`);
  };

  return (
    <Link
      to={`/${nextCardIdAndUrl}`}
      onClick={(e) => handleClick(e, `${nextCardIdAndUrl}`)}>
      <button
        className="btnInsideCard"
        style={{
          backgroundColor: `${bgColor}`
        }}>
        NEXT
      </button>
    </Link>
  );
};

export default ButtonInCard;
