import Link from "next/link"

const TagList = ({ tags }) => (
  <div className="mt-10">
    <span>This product has been tagged:</span>
    <ul className="mt-2 flex gap-3 flex-wrap">
      {tags.map(tag => (
        <li key={tag} className="flex justify-start content-center">
          <Link href={`/shop/tags/${tag}`} className="tag-link">
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default TagList
