import type { MetaFunction } from '@remix-run/node';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { Article } from '@components';
import articleContent from '../articles/deployRemixViteOnAwsWithPulumi.html?raw';

export const meta: MetaFunction = () => {
  return [
    { title: 'Gautier Blandin - Software Engineer' },
    { name: 'description', content: 'A blog about software engineering' },
  ];
};

export default function Index() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mt-12">
        <Article content={articleContent} />
      </div>
    </div>
  );
}
