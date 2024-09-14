"use client";

import {motion} from 'framer-motion';
import React, {useState} from "react";

import { Swiper, SwiperSlide } from "swiper";
import "swiper/css";

import { BsArrowUp, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "frontend",
        description: "A sentence is a combination of words put together to convey an idea, a fact, a question, a thought, a request or a command.",
        stack: [
            {
                name: "HTML 5"
            },
            {
                name: "CSS 3"
            },
            {
                name: "Javascript"
            }
        ],
        image: "/assets/work/thumb1/png",
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "frontend",
        description: "A sentence is a combination of words put together to convey an idea, a fact, a question, a thought, a request or a command.",
        stack: [
            {
                name: "HTML 5"
            },
            {
                name: "CSS 3"
            },
            {
                name: "Javascript"
            }
        ],
        image: "/assets/work/thumb2/png",
        live: "",
        github: ""
    },
    {
        num: "03",
        category: "frontend",
        description: "A sentence is a combination of words put together to convey an idea, a fact, a question, a thought, a request or a command.",
        stack: [
            {
                name: "HTML 5"
            },
            {
                name: "CSS 3"
            },
            {
                name: "Javascript"
            }
        ],
        image: "/assets/work/thumb3/png",
        live: "",
        github: ""
    },
]

const Work = () => {
    const [project] = useState([projects[0]]);
    return (
        <motion.section
            initial={{opacity:0}}
            animate={{opacity:1}}
            className={"min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"}
        >
            <div className={"container mx-auto justify-center text-center"}>
                <h1 className={"text-8xl leading-none font-extrabold text-transparent text-outline mb-[20rem]"}>Coming Soon.....</h1>
            </div>
        </motion.section>
        // <motion.section
        //     initial={{opacity:0}}
        //     animate={{opacity:1}}
        //     className={"min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"}
        // >
        //     <div className={"container mx-auto"}>
        //         <div className={"flex flex-col xl:flex-row xl:gap-[30px]"}>
        //             <div className={"w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"}>
        //                 <div>
        //                     <div className={"text-8xl leading-none font-extrabold text-transparent text-outline"}>{project.num}</div>
        //                 </div>
        //                 {/*<div>*/}
        //                 {/*    <div className={"text-8xl leading-none font-extrabold text-transparent text-outline"}>*/}
        //                 {/*        {project.num}*/}
        //                 {/*    </div>*/}
        //                 {/*</div>*/}
        //             </div>
        //             <div className={"w-full xl:w-[50%]"}>sliders</div>
        //         </div>
        //     </div>
        // </motion.section>
    )
}

export default Work;