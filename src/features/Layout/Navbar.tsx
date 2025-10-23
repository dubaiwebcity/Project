"use client";

import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import { menus } from "../../features/Layout/Menus";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Keep CSS import only
import Image from "next/image";
function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    // ✅ Import Bootstrap JS only on client side
    if (typeof window !== "undefined") {
      // @ts-expect-error – Bootstrap has no type declarations
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }

    const element = document.getElementById("navbar");
    const onScroll = () => {
      if (!element) return;
      if (window.scrollY > 170) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      element?.classList.remove("sticky");
    };
  }, []);


  // Offcanvas state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleShow = () => setShow(true);


  // Check if a link is active
  const isActive = (href: string) => pathname === href;

  // Check if Arabic page
  const isArabic = pathname.startsWith("/ar");

  return (
    <>
      <nav className="navbar navbar-expand-xl" id="navbar">
        <div className="container">

          {/* Left Column: Logo */}
          <div className="col-auto">
            <Link href="/en" className="navbar-brand">
         <Image
  src="/images/bnoon-logo.avif"
  alt="Doutor"
  width={183}
  height={75}
/>
            </Link>
          </div>

          {/* Right Column: Dropdown + Nav Items */}
          <div className="col d-flex flex-column">
            {/* Row 1: Dropdown Button + Language Button + Book Button */}
            <div className="mb-4 d-flex justify-content-end gap-4 mx-3">
     <div className="dropdown text-center" style={{ direction: "ltr" }}>
  <button
    className="btn btn-primary dropdown-toggle btn-dropdown d-inline-flex align-items-center justify-content-center gap-2 flex-row-reverse"
    type="button"
    id="extraDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <FaPhone style={{ color: "white" }} />
    +966 11 444 8080 :الرياض
  </button>

  <ul
    className="dropdown-menu text-center"
    aria-labelledby="extraDropdown"
    style={{ left: "50%", transform: "translateX(-50%)" }}
  >
    <li>
      <Link
        className="dropdown-item text-center"
        href="https://api.whatsapp.com/send?phone=966114448080&text=Hello"
      >
        +966 11 444 8080 :الرياض
      </Link>
    </li>
    <li>
      <Link
        className="dropdown-item text-center"
        href="https://api.whatsapp.com/send?phone=966126800800&text=Hello"
      >
        +966 12 680 0800 :جدة
      </Link>
    </li>
  </ul>
</div>
 {isArabic ? (
        <Link
          href={pathname.replace(/^\/ar/, "/en")}
          className="btn btn-outline-secondary btn-language"
        >
          EN
        </Link>
      ) : (
        <Link
          href={pathname.replace(/^\/en/, "/ar")}
          className="btn btn-outline-secondary btn-language"
        >
          العربية
        </Link>
      )}


              {/* Book an Appointment Button */}
              <Link
                href="/ar/request-an-appoinment"
                className="btn btn-success btn-appointment"
              >

                طلب موعد
              </Link>
            </div>

            {/* Row 2: Navigation Menu */}
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                {menus.map((item) => (
                  <li key={item.id} className="nav-item">
                    <Link
                      href={item.href || "#"}
                      className={`nav-link ${isActive(item.href || "") ? "active" : ""}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </nav>

      {/* For Mobile Menu */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "300px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="images/bnoon-logo.avif" alt="Doutor" width={134} height={35} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobile-menu">
            {/* others-options */}
            <div className="others-option d-flex align-items-center gap-3 mb-3">
              <div className="option-item">
                <Link
                  href="/login"
                  className="login-btn d-flex align-items-center gap-2"
                >
                  <img
                    src="/images/icons/user.svg"
                    alt="user"
                    width={20}
                    height={20}
                  />
                  <span>Login</span>
                </Link>
              </div>
              <div className="option-item">
                <Link href="/register" className="default-btn">
                  <span className="left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M11.5385 0H0.461538C0.206769 0 0 0.206769 0 0.461538C0 0.716308 0.206769 0.923077 0.461538 0.923077H10.4241L0.135231 11.2122C-0.045 11.3924 -0.045 11.6845 0.135231 11.8648C0.225462 11.955 0.343385 12 0.461538 12C0.579692 12 0.697846 11.955 0.787846 11.8648L11.0769 1.57569V11.5385C11.0769 11.7932 11.2837 12 11.5385 12C11.7932 12 12 11.7932 12 11.5385V0.461538C12 0.206769 11.7932 0 11.5385 0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <strong>Register Now</strong>
                  <span className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M11.5385 0H0.461538C0.206769 0 0 0.206769 0 0.461538C0 0.716308 0.206769 0.923077 0.461538 0.923077H10.4241L0.135231 11.2122C-0.045 11.3924 -0.045 11.6845 0.135231 11.8648C0.225462 11.955 0.343385 12 0.461538 12C0.579692 12 0.697846 11.955 0.787846 11.8648L11.0769 1.57569V11.5385C11.0769 11.7932 11.2837 12 11.5385 12C11.7932 12 12 11.7932 12 11.5385V0.461538C12 0.206769 11.7932 0 11.5385 0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            {/* mobile-menu-list */}
            <ul className="mobile-menu-list">
              {menus.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link
                    href={item.href || "#"}
                    className={`nav-link ${isActive(item.href || "") ? "active" : ""}`}
                    onClick={handleClose}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
