import AccordionItem from "./AccordionItem"

const Accordion = ({ data }) => (
  <ul className="w-full">
    {data.map((item, i) => (
      <AccordionItem 
        key={i} 
        id={`item-${i}`} 
        question={item.question} 
        answer={item.answer}
      />
    ))}
  </ul>
)
export default Accordion
