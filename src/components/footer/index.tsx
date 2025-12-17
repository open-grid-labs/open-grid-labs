import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { Link } from "react-router";
import Logo from "../../icons/logo/index.tsx";

const footerLinks = {
  Services: [
    { name: "Software", href: "/services/software" },
    { name: "Intelligent", href: "/services/intelligent" },
    { name: "Design", href: "/services/design" },
  ],
  About: [
    { name: "About Us", href: "/about/about-us" },
    { name: "Our Team", href: "/about/team" },
    { name: "Career", href: "/about/career" },
  ],
  Company: [
    { name: "Our Works", href: "/work" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact-us" },
  ],
  Other: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Site Map", href: "https://money-printing.github.io/AgencyWebsite/sitemap.xml" },
  ],
};

export const socialLinks = [
  { icon: <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />, href: "https://www.linkedin.com/in/priyanshud", label: "LinkedIn" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Empowering businesses with innovative IT solutions.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="w-9 h-9 border border-border rounded-lg flex items-center justify-center hover:border-foreground transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-display font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {
                      link.name === 'Site Map' ? (
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </Link>
                      )
                    }
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>© {currentYear} PDxWork. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
