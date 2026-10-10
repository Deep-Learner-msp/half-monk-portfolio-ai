import { Link, useLocation } from 'react-router-dom';
import { EditorialLayout } from '@/site/EditorialLayout';
import { usePageMeta } from '@/site/meta';

export default function NotFound() {
  const { pathname } = useLocation();
  usePageMeta({ title: 'Not found · MSP Raja', description: 'This page does not exist.', path: pathname });

  return (
    <EditorialLayout>
      <main className="ed-wrap">
        <header className="e-page-head">
          <h1 className="e-h1">Not found</h1>
          <p className="e-lede">
            Nothing lives at <code className="e-icode">{pathname}</code>. Try the <Link to="/writing">writing archive</Link> or
            go <Link to="/">home</Link>.
          </p>
        </header>
      </main>
    </EditorialLayout>
  );
}
