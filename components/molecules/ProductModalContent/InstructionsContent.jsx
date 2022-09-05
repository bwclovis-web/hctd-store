import Accordion from "components/container/Accordion/Accordion"
import data from 'Data/dyeCare.json'
const InstructionsContent = () => {
  console.log('hai')

  return (
    <section>
      <h1 className="font-display text-h2-dynamic mb-6 pt-4">Instructions</h1>
      <p className="text-xl font-semibold">These are fiber reactive dyes and will work best on natural cellulose fibers (cotton, rayon, modal, hemp, bamboo, etc.) They can work on other mediums but these instructions are for use on cellulose fibers.</p>
      <Accordion data={data}/>
    </section>
  )
}

export default InstructionsContent
