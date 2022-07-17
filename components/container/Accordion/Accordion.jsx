import AccordionItem from "./AccordionItem";

const Accordion = ({data}) => {
    return (
        <ul>
            {data.map((item) => {
                return (
                    <AccordionItem 
                        key={item.id} 
                        id={item.id} 
                        question={item.question} 
                        answer={item.answer}
                    />
                )
            })}
        </ul>
    )
}
export default Accordion