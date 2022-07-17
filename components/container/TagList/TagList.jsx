import Link from "next/link"

const TagList = ({ tags }) => {
    return (
        <div>
            <span>This product has been tagged:</span>
            <ul>
                {tags.map((tag) => {
                    return (
                        <li key={tag}>
                            <Link href={`/shop/tags/${tag}`}>
                                <a>{tag}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TagList