import { matchPath } from 'react-router-dom';
/**
 * @return {boolean}
 */
export function matchesRoute(paths = [], { pathname }) {
  return paths.some(({ props }) => matchPath(pathname, props));
}
