import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
// import styled from "styled-components";

//  const StyledLink = styled(NavLink)`
//   color: black;
//   margin-right: 15px;
//   padding: 15px;

//   &.active {
//     color: orange;
//   }
// `;

const Layout = () => {

   

    return (
        <div>
            <header>
              <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/catalog" >Catalog</NavLink></li>
          <li> <NavLink to="/favorites">Favorites</NavLink></li>
        </ul>
            </nav>
            </header>
            <main>
                <Outlet/>
          </main>
            <footer>
                
            </footer>
        </div>
      
    );
}

export default Layout;