import './Card.scss'

interface cardProps{
    image: string,
    title: string,
    description: string,
    link?: string
}

function CardComponent({image, title, description, link}: cardProps){
    return (
        <div className="card">
            <div className="image">
                <img src={image} />
            </div>
            <div>
                <p className="title">
                    {link 
                        ? <a href={ link } target="_blank"> { title } </a>
                        : <>{ title }</>
                    }
                </p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default CardComponent;