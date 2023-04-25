import type { RouteObject } from 'react-router-dom';

let routes = new Map<RouteObject, string>();
routes.set(
	{
		path: '/',
		element: <p>Lab placeholder</p>,
		index: true,
	},
	'index'
);

export { routes };
