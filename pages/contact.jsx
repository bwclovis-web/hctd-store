import { NextSeo } from 'next-seo'

import data from 'Data/faq.json'

import Accordion from 'components/container/Accordion/Accordion'
import HeroComponent from 'components/molecules/Hero/Hero'
import ContactUsForm from 'components/container/Forms/ContactUs/ContactUs'

const ContactPage = () => (
  <>
    <NextSeo
      title="Have a question"
      description="Tye die clothing and dye questions answered."
    />
    <div>
      <HeroComponent src={'/images/contact.jpg'} size="70" title="Contact Happy Cat Tie Dye" heading="Have a question? Check the FAQ's" />

      <div className="flex py-dynamic-container-y content-container gap-8 flex-col lg:flex-row">
        <section className="lg:w-1/2 xl:w-3/5 lg:border-r-2 pr-6 mr-6">
          <div>
            <h2 className="font-display text-h3-dynamic mb-10">Frequently Asked Questions</h2>
            <Accordion data={data} />
          </div>
        </section>

        <section className=" lg:w-1/2 xl:w-2/5 bg-violet-500/50 p-10 rounded-md shadow-lg border-violet-500 border-2 self-start">
          <h2 className="font-display text-h3-dynamic">Contact Us</h2>
          <p className="mb-7">If this is regarding an order, please include the order number in the message.</p>
          <ContactUsForm />
        </section>

      </div>
    </div>
  </>
)



export default ContactPage
