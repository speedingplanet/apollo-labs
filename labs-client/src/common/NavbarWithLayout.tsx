import { NavLink, Outlet } from 'react-router-dom';

export default function NavbarWithLayout() {
	return (
		<>
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-lg bg-primary">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									to="/"
									className="nav-link text-white"
								>
										Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/labs"
									className="nav-link text-white"
								>
										Labs/Exercises
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<Outlet />
		</>
	);
}
