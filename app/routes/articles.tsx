import type { MetaFunction } from '@remix-run/node';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Gautier Blandin - A blog about Software' },
    { name: 'description', content: 'A blog about software engineering' },
  ];
};

export default function Index() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mt-12 mb-12 ml-2 mr-2">
        <Outlet />
      </div>
    </div>
  );
}
