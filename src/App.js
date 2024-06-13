import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Preferences from './components//Preferences/Index.jsx';
import Minify from './components/Minify/Index.jsx';
import Synonyms from './components/Synonyms/Index.jsx';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Preferences" element={<Preferences />} />
          <Route path="Minify" element={<Minify />} />
          <Route path="Synonyms" element={<Synonyms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
