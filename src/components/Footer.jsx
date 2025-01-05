import { HiChevronRight } from "react-icons/hi";

const footerLinks = [
  "FAQ",
  "HelpCenter",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Coporate Information",
  "Contact us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

const Footer = () => {
  return (
    <div>
      <div>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="text" placeholder="Email Address" />
        <button className="flex items-center">
          Get Started <HiChevronRight />
        </button>
      </div>

      <div>
        {footerLinks.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
