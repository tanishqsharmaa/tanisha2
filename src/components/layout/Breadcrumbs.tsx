import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getStateBySlug, getTextileBySlug, getCategoryBySlug } from '../../data';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  if (pathname === '/') {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: { label: string; to: string }[] = [{ label: 'Home', to: '/' }];

  if (segments[0] === 'search') {
    breadcrumbs.push({ label: 'Search Archive', to: '/search' });
  } else if (segments[0] === 'explore') {
    breadcrumbs.push({ label: 'Explore', to: '/explore' });
  } else if (segments[0] === 'about') {
    breadcrumbs.push({ label: 'About Archive', to: '/about' });
  } else if (segments[0] === 'states' && segments[1]) {
    breadcrumbs.push({ label: 'Explore', to: '/explore' });
    const state = getStateBySlug(segments[1]);
    breadcrumbs.push({ label: state?.name || segments[1], to: `/states/${segments[1]}` });
  } else if (segments[0] === 'textiles' && segments[1]) {
    breadcrumbs.push({ label: 'Explore', to: '/explore' });
    const textile = getTextileBySlug(segments[1]);
    if (textile) {
      breadcrumbs.push({ label: textile.stateName, to: `/states/${textile.stateSlug}` });
      breadcrumbs.push({ label: textile.name, to: `/textiles/${segments[1]}` });
    } else {
      breadcrumbs.push({ label: segments[1], to: `/textiles/${segments[1]}` });
    }
  } else if (segments[0] === 'classification' && segments[1]) {
    breadcrumbs.push({ label: 'Explore', to: '/explore' });
    const cat = getCategoryBySlug(segments[1]);
    breadcrumbs.push({ label: cat?.title || segments[1], to: `/classification/${segments[1]}` });
  }

  return (
    <div className="bg-beige/30 border-b border-beige/60 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs text-charcoal/70 overflow-x-auto">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.to}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-charcoal/40 flex-shrink-0" />}
                {isLast ? (
                  <span className="font-semibold text-indigo truncate max-w-[200px]" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link to={crumb.to} className="hover:text-madder transition-colors truncate">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 text-xs text-charcoal/70 hover:text-madder transition-colors ml-4 flex-shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Back</span>
        </button>
      </div>
    </div>
  );
};
