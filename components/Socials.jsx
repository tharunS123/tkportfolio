import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/tharunS123"},
    {icon: <FaLinkedin/>, path: "https://linkedin.com/in/tharun-kumar-senthilkumar-0409a0324"}
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item,index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials;