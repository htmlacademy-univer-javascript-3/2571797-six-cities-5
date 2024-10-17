import '../../../markup/css/not-found.css';

export function NotFoundScreen(): JSX.Element {
  return (
    <main className="not_found_main">
      <h1 className="not_found_h1">404</h1>
      <h2 className="not_found_h2">Error: 404 page not found</h2>
      <a href="/">Go to Main page</a>
    </main>
  );
}
