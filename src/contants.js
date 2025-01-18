import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
export const navItems=[
    {
        name:"Home",
        href:"/",
    },
    {
        name:"About",
        href:"#about",
    },
    {
        name:"Projects",
        href:"#projects",
    },
    {
        name:"Contact",
        href:"#contact",
    },
]

export const footerLinks=[
    {
        name:"Github",
        icon:<FaGithub />,
    },
    {
        name:"Linkedin",
        icon:<CiLinkedin />,
    },
    {
        name:"Facebook",
        icon:<FaFacebookF />,
    }
]