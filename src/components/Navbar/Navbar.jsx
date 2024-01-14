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
            <nav className="flex justify-between items-center">
                <div className="">
                    <h1>Accordion</h1>
                </div>
                <div className="">
                    <ul className="flex items-center gap-5">
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
                <div className="">
                    <h1>Login</h1>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;