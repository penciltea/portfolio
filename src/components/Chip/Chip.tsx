import './Chip.scss'


export default function Chip({ label }: { label: string }){
    return (
        <div className="chip">
            <p>{ label }</p>
        </div>
    )
}