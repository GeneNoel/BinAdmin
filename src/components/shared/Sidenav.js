import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

const activeTextClass = 'rounded absolute inset-0 bg-indigo-200 opacity-25';
const activeLinkClass =
  'flex items-center px-2 -mx-2 active-padding transition-fast relative block text-indigo-600 font-medium';

const NavLink = withRouter(({ to, location, title, children: svg }) => {
  return (
    <Fragment>
      <li className="mb-3 lg:mb-6">
        <Link
          to={to}
          className={
            to === location.pathname
              ? activeLinkClass
              : 'flex items-center px-2 -mx-2 py-1 transition-fast relative block text-gray-600 font-medium hover:translate-r-2px hover:text-gray-900 '
          }
        >
          {svg}
          <span
            className={
              to === location.pathname
                ? activeTextClass
                : 'rounded absolute inset-0 bg-indigo-200 opacity-0'
            }
          />
          <span className="relative ml-3">{title}</span>
        </Link>
      </li>
    </Fragment>
  );
});

const Sidenav = () => {
  return (
    <Fragment>
      <div
        id="sidebar"
        className="hidden fixed min-h-screen inset-0 pt-16 bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static  lg:max-h-full  lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5  h-full overflow-hidden"
      >
        <div className="h-full scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent">
          <nav className="h-screen text-base lg:text-sm lg:py-12 lg:pl-16 sticky?lg:h-(screen-16) ">
            <ul>
              <NavLink to="/" title="Overview">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
                  <path
                    className="text-gray-400 fill-current"
                    d="M135.7 151c-2.5 3-4.9 6-7.2 9.2 32.2 36.3 76.1 76.5 124.2 113.7 37.8 29.2 76.3 55.2 111.4 75.1 5.9 3.3 11.7 6.5 17.3 9.4 2.5-3 4.9-6 7.2-9.2 11.7-16.1 18.1-33.2 23.3-53.6.8-3.2 1.5-6.4 2.1-9.5 15.8-83-35.6-164.9-118.5-185.9-37-9.4-74.1-5.1-106.3 9.7-21.4 9.9-38.2 22.9-53.5 41.1z"
                  />
                  <path
                    className="text-gray-400 fill-current"
                    d="M418.2 326.8c-4.1 11-7.4 17.5-7.4 17.5 18.2 21.1 24.6 33.9 31.9 46.4 2.4 4.1 7.4 13.1.9 12.4-1.7-.3-3.5-.7-5.5-1.3-21.3-5.4-51.2-18.7-84.3-37.4-35.8-20.3-74.9-46.7-113.3-76.3-51.1-39.5-97.5-82.3-130.6-120.5-15.3-17.6-27.6-34.2-35.7-47.9-2.4-4.1-3.9-6.3-5.6-10.4-2.5-6.2 5-5.1 7-4.6 14.9 3.8 35 9.9 58.2 23.8 0 0 4.3-4.8 13.9-11.4-22.8-15.4-44.6-27.7-65.2-35.5-23.1-8.8-41.1-6.8-47.5 3.7-12.2 19.9 14 72.3 65.3 132-21.5 86 30.6 173.3 116.5 195 41.1 10.4 82.4 3.9 116.8-15 38.1 17.6 72.1 28.6 96.9 34.9 23.9 6.1 40.4 5.5 46.8-4.9 11.1-18.2-12.1-51.8-59.1-100.5z"
                  />
                </svg>
              </NavLink>
              <NavLink to="/collectors" title="Collectors">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="text-gray-400 fill-current"
                    d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"
                  />
                </svg>
              </NavLink>
              <NavLink to="/bins" title="Bins">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="text-gray-400 fill-current"
                    d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"
                  />
                </svg>
              </NavLink>
              <NavLink to="/settings" title="Settings">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="text-gray-400 fill-current"
                    d="M416.3 256c0-21 13.1-38.9 31.7-46.1-4.9-20.5-13-39.7-23.7-57.1-6.4 2.8-13.2 4.3-20.1 4.3-12.6 0-25.2-4.8-34.9-14.4-14.9-14.9-18.2-36.8-10.2-55-17.3-10.7-36.6-18.8-57-23.7C295 82.5 277 95.7 256 95.7S217 82.5 209.9 64c-20.5 4.9-39.7 13-57.1 23.7 8.1 18.1 4.7 40.1-10.2 55-9.6 9.6-22.3 14.4-34.9 14.4-6.9 0-13.7-1.4-20.1-4.3C77 170.3 68.9 189.5 64 210c18.5 7.1 31.7 25 31.7 46.1 0 21-13.1 38.9-31.6 46.1 4.9 20.5 13 39.7 23.7 57.1 6.4-2.8 13.2-4.2 20-4.2 12.6 0 25.2 4.8 34.9 14.4 14.8 14.8 18.2 36.8 10.2 54.9 17.4 10.7 36.7 18.8 57.1 23.7 7.1-18.5 25-31.6 46-31.6s38.9 13.1 46 31.6c20.5-4.9 39.7-13 57.1-23.7-8-18.1-4.6-40 10.2-54.9 9.6-9.6 22.2-14.4 34.9-14.4 6.8 0 13.7 1.4 20 4.2 10.7-17.4 18.8-36.7 23.7-57.1-18.4-7.2-31.6-25.1-31.6-46.2zm-159.4 79.9c-44.3 0-80-35.9-80-80s35.7-80 80-80 80 35.9 80 80-35.7 80-80 80z"
                  />
                </svg>
              </NavLink>
              <NavLink to="/funds" title="Funds">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="text-gray-400 fill-current"
                    d="M480 128c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32v48h448v-48zM32 384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V224H32v160zm142-48h164c7.7 0 14 6.3 14 14s-6.3 14-14 14H174c-7.7 0-14-6.3-14-14s6.3-14 14-14zm-72 0h12c7.7 0 14 6.3 14 14s-6.3 14-14 14h-12c-7.7 0-14-6.3-14-14s6.3-14 14-14z"
                  />
                </svg>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidenav;
