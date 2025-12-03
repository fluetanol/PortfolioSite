
interface DateDescriptionListProps {
    items: { date: string; description: string }[];
}



export const DateDescriptionList = ({items} :  DateDescriptionListProps) => {
    return (
        <ul className ="flex flex-col gap-3">
            {items.map((item, index)=>(
                <li key={index} className="space-x-5"><span>{item.date}</span><span>{item.description}</span></li>    
            ))}
        </ul>
    )
}