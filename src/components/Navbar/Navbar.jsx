import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            link: '/',
            name: 'HOME'
        },
        {
            id: 2,
            link: '/accordion',
            name: 'ACCORDION'
        }
    ]
    return (
        <div>
            <nav>
                <div className=""></div>
                <div className="">
                    <ul>
                        {
                            navLinks.map(data => <li key={data.id}>
                                <NavLink
                                    to={data.link}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    {data.name}
                                </NavLink>
                            </li>)
                        }
                    </ul>
                </div>
                <div className=""></div>
            </nav>
        </div>
    );
};

export default Navbar;