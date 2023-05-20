import { Outlet, NavLink } from "react-router-dom"


const activeMenu = ({isActive}) => isActive ? 'activeMenu' : ''

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    {/*<li><NavLink to={'/about'} className={activeMenu}>About </NavLink></li>*/}
                    <li><NavLink to={'/create'} className={activeMenu}>CreatePostForm </NavLink></li>

                    <li><NavLink to={'/posts'} className={activeMenu}>Posts</NavLink></li>
                </ul>
            </nav>

            <Outlet/>
            <footer>Geeks</footer>
        </>
    )
}
export default Layout