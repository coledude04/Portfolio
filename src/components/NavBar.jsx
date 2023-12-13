import { React, useState, useEffect, useRef } from 'react';
import * as CGIcons from 'react-icons/cg';

const navBars = [
    {
        title: "Home",
        elementID: "navigator",
        icon: <CGIcons.CgHomeAlt />
    },
    {
        title: "About Me",
        elementID: "aboutMeTitle",
        icon: <CGIcons.CgBoy />
    },
    {
        title: "Projects",
        elementID: "projectsTitle",
        icon: <CGIcons.CgFolder />
    },
    {
        title: "Contact",
        elementID: "1000",
        icon: <CGIcons.CgUser />
    }
]

const NavBar = () => {

    const menuBtnRef = useRef();
    const menuRef = useRef();
    const [navOpen, setNavOpen] = useState(false);
    const [navVis, setNavVis] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

            currentScrollPos > prevScrollPos ? handleScrollDown() : handleScrollUp();

            prevScrollPos = currentScrollPos;
        }

        let prevScrollPos = window.scrollY || document.documentElement.scrollTop;

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollUp = () => {
        setNavVis(true);
    }
    const handleScrollDown = () => {
        setNavVis(false);
    }

    const itemClick = (clickedElement) => {
        setNavOpen(false);
        const element = document.getElementById(clickedElement);

        if (element){
            element.scrollIntoView({behavior: 'smooth'});
        }
        
    };

    useEffect(() => {
        let handleClick = (e) => {
            if(!menuBtnRef.current.contains(e.target) && !menuRef.current.contains(e.target)){
                setNavOpen(false);
            }
            else if(menuBtnRef.current.contains(e.target)){
                setNavOpen(prevNavOpen => !prevNavOpen);
            }
        }
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [menuRef, menuBtnRef, setNavOpen]);

    return (
        <>
        <div className={navVis ? "navBar active": "navBar"}>
            <a to="#" id="menuBtn" className={navOpen ? "active" : ""} ref={menuBtnRef}>
                <CGIcons.CgChevronRight />
            </a>
            <h1 id="title">colespace</h1>
            <a to="#" id="actBtn">
                <CGIcons.CgSmileMouthOpen />
            </a>
        </div>
        <div className={navOpen ? "navMenu active" : "navMenu"} ref={menuRef}>
            {navBars.map((navBar, index) => {
                return (
                    <div className="navItem" key={index} onClick={() => itemClick(navBar.elementID)}>
                        <a to="#">
                            {navBar.icon}
                            <span>{navBar.title}</span>
                        </a>
                    </div>
                );
            })}
        </div>
        </>
    );
}
export default NavBar;