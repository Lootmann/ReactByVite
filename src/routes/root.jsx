import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div id="root">
      <div id="sidebar">
        <h1>React Router Contacts</h1>

        <div>
          <form id="search-form" role="search">
            <input
              type="search"
              name="q"
              id="q"
              aria-label="Search Contacts"
              placeholder="search"
            />
          </form>

          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>

        <nav>
          <ul>
            <li>
              <Link to={`/cats`}>New Cats</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
