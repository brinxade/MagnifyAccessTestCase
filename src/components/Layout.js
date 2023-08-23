import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>Employee Management System</h1>

        <nav>
          <Link className="button" to="/">Add Record</Link>
          <Link className="button" to="/lookup">Record Lookup</Link>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <p className="nm">Prepared as a test case submission for Magnify Access by <b>Gurparsad Singh</b>.</p>
      </footer>
    </div>
  );
}

export default Layout;
