import LinkedInLogo from '../../assets/white-li-res.png';
import GitHubLogo from '../../assets/GitHub-Mark-Light-64px.png';
import EmailIcon from '../../assets/email-icon-white.png';

import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footerClass">
        <a
          className="divInFooter"
          href="https://www.linkedin.com/in/yatrik-patel-dev/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="spanInFooter2">Linked</span>
          <img
            width="auto"
            height="28px"
            src={LinkedInLogo}
            alt="GitHub"
          />
        </a>
        <a
          className="divInFooter"
          target="_top"
          href="mailto:ytrkptl.ndmlr@gmail.com">
          <img
            width="auto"
            height="36px"
            src={EmailIcon}
            alt="GitHub"
            className="emailIcon"
          />
        </a>
        <a
          className="divInFooter"
          href="https://github.com/ytrkptl"
          target="_blank"
          rel="noopener noreferrer">
          <span className="spanInFooter">GitHub</span>
          <img
            width="auto"
            height="28px"
            src={GitHubLogo}
            alt="GitHub"
          />
        </a>
      </footer>
    </div>
  );
};
export default Footer;
