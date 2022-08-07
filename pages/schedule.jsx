import { NextSeo } from 'next-seo'

import HeroComponent from 'components/molecules/Hero/Hero'

const SchedulePage = () => (
  <div>
    <NextSeo
      title="Schedule"
      description="a brief history on happy cat tie dye and it founders."
    />
    <HeroComponent src={`/images/dark.jpg`} title="Schedule Page" heading="Coming Soon" />
    <section>
      <h2> OH HAI</h2>
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


export default SchedulePage
