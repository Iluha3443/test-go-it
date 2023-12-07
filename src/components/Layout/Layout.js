import { Outlet } from "react-router-dom";
import { RoutesContainer, StyledLink } from "./Layout.styled";

 

const Layout = () => {

   

    return (
        <div>
            <header>
              <nav>
        <RoutesContainer>
          <li><StyledLink to="/">Home</StyledLink></li>
          <li><StyledLink to="/catalog" >Catalog</StyledLink></li>
          <li> <StyledLink to="/favorites">Favorites</StyledLink></li>
        </RoutesContainer>
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