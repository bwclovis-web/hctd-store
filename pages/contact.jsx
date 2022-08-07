import { NextSeo } from 'next-seo'

import data from 'Data/faq.json'

import Accordion from 'components/container/Accordion/Accordion'
import HeroComponent from 'components/molecules/Hero/Hero'

const ContactPage = () => (
  <>
    <NextSeo
      title="Have a question"
      description="Tye die clothing and dye questions answered."
    />
    <div>
      <HeroComponent src={'/images/peacock.jpg'} size="70" title="Questions?" heading="Contact Us" />
      <div className="flex py-dynamic-container-y content-container">
        <section className="w-2/3">
          <div>
            <h2>Frequently Asked Questions</h2>
            <Accordion data={data} />
          </div>
        </section>
        <section>
            TEST
          {/* <ContactUsForm /> */}
        </section>
      </div>
    </div>
  </>
)



export default ContactPage
