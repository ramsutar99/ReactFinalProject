import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar(props) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    // e.preventDefault();
    props.logout();
    navigate('/login');
  }

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="" />
            <span>Kafene</span>
          </div>
          {props.status ? (
            <div className="header-list">
              <ul>
                <li id="orders-link" className="head-links"><Link to="/orders"> Orders</Link></li>
                <li id="products-link" className="head-links"><Link to="/products" >Products</Link></li>
                <li id="users-link" className="head-links" ><Link to="/users" > Users</Link></li>
              </ul>
            </div>
          ) : null}
          {props.status ?
            <Link to="/login" id="logout" onClick={handleLogout}>Logout</Link>
            :
            <Link to="/login" id="login"></Link>
          }
        </nav>
      </header>
    </>
  )
}

export default Navbar

// class component===============================================================================

// import React from "react";
// import { Link, useHistory } from "react-router-dom";

// function Navbar(props) {
//   const history = useHistory();

//   const handleLogout = () => {
//     props.logout();
//     history.push("/login");
//   };

//   return (
//     <>
//       <header>
//         <nav>
//           <div className="logo">
//             <img
//               src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
//               alt=""
//             />
//             <span>Kafene</span>
//           </div>
//           {props.status ? (
//             <div className="header-list">
//               <ul>
//                 <li id="orders-link" className="head-links">
//                   <Link to="/orders"> Orders</Link>
//                 </li>
//                 <li id="products-link" className="head-links">
//                   <Link to="/products">Products</Link>
//                 </li>
//                 <li id="users-link" className="head-links">
//                   <Link to="/users"> Users</Link>
//                 </li>
//               </ul>
//             </div>
//           ) : null}
//           {props.status ? (
//             <Link to="/login" id="logout" onClick={handleLogout}>
//               Logout
//             </Link>
//           ) : (
//             <Link to="/login" id="login"></Link>
//           )}
//         </nav>
//       </header>
//     </>
//   );
// }

// export default Navbar;

// export 'useHistory' (imported as 'useHistory') was not found in 'react-router-dom' (possible exports: AbortedDeferredError, Await, BrowserRouter, Form, HashRouter, Link, MemoryRouter, NavLink, Navigate, NavigationType, Outlet, Route, Router, RouterProvider, Routes, ScrollRestoration, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, UNSAFE_enhanceManualRouteObjects, UNSAFE_useScrollRestoration, createBrowserRouter, createHashRouter, createMemoryRouter, createPath, createRoutesFromChildren, createRoutesFromElements, createSearchParams, defer, generatePath, isRouteErrorResponse, json, matchPath, matchRoutes, parsePath, redirect, renderMatches, resolvePath, unstable_HistoryRouter, unstable_useBlocker, unstable_usePrompt, useActionData, useAsyncError, useAsyncValue, useBeforeUnload, useFetcher, useFetchers, useFormAction, useHref, useInRouterContext, useLinkClickHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, useSearchParams, useSubmit)

// "react-router-dom": "^6.8.1",
