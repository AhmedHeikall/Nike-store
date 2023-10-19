import { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Prevent and Disable Page Scrolling when menu is open
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray  hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          {open ? (
            <AiOutlineClose
              size={29}
              style={{ color: "slategray" }}
              onClick={() => setOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              size={29}
              style={{ color: "slategray" }}
              onClick={() => setOpen(true)}
            />
          )}
          {open && (
            <ul className="flex flex-col items-center justify-center gap-16 absolute right-0 top-16 bg-slate-100 w-full h-screen z-50">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
