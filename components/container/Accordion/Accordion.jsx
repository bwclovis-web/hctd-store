import AccordionItem from "./AccordionItem"

const Accordion = ({ data }) => (
  <ul>
    {data.map(item => (
      <AccordionItem 
        key={item.id} 
        id={item.id} 
        question={item.question} 
        answer={item.answer}
      />
    ))}
  </ul>
)
export default Accordion
