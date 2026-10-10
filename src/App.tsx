import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { getPostByLegacyId } from './content/posts';
import { RouteFx } from './site/RouteFx';
import Home from './pages/Home';
import Writing from './pages/Writing';
import PostPage from './pages/PostPage';
import Papers from './pages/Papers';
import PaperPage from './pages/PaperPage';
import Research from './pages/Research';
import About from './pages/About';
import NotFound from './pages/NotFound';

/** Old /blog/:id links (shared before the redesign) land on the new post URL. */
function LegacyPost() {
  const { id = '' } = useParams();
  const post = getPostByLegacyId(id);
  return <Navigate to={post ? `/writing/${post.slug}` : '/writing'} replace />;
}

const App = () => (
  <BrowserRouter>
    <RouteFx>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<PostPage />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/papers/:slug" element={<PaperPage />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Navigate to="/writing" replace />} />
        <Route path="/blog/:id" element={<LegacyPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RouteFx>
  </BrowserRouter>
);

export default App;
