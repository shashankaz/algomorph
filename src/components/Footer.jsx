import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  Company: [
    { label: "About Us", url: "/about-us" },
    { label: "Blog", url: "/blog" },
    { label: "Press", url: "/press" },
  ],
  Resources: [
    { label: "Documentation", url: "/docs" },
    { label: "API Reference", url: "/api-docs" },
    { label: "Tutorials", url: "/tutorials" },
  ],
  Support: [
    { label: "Contact Us", url: "/contact" },
    { label: "Community Forum", url: "/forum" },
    { label: "Report a Bug", url: "/report-bug" },
  ],
  Legal: [
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms of Service", url: "/terms-of-service" },
    { label: "Cookie Policy", url: "/cookie-policy" },
  ],
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 py-10 text-gray-700">
      <div className="flex flex-col sm:flex-row justify-between py-10">
        <h1 className="font-semibold lowercase mb-8 sm:mb-0 text-lg">
          <Link href={"/"}>Algomorph</Link>
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 text-sm">
          {Object.keys(footerLinks).map((category, index) => (
            <ul key={index} className="flex flex-col gap-2 w-32">
              <h2 className="font-semibold">{category}</h2>
              {footerLinks[category].map((link, index) => (
                <li key={index} className="hover:underline">
                  <Link href={link.url} prefetch={false}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center h-20 border-t pt-4">
        <h1 className="text-sm text-center sm:text-left">
          &copy; {year} Algomorph. All rights reserved.
        </h1>
        <ul className="flex gap-4 mt-4 sm:mt-0">
          <li>
            <Link href={"https://twitter.com/algomorph"} target="_blank">
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/algomorph"} target="_blank">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href={"https://linkedin.com/in/algomorph"} target="_blank">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href={"https://instagram.com/algomorph"} target="_blank">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href={"https://youtube.com/algomorph"} target="_blank">
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
