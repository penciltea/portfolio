import CardComponent from '../../components/Card/Card'
import './Projects.scss';

function ProjectsComponent(){
    const projects = [
        {
            title: "RealmFoundry.app",
            link: "https://realmfoundry.app",
            description: "This is a personal project that I am currently developing. It is a web application designed to help TTRPG GMs, world-builders, and storytellers create and manage their worlds, locations, NPCs, and more. Users can enter data for a variety of forms of content or use rules-based logic to generate data instead. It features a responsive design for use across multiple device types, user authentication with NextAuth, a robust UI with Next.js, MUI, RHF, and Zod, and a MongoDB back-end with Mongoose.",
            chips: [
                "Next.js",
                "Typescript",
                "Material UI (MUI)",
                "RHF & Zod",
                "MongoDB & Mongoose"
            ]
        },
        {
            title: "GetQuickRefund.com",
            link: "https://getquickrefund.com",
            description: "A fintech-focused platform built to streamline merchant risk and dispute prevention. The site features a professional, high-conversion interface that communicates complex automated pre-dispute resolution and chargeback recovery services through clean data visualization and clear calls to action. It emphasizes a \"zero-code deployment\" philosophy with a focus on seamless gateway integration and AI-driven resolution tools.",
            chips: [
                "Next.js",
                "Typescript",
                "TailwindCSS",
                "Shadcdn",
                "HubSpot integration"
            ]
        },
        {
            title: "HandfulOfWhimsy.com",
            link: "https://handfulofwhimsy.com",
            description: "A custom-built web presence for my boutique cottage food bakery, designed to balance a whimsical brand identity with a high-performance frontend. Developed using a modern stack including React, Tailwind CSS, and TypeScript, the site features a programmatic menu system driven by a centralized configuration file for easy maintenance. The project emphasizes mobile-first layout and a whimsical style that showcases my artisanal products.",
            chips: [
                "Vite + React",
                "Typescript",
                "Sass (SCSS)"
            ]
        },
        {
            title: "OptimumImagingMRI.com",
            link: "https://optimumimagingmri.com",
            description: "A patient-centric healthcare website designed for a diagnostic imaging center. The interface focuses on accessibility and comfort, featuring streamlined appointment scheduling and clear information architecture to reduce patient anxiety. It balances modern medical professionalism with a warm, empathetic user experience, emphasizing state-of-the-art technology and same-day service availability.",
            chips: [
                "Vite + React",
                "Typescript",
                "Material UI (MUI)"
            ]
        },
        {
            title: "VirtualAirtimeCard.com",
            link: "https://virtualairtimecard.com?rtl=tgt",
            description: "This mobile-oriented site was a pandemic project. The client wanted to allow their users to purchase minute service plans for their phones from retail locations without the need to obtain a physical plan card, allowing users to go directly to the cashier to pay for the product. The website features various REST API integrations, including rendering barcodes to verifying the purchase was successful, and renders various happy and unhappy paths throughout the flow. Users can also get a SMS message to activate the plan directly onto their phone.",
            chips: [
                "HTML5 & CSS3",
                "jQuery",
                "REST API Integrations"
            ]
        },        
        {
            title: "Dsweb.Safelink.com",
            link: "https://dsweb.safelink.com/611611/help",
            description: "This is a fully responsive site designed to allow the client's users to get the most out of their mobile devices. It features various REST API integrations, including dynamic header and footer content and hooks to send SMS messages to US phone numbers, allowing users to send themselves SMS messages to their phone, regardless of what device they're accessing the site from. ",
            chips: [
                "HTML5 & CSS3",
                "jQuery",
                "REST API Integrations"
            ]
        }
    ]

    return (
        <div className="projects">
            <h1 className="text-center">Projects</h1>

            <div className="card-container">
                { projects.map((project, index) => {
                    return (
                        <CardComponent 
                            key={index}
                            title={project.title} 
                            link={project.link} 
                            description={project.description} 
                            chips={project.chips}
                        /> 
                    )
                }) }
                
            </div>
        </div>
    )
}

export default ProjectsComponent;