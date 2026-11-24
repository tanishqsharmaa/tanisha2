import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ExplorePage from './pages/ExplorePage';
import ClassificationPage from './pages/ClassificationPage';
import StatePage from './pages/StatePage';
import TextileDetailPage from './pages/TextileDetailPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/classification/:categorySlug" element={<ClassificationPage />} />
          <Route path="/states/:stateSlug" element={<StatePage />} />
          <Route path="/textiles/:textileSlug" element={<TextileDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
