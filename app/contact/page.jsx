"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Link from "next/link";

import {Select, SelectContent, SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

const info = [
    {
        icon: <FaGithub/>, path: "https://github.com/tharunS123",
        title: "Github",
        description: "@tharunS123"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "tharunsenthilkumar308@gmail.com",
    },
    {
        icon: <FaLinkedin/>, path: "https://linkedin.com/in/tharun-kumar-senthilkumar-0409a0324",
        title: "LinkedIn",
        description: "Tharun Kumar Senthilkumar",
    },
]

import {motion} from "framer-motion";

const Contact = (iconStyles) => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease:"easeIn"}}}
            className={"py-6"}>
                <div className="h-[50px] bg-accent text-center justify-center items-center mb-[35px] mt-[-40px] text-primary">
                    <p className="pt-[7.8px]">The Contact form is still under construction. Sorry for the inconveninces...</p>
                </div>
            <div className={"container mx-auto"}>
                <div className={"flex flex-col xl:flex-row gap-[30px]"}>
                    <div className={"xl:w-[54%] order-2 xl:order-none"}>
                        <form className={"flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"}>
                            <h3 className={"text-4xl text-accent"}>Let's work together</h3>
                            <p className={"text-white/60"}>
                                A sentence is a combination of words put together to convey an idea, a fact.
                            </p>
                            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                                <Input type={"firstname"} placeholder={"First Name"}/>
                                <Input type={"lastname"} placeholder={"Last Name"}/>
                                <Input type={"email"} placeholder={"Email"}/>
                                <Input type={"phone"} placeholder={"Phone Number"}/>
                            </div>
                            <Textarea className={"h-[200px]"} placeholder={"Type you message here."}/>
                            <Button size={"md"} className={"max-w-40"}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className={"flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"}>
                        <ul className={"flex flex-col gap-10"}>
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className={"flex items-center gap-6"}>
                                        <div className={"w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] hover:bg-accent hover:text-primary hover:transition-all duration-300 text-accent rounded-md flex items-center justify-center"}>
                                            <a href={item.path}>
                                            <motion.div 
                                                initial={{ scale: 0 }}   
                                                animate={{ rotate: 360, scale: 1 }}   
                                                transition={{     
                                                    type: "spring",     
                                                    stiffness: 260,     
                                                    damping: 20   
                                                }}>
                                                    <div className={"text-[28px]"}>
                                                        {item.icon}
                                                    </div>
                                                </motion.div>
                                            </a>
                                        </div>
                                        <div className={"flex-1"}>
                                            <p className={"text-white/60"}>{item.title}</p>
                                            <h3 className={"text-xl"}>
                                                {item.description}
                                            </h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;
