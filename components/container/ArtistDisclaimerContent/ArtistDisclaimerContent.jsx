const ArtistDisclaimerContent = () => {
  const mailDataNew = {
    "href": "mailto:hctd.featured.artist@gmail.com?subject=New Artist"
  }
  const mailDataResubmit = {
    "href": "mailto:hctd.featured.artist@gmail.com?subject=New Entry"
  }
  return (
    <section className="px-3 mb-6">
      <h2 className="text-h3-dynamic font-display">Featured Artist Requirements</h2>
      <p>
        Please note, this is NOT a contest. Everyone who participates will be featured at some point, and hopefully several times.
        Right now, please only one submission per email.
      </p>
      <p>
        For artists applying for the first time, please provide the following *(if applicable).
        
      </p>
      <ul className="p-3">
        <li>First and last name</li>
        <li>*Short Bio</li>
        <li>*Link / name of website</li>
        <li>*Any social media links</li>
        <li>Quality image of art piece</li>
        <li>*Name of art piece</li>
        <li>Happy Cat dyes used</li>
      </ul>
      <p>
        For artists applying with a new entry,
        
      </p>
      <ul className="p-3">
        <li>Quality image of art piece</li>
        <li>*Name of art piece</li>
        <li>Happy Cat dyes used</li>
      </ul>
      <p>We are looking forward to seeing all the amazing things made with Happy Cat dyes!</p>
      <div className="flex justify-start gap-6 pt-6 flex-col mb-6">
        <a {...mailDataNew} className="text-xl bg-violet-600 p-3 text-center rounded-md text-slate-100 hover:bg-violet-700 uppercase font-semibold">I'm a new artist</a>
        <a {...mailDataResubmit} className="text-xl bg-violet-600 text-center p-3 rounded-md text-slate-100 hover:bg-violet-700 uppercase font-semibold">I have a new art piece</a>
      </div>
    </section>
  )
}

export default ArtistDisclaimerContent
