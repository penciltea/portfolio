import Chip from '../Chip/Chip';
import './Card.scss'

interface cardProps{
    title: string,    
    chips: string[];
    description: string,
    link?: string,
}

function CardComponent({ title, description, link, chips }: cardProps){
    return (
        <div className="card">
            <div>
                <p className="title">
                    {link 
                        ? <a href={ link } target="_blank"> { title } </a>
                        : <>{ title }</>
                    }
                </p>
                {chips.map((chip, idx) => (
                    <Chip key={ idx } label={ chip } />
                ))}
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default CardComponent;