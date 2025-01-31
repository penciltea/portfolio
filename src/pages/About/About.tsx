import { useViewportSize } from '@mantine/hooks'

import './About.scss';

function AboutComponent(){
    const { width } = useViewportSize()
    const isMobile = width < 760

    const skillArray = [
        {
            title: "Core Skills",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "jQuery",
                "TypeScript",
                "REST APIs",
                "GraphQL APIs",
                "Responsive design & development",
                "Accessibility development",
                "Unit test development"
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                "Angular (v15)",
                "React",
                "Node",
                "ExpressJS",
                "NextJS",
                "DenoJS",
                "Redux",
                "Tailwind CSS",
                "SASS",
                "Jasmine",
                "Jest"
            ]
        }, 
        {
            title: "Tools",
            skills: [
                "Git",
                "Vite",
                "Buildkite",
                "Figma",
                "Adobe XD",
                "Adobe Photoshop",
                "JIRA",
                "Confluence"
            ]
        }, 
        {
            title: "Soft Skills",
            skills: [
                "Attention to detail", 
                "Critical thinking",
                "Effective communication",
                "Collaborative thinking & teamwork", 
                "Time management",
                "Problem-solving"
            ]
        }
    ]

    return (
        <div className="content about">
            <section className="content-left">
                <h1 className={ !isMobile ? 'text-center' : undefined }>About Me</h1>
                <div>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale'
                />
                </div>
                <p>Hi there! I'm Brooke Yombalakian, a developer with a passion for crafting delightful, thoughtful user experiences online. My favorite work blends performance and usability, producing designs that are easy to use, visually appealing, and highly performant.</p>
                <p>My journey into front-end development had a rather unorthodox start! I tinkered with modifying profile pages on Neopets waaay back in the day and fell in love with designing and working on websites! Before long, I worked on a variety of websites and applications, including websites that allowed prospective students to sign up for vocational college programs, retail websites that included international payment processes, and robust corporate applications. I have experience with working on content management sites such as dotCMS and Wix as well as through CI/CD pipelines such as Git.</p>
                <p>Most of my development experience has been hand-crafting websites using HTML, CSS, JavaScript and jQuery but I have experience with modern front-end frameworks such as Angular and React. Right now, I'm diving deeper into React and rounding out my skillset with some full-stack development using Node.</p>
                <p>When I'm not tinkering with code, I'm either spending time with my family or getting my hands messy in a variety of creative hobbies! I'm an avid baker and cook, crafter, gardener, and gamer. I play many D&D campaigns and play video games with friends!</p>
            </section>
            <section className="content-right">
                <h2>Skills</h2>
                {skillArray.map((skillSet, index) => {
                    return(
                        <div key={index}>
                            <p className="title">{skillSet.title}</p>
                            <ul>
                                {skillSet.skills.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    )}
                )
                }
            </section>
        </div>   
        
    )
}

export default AboutComponent