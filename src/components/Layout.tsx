import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import AsideBarLeft from "./AsideBarLeft";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const hideLayout = isLoginPage || isRegisterPage;

  return (
    <div className="app flex flex-col min-h-screen overflow-x-hidden max-w-full">
      {!hideLayout && <Header />}
      
      <div className="flex flex-1 max-w-full">
        {/* Affichage du menu latéral uniquement si ce n'est pas login/register */}
        {!hideLayout && (
          <aside className="flex-shrink-0 w-64 overflow-y-auto overflow-x-hidden">
            <div className="p-4">
              <AsideBarLeft />
            </div>
          </aside>
        )}
        
        {/* Contenu principal */}
        <main className="flex-1 overflow-x-hidden min-w-0">
          <div className="p-4 max-w-full">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* {!hideLayout && <Footer />} */}
    </div>
  );
};

export default Layout;