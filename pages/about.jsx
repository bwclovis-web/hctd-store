
import { NextSeo } from 'next-seo'
import HeroComponent from 'components/molecules/Hero/Hero'

const AboutPage = () => (
  <div>
    <NextSeo
      title="About Us"
      description="a brief history on happy cat tie dye and it founders."
    />
    <HeroComponent src={`/images/dark.jpg`} title="About Us" heading="who we are" />
    <section className="py-dynamic-container-y content-container">
      <h2 className="font-display text-h2-dynamic"> OH HAI</h2>
      <div className="about">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet. Venenatis tellus in metus vulputate eu scelerisque. Mi ipsum faucibus vitae aliquet. Tortor consequat id porta nibh. Sed faucibus turpis in eu. Purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit. A condimentum vitae sapien pellentesque habitant. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quisque egestas diam in arcu cursus. Rutrum quisque non tellus orci ac auctor augue.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet. Venenatis tellus in metus vulputate eu scelerisque. Mi ipsum faucibus vitae aliquet. Tortor consequat id porta nibh. Sed faucibus turpis in eu. Purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit. A condimentum vitae sapien pellentesque habitant. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quisque egestas diam in arcu cursus. Rutrum quisque non tellus orci ac auctor augue.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet. Venenatis tellus in metus vulputate eu scelerisque. Mi ipsum faucibus vitae aliquet. Tortor consequat id porta nibh. Sed faucibus turpis in eu. Purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit. A condimentum vitae sapien pellentesque habitant. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quisque egestas diam in arcu cursus. Rutrum quisque non tellus orci ac auctor augue.
        </p>
      </div>
    </section>
  </div >
)


export default AboutPage
