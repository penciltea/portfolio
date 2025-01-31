import CardComponent from '../../components/Card/Card'
import arahayes from '../../assets/images/aranaiahayes.jpg'
import handfulwhimsy from '../../assets/images/handfulwhimsy.jpg'
import dsweb from '../../assets/images/dsweb.jpg'
import vat from '../../assets/images/vat.jpg'

import './Projects.scss';

function ProjectsComponent(){
    const projects = [
        {
            title: "dsweb.safelink.com",
            link: "https://dsweb.safelink.com/611611/help",
            image: dsweb,
            description: "This is a fully responsive site designed to allow the client's users to get the most out of their mobile devices. It features various REST API integrations, including dynamic header and footer content and hooks to send SMS messages to US phone numbers, allowing users to send themselves SMS messages to their phone, regardless of what device they're accessing the site from. "
        },
        {
            title: "virtualairtimecard.com",
            link: "https://virtualairtimecard.com?rtl=tgt",
            image: vat,
            description: "This mobile-oriented site was a pandemic project. The client wanted to allow their users to purchase minute service plans for their phones from retail locations without the need to obtain a physical plan card, allowing users to go directly to the cashier to pay for the product. The website features various REST API integrations, including rendering barcodes to verifying the purchase was successful, and renders various happy and unhappy paths throughout the flow. Users can also get a SMS message to activate the plan directly onto their phone."
        },
        { 
            title: "aranaiahayes.carrd.co",
            link: "http://aranaiahayes.carrd.co",
            image: arahayes,
            description: "I play FFXIV in my spare time, which gives players the ability to own and decorate their own houses in the game. One of my favorite things to do is to design and build houses for other players. The process from start to finish mirrors many other creative processes; I create mockups for the client, adjust them until the client is satisfied, and then implement them within the game. I made a small, fully responsive site on Carrd, a platform that is popular within the game's commmunity, to show off my designs to potential clients."
        },
        {
            title: "handfulofwhimsy.wixsite.com",
            link: "https://handfulofwhimsy.wixsite.com/home",
            image: handfulwhimsy, 
            description: "I created this fully responsive website to showcase my baking side business and to allow customers to view my products. Using Wix, I designed a user-friendly platform that highlights my product offerings and allows for easy browsing. The design is playful and creative, reflecting my business's branding."
        }
    ]

    return (
        <div className="projects">
            <h1 className="text-center">Projects</h1>

            <div className="card-container">
                { projects.map((project, index) => {
                    return (
                        <CardComponent key={index} image={project.image} title={project.title} link={project.link} description={project.description} /> 
                    )
                }) }
                
            </div>
        </div>
    )
}

export default ProjectsComponent;