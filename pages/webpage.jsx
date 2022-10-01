import Link from "next/link"


const WebsitePage = () => <section className="content-container min-h-min p-dynamic-container-y">
  <h1 className="font-display text-h2-dynamic">Website Issues</h1>
  <p>If there are any issues with the website, <a className="text-blue-700 underline" href="mailto:bwclovis.web@gmail.com?cc=happycattiedye@gmail.com,&subject=Happy Cat Tie Dye site issue">please contact us directly</a> to have it looked into and corrected. If there is a pricing issue, shipping issue, or any issue with an order,
  please use the <Link href="/contact"><a className="text-blue-700 underline">contact us</a></Link> form.</p>

  <h2 className="font-display text-h3-dynamic mt-16">Message from the CTO</h2> 
  <p>We aim to have an all inclusive site and I personally am an advocate for web accessibility. Our hope is to make this site
  available to every customer at all times. As we move forward, there will be several enhancements made, some small some larger. We will communicate any
  major changes to our customers so they may enjoy them.</p>

</section>
  
export default WebsitePage
  
