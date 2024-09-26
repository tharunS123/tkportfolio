"use client";

import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaAngular, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDotnet} from "react-icons/si";

const about = {
    title: "About Me",
    description1: "Hello! I’m originally from India and have been living in the USA for the past seven years. My journey into programming began four years ago, during high school, when I joined my robotics team. It was there that I had my first real experience with coding, working on competition-level robots. This experience ignited my passion for problem-solving through technology and set the foundation for my programming career.",
    description2: "I started with the basics—HTML and CSS—building simple web pages and gradually expanding my knowledge. Over the past four years, I’ve taken on multiple web development projects, honing my skills and growing as a developer. These projects have allowed me to explore front-end and back-end technologies, building fully functional websites and applications that are both user-friendly and efficient.",
    description3: "Beyond coding, I’ve also had the privilege of taking on leadership roles. As Software Captain of my robotics team, I led a group of talented students, ensuring our software systems were optimized and helping guide others in learning the fundamentals of programming. This role not only strengthened my technical abilities but also taught me the importance of collaboration, communication, and mentorship.",
    description4: "Now, I’m continuously seeking opportunities to grow, whether it’s through learning new technologies or taking on exciting challenges. I’m passionate about building meaningful, impactful solutions through code, and I look forward to applying my skills in more complex projects. Thank you for visiting my portfolio, and feel free to reach out if you’d like to connect!",
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
    description: 'At this time, I do not have formal work experience. However, I am eager to apply my academic knowledge, project work, and hands-on learning experiences to future professional opportunities. I am continuously developing my skills in Web Development(frontend & Full Stack), Object-Orientated programming and am enthusiastic about contributing to and growing within a dynamic work environment.',
    items: [
    ]
}

//education
const education = {
    icon: '/assets/resume/cup.svg',
    title: 'My Education',
    description: 'Currently pursuing a Bachelors degree in Computer Science at the Purdue University. Focused on machine learning, and software development, with hands-on experience in both academic projects and personal projects.',
    items: [
        {
            institution: "Purdue University",
            degree: "BS. Computer Science '28",
            duration: "2024 - Present",
            description: "Courses Taken: CS 180 (Object-Orinated Programming), CS 193 (Tools)",
            courseList: "CS 18000(Object Orinitened Programming) : CS 19300(Tools)"
        },
        {
            institution: "Oswego Eash High School",
            degree: "9-12 Grades",
            duration: "2020-2024",
            description: "Courses Taken: AP Computer Science A & AP Computer Science Prinicple, Computer Programming 1 & 2, PLTW Cybersecurity",
            courseList: "AP Computer Science A : AP Computer Science Prinicple : Computer Programming 1 & 2"
        }
    ]
}

//skill
const skills = {
    title: "My Skills",
    description: 'I possess a diverse skill set that includes expertise in as listed below, along with strong communication and collaboration abilities. My adaptability and eagerness to learn enable me to thrive in dynamic environments and tackle new challenges effectively.',
    skillList: [
        {
            icon: <FaHtml5/>,
            name: 'HTML5'
        },
        {
            icon: <FaCss3/>,
            name: 'CSS 3'
        },
        {
            icon: <FaReact/>,
            name: 'ReactJS'
        },
        {
            icon: <FaNodeJs/>,
            name: 'NodeJS'
        },
        {
            icon: <FaAngular/>,
            name: 'AngularJS'
        },
        {
            icon: <FaJava/>,
            name: 'Java'
        },
        {
            icon: <SiTailwindcss/>,
            name: 'Tailwind CSS'
        },
        {
            icon: <SiNextdotjs/>,
            name: 'Next.JS'
        },
        {
            icon: <SiDotnet/>,
            name: '.NET'
        }
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
                                {/* <ScrollArea className={"h-[400px]"}>
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
                                </ScrollArea> */}
                            </div>
                        </TabsContent>

                        <TabsContent value={"education"} className={"w-full"}>
                            <div className={"flex flex-col gap-[30px] text-center xl:text-left"}>
                                <h3 className={"text-4xl font-bold"}>{education.title}</h3>
                                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>{education.description}</p>
                                <ScrollArea className={"h-[400px]"}>
                                    <ul className={"grid gird-cols-1 lg:grid-cols-1 gap-[30px]"}>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className={"bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"}>
                                                    <span className={"text-accent"}>{item.duration}</span>
                                                    <h3 className={"text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"}>{item.institution}</h3>
                                                    <div className={"flex items-center gap-3"}>
                                                        <span
                                                            className={"w-[6px] h-[6px] rounded-full bg-accent"}></span>
                                                        <p className={"text-white/60"}>{item.degree}</p>
                                                    </div>
                                                    <div className={"flex items-center gap-3"}>
                                                        <span
                                                            className={"w-[6px] h-[6px] rounded-full bg-accent"}></span>
                                                        <p className={"text-white/60"}>{item.courseList}</p>
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
                                <ul className={"grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gaps-[30px]"}>
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
                                <ScrollArea className={"h-[560px]"}>
                                    <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>
                                        {about.description1}
                                        {about.description2}
                                        {about.description3}
                                        {about.description4}
                                    </p>
                                </ScrollArea>

                               {/* <ul className={"grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"}>
                                   {about.info.map((item, index) => {
                                       return (
                                           <li key={index} className={"flex items-center justify-center xl:justify-start gap-4"}>
                                               <span className={"text-white/60"}>{item.fieldName}</span>
                                               <span className={"text-xl"}>{item.fieldValue}</span>
                                           </li>
                                       )
                                   })}
                               </ul> */}
                           </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;