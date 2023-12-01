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
            <nav>
                <div to="/" >Home</div>
                <div to="/catalog">Movies</div>
            </nav>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
}

export default Layout;