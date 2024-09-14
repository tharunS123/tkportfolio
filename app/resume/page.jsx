"use client";

import { FaHtml5,FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about = {
    title: "About Me",
    description: "A sentence is a combination of words put together to convey an idea, a fact, a question, a thought, a request or a command. Does that mean that you can assemble words in any order? Will it still be a sentence?",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Tharun Kumar Senthilkumar",
        },
        {
            fieldName: "Phone",
            fieldValue: "+1 807 890 9799",
        },
        {
            fieldName: "Experience",
            fieldValue: "+7 Years",
        },
        {
            fieldName: "Skype",
            fieldValue: "tsenthi",
        },
        {
            fieldName: "Nationality",
            fieldValue: "India",
        },
        {
            fieldName: "Email",
            fieldValue: "tharunkumar308@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Tamil, Kannada",
        }
    ]
}

//experiences data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: 'A sentence is a combination of words put together to convey an idea, a fact, a question, a thought, a request or a command.',
    items: [
        {
            company: "Tech Solcution Inc. ",
            position: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            company: "Tech Solcution Inc. ",
            position: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            company: "Tech Solcution Inc. ",
            position: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            company: "Tech Solcution Inc. ",
            position: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            company: "Tech Solcution Inc. ",
            position: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            company: "Tech Solcution Inc. ",
            position: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            company: "Tech Solcution Inc. ",
            position: "Full Stack Development",
            duration: "2022 - Present"
        }
    ]
}

//education
const education = {
    icon: '/assets/resume/cup.svg',
    title: 'My Education',
    description: 'A sentence is a combination of words put together to convey an idea, a fact, a question, a thought, a request or a command.',
    items: [
        {
            institution: "OEHS ",
            degree: "9-12",
            duration: "2022 - Present"
        },
        {
            institution: "Tech Solcution Inc. ",
            degree: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            institution: "Tech Solcution Inc. ",
            degree: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            institution: "Tech Solcution Inc. ",
            degree: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            institution: "Tech Solcution Inc. ",
            degree: "Full Stack Development",
            duration: "2022 - Present"
        },
        {
            institution: "Tech Solcution Inc. ",
            degree: "Full Stack Development",
            duration: "2022 - Present"
        },
    ]
}

//skill
const skills = {
    title: "My Skills",
    description: 'A sentence is a combination of words put together to convey an idea, a fact, a question, a thought, a request or a command.',
    skillList: [
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
            className={"minh-[80vh] flex items-center justify-center py-12 xl-py0"}>
            <div className={"container mx-auto"}>
                <Tabs defaultValue="experience" className={"flex flex-col xl:flex-row gap-[60px]"}>
                    <TabsList className={"flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"}>
                        <TabsTrigger value={"experience"}>Experience</TabsTrigger>
                        <TabsTrigger value={"education"}>Education</TabsTrigger>
                        <TabsTrigger value={"skills"}>Skills</TabsTrigger>
                        <TabsTrigger value={"about me"}>About me</TabsTrigger>
                    </TabsList>

                    {/*content*/}
                    <div className={"min-h-[70vh] w-full"}>
                        <TabsContent value={"experience"} className={"w-full"}>
                            <div className={"flex flex-col gap-[30px] text-center xl:text-left"}>
                                <h3 className={"text-4xl font-bold"}>{experience.title}</h3>
                                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>{experience.description}</p>
                                <ScrollArea className={"h-[400px]"}>
                                    <ul className={"grid gird-cols-1 lg:grid-cols-2 gap-[30px]"}>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className={"bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"}>
                                                    <span className={"text-accent"}>{item.duration}</span>
                                                    <h3 className={"text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"}>{item.position}</h3>
                                                    <div className={"flex items-center gap-3"}>
                                                        <span className={"w-[6px] h-[6px] rounded-full bg-accent"}></span>
                                                        <p className={"text-white/60"}>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value={"education"} className={"w-full"}>
                            <div className={"flex flex-col gap-[30px] text-center xl:text-left"}>
                                <h3 className={"text-4xl font-bold"}>{education.title}</h3>
                                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>{education.description}</p>
                                <ScrollArea className={"h-[400px]"}>
                                    <ul className={"grid gird-cols-1 lg:grid-cols-2 gap-[30px]"}>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className={"bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"}>
                                                    <span className={"text-accent"}>{item.duration}</span>
                                                    <h3 className={"text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"}>{item.degree}</h3>
                                                    <div className={"flex items-center gap-3"}>
                                                        <span
                                                            className={"w-[6px] h-[6px] rounded-full bg-accent"}></span>
                                                        <p className={"text-white/60"}>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value={"skills"} className={"w-full"}>
                            <div className={"flex flex-col gap-[30px]"}>
                                <div className={"flex flex-col gap-[30px] text-center xl:text-left"}>
                                    <h3 className={"text-4xl font-bold"}>{skills.title}</h3>
                                    <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gaps-[30px]"}>
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className={"w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"}>
                                                            <div className={"text-6xl group-hover:text-accent transition-all duration-300"}>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value={"about me"} className={"w-full text-center xl:text-left"}>
                           <div className={"flex flex-col gap-[30px]"}>
                               <h3 className={"text-4xl font-bold"}>{about.title}</h3>
                               <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>{about.description}</p>
                               <ul className={"grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"}>
                                   {about.info.map((item, index) => {
                                       return (
                                           <li key={index} className={"flex items-center justify-center xl:justify-start gap-4"}>
                                               <span className={"text-white/60"}>{item.fieldName}</span>
                                               <span className={"text-xl"}>{item.fieldValue}</span>
                                           </li>
                                       )
                                   })}
                               </ul>
                           </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;