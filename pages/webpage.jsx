import Link from "next/link"
import data from 'Data/changelog.json'

const WebsitePage = () => <>
  <section className="content-container  p-dynamic-container-y pb-2">
    <h1 className="font-display text-h2-dynamic">Website Issues</h1>
    <p>If there are any issues with the website, <a className="text-blue-700 underline" href="mailto:bwclovis.web@gmail.com?cc=happycattiedye@gmail.com,&subject=Happy Cat Tie Dye site issue">please contact us directly</a> to have it looked into and corrected. If there is a pricing issue, shipping issue, or any issue with an order,
  please use the <Link href="/contact" className="text-blue-700 underline">contact us</Link> form.</p>

    <h2 className="font-display text-h3-dynamic mt-16">Message from the CTO</h2> 
    <p>We aim to have an all inclusive site and I personally am an advocate for web accessibility. Our hope is to make this site
  available to every customer at all times. As we move forward, there will be several enhancements made, some small some larger. We will communicate any
  major changes to our customers so they may enjoy them.</p>
  </section>

  <section id="changelog" className="content-container p-dynamic-container-y lg:w-2/3">
    <h2 className="font-display text-h3-dynamic mt-16 bg-emerald-600 w-auto inline-block rounded p-4 text-cyan-100 tracking-wide mb-2">Site Updates</h2>
    <p>As our website grows, we want to let you know of all the new features available.  Please note this will not include content updates, only features.</p>
    <ul className="mt-5 border-b-2 pb-4">{data.map(log => <li key={log.date}>
      <span className="font-bold bg-purple-600 p-1 text-slate-50 rounded">{log.date}</span>
      <ul className="mt-3 list-disc list-inside ">
        {log.updates.map(item => <li key={item.heading} className="pt-3">
          <span className="font-semibold capitalize tracking-wider text-xl">{item.heading}: </span>
          {item.body}
        </li>)}
      </ul>
    </li>
    )}</ul>
  </section>
</>
  
export default WebsitePage
  
