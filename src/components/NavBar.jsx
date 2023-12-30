import { React, useState, useEffect, useRef } from 'react';
import * as CGIcons from 'react-icons/cg';
import ContactInfo from './ContactInfo';

const navBars = [
    {
        title: "Home",
        elementID: "navigator",
        icon: <CGIcons.CgHomeAlt />,
        itemScroll: true
    },
    {
        title: "About Me",
        elementID: "aboutMeTitle",
        icon: <CGIcons.CgBoy />,
        itemScroll: true
    },
    {
        title: "Projects",
        elementID: "projectsTitle",
        icon: <CGIcons.CgFolder />,
        itemScroll: true
    },
    {
        title: "Contact",
        elementID: "1000",
        icon: <CGIcons.CgUser />,
        itemScroll: false
    }
]

const NavBar = () => {

    const menuBtnRef = useRef();
    const menuRef = useRef();
    const [navOpen, setNavOpen] = useState(false);
    const [navVis, setNavVis] = useState(true);
    const [infoOpen, setInfoOpen] = useState(false);

    const hideInfo = () => setInfoOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
            const scrollDiff = currentScrollPos - prevScrollPos
            if (currentScrollPos === 0){
                setNavVis(true);
            }
            else if (scrollDiff < -50){
                setNavVis(true);
                prevScrollPos = currentScrollPos;
            }
            else if (scrollDiff > 150){
                setNavVis(false);     
                prevScrollPos = currentScrollPos;
            }
        }

        let prevScrollPos = window.scrollY || document.documentElement.scrollTop;

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const itemClick = (clickedElement, scrollable) => {
        setNavOpen(false);
        const element = document.getElementById(clickedElement);

        if (element && scrollable){
            element.scrollIntoView({behavior: 'smooth'});
        }
        else if (!scrollable){
            setInfoOpen(true)
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
        <div>
        <div className={`navBar ${navVis ? "": "hidden"}`}>
            <a to="#" id="menuBtn" className={navOpen ? "active" : ""} ref={menuBtnRef}>
                <CGIcons.CgChevronRight />
            </a>
            <h1 id="title">colespace</h1>
            <a to="#" id="actBtn">
                <CGIcons.CgSmileMouthOpen onClick={() => setInfoOpen(true)}/>
            </a>
            <div className={navOpen ? "navMenu active" : "navMenu"} ref={menuRef}>
                {navBars.map((navBar, index) => {
                    return (
                        <div className="navItem" key={index} onClick={() => itemClick(navBar.elementID, navBar.itemScroll)}>
                            <a to="#">
                                {navBar.icon}
                                <span>{navBar.title}</span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
        <ContactInfo hideInfoFunc={hideInfo} nameOfClass={infoOpen}/>
        </div>
    );
}
export default NavBar;