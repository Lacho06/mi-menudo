import { Link } from "react-router-dom"

const BreadCrumbs = ({ links = [] }: { links: { name: string, url: string }[] }) => {
    return (
        <ul className='flex font-bold text-md'>
            {
                links.map((link, index, array) => {
                    return <div key={index} className="flex">
                        <li className='px-2'><Link to={link.url}>{link.name}</Link></li>
                        { index !== array.length-1 && (<span className="font-normal">/</span>) }
                    </div>
                })
            }
        </ul>
    )
}

export default BreadCrumbs