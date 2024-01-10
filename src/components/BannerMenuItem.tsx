import { Link } from "react-router-dom"

const BannerMenuItem = ({ url, icon, name }: { url: string, icon: string, name: string }) => {
    return (
        <li className="hover:text-accent-300 mx-4 flex gap-2 items-center hover:bg-secondary-200 hover:rounded-md py-2 px-4">
            <img src={icon} alt="Icon menu" className="w-4" />
            <Link to={url}>{name}</Link>
        </li>
    )
}

export default BannerMenuItem