import axios from 'axios';

import { Link, NavLink } from 'react-router-dom';
import { useContacts } from '../services/tanStack';

export default function SideBar() {
  const { data, isLoading, isError } = useContacts();

  return (
    <div id="sidebar">
      <h1>WiTech Contacts</h1>
      <div>
        <Link to="/contacts/new">
          <button type="submit">New</button>
        </Link>
        <Link to="/">
          <button type="submit">Home</button>
        </Link>
      </div>
      <nav>
        {data?.length ? (
          <ul>
            {data?.map((contact) => (
              <li key={contact.id}>
                <NavLink
                  to={`/contacts/${contact.id}`}
                  data-testid="contact"
                  activeClassName="active"
                >
                  {contact.first_name || contact.last_name ? (
                    <>
                      {contact.first_name} {contact.last_name}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}
                  {contact.favorite && <span>★</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
      </nav>
    </div>
  );
}
