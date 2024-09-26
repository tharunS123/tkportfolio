"use client";

import { BsArrowDownRight} from "react-icons/bs";
import { FaCss3, FaReact, FaNodeJs, FaAngular, FaJava} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDotnet, SiFramer} from "react-icons/si";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Portfolio',
        skills: [
            {
                icon: <FaHtml5 />,
                name: 'HTML5'
            },
            {
                icon: <FaCss3 />,
                name: 'CSS'
            },
            {
                icon: <FaReact />,
                name: 'React'
            }
        ],
        description: 'A simple portfolio website using React and Tailwind CSS. This is where I showcase their work and skills. Click on the arrow to see the project live.',
        href: "https://tksk.azurewebsites.net"
    },
    {
        num: '02',
        title: 'PortalConnect',
        skills: [
            {
                icon: <FaAngular />,
                name: 'AngularCLI'
            },
            {
                icon: <FaHtml5 />,
                name: 'HTML5'
            },
            {
                icon: <FaCss3 />,
                name: 'CSS'
            },
        ],
        description: 'A simply login system using the json-server and AngularCLI. And also have role based login where there 3 roles, User(can only view content), Techincal(can view list of user registerned by the Admin), Admin(have access to add techinal and user to the system). ',
        href: ""
    },
    {
        num: '03',
        title: 'Hoo Bank',
        skills: [
            {
                icon: <SiTailwindcss />,
                name: 'Tailwind'
            },
            {
                icon: <SiNextdotjs />,
                name: 'Next.js'
            },
            {
                icon: <SiFramer />,
                name: 'Framer Motion'
            }
        ],
        description: 'An UX design website using Next.js, Tailwind and Framer Motion. This is concept where people do the business With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. Click on the arrow to see the project live.',
        href: "https://projecthoobank.azurewebsites.net"
    }
]

import {motion} from "framer-motion";
import { FaHtml5 } from "react-icons/fa";


const Services = () => {
    return (
        <section className={"min-h-[80vh] flex flex-col justify-center py-12 al:py-0"}>
            <div className={"container mx-auto"}>
                <motion.div
                    initial={{opacity:0}}
                    animate={{
                        opacity: 1,
                        transition: {delay:2.4, duration:0.4, ease:"easeIn"}
                    }}
                    className={"grid grid-cols-1 md:grid-cols-2 gap-[60px]"}
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className={"flex-1 flex flex-col justify-center gap-6 group"}>
                                {/* top */}
                                <div className={"w-full flex justify-between items-center"}>
                                    <div className={"text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"}>{service.num}</div>
                                    <Link href={service.href} className={"w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"}>
                                        <BsArrowDownRight className={"text-primary text-3xl"}/>
                                    </Link>
                                </div>

                                {/*heading*/}
                                <h2 className={"text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"}>{service.title}</h2>

                                {/*skills*/}
                                <div className={"flex gap-4"}>
                                    {service.skills.map((skills, index) => {
                                        return (
                                            <div key={index} className={"flex items-center gap-2"}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className={"w-[45px] h-[45px] bg-[#232329] rounded-full flex justify-center items-center"}>
                                                            <div className={" group-hover:text-accent transition-all duration-300"}>
                                                                {skills.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skills.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                {/* <span className={"w-[45px] h-[45px] rounded-full bg-primary group-hover:bg-[#27272c] group-hover:text-accent transition-all duration-500 flex justify-center items-center"}
                                                >
                                                    {skills.icon}
                                                </span> */}
                                            </div>
                                        )
                                    })}
                                </div>

                                {/*descritopn*/}
                                <p className={"text-white/60"}>
                                    {service.description} 
                                </p>

                                {/*border*/}
                                <div className={"border-b border-white/20 w-full"}></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;