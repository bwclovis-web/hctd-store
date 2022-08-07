import Link from "next/link"

const TagList = ({ tags }) => (
  <div className="mt-6">
    <span>This product has been tagged:</span>
    <ul className="mt-2">
      {tags.map(tag => (
        <li key={tag} className="flex justify-start content-center">
          <Link href={`/shop/tags/${tag}`}>
            <a className="bg-sky-600 border-2 border-sky-700 text-white rounded-md px-2 pb-1 capitalize tracking-wide font-semibold focus:underline hover:underline focus:rounded-3xl hover:rounded-3xl transition-all">{tag}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default TagList
