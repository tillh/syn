import type {NextPage} from 'next'

const Home: NextPage = () => {
    return (
        <ul className="flex">
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="#">Contracts</a>
            </li>
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="#">Usage</a>
            </li>
        </ul>
    )
}

export default Home
