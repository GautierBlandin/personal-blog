import { Article } from '@components';
import articleContent from '../articles/deployRemixViteOnAwsWithPulumi.html?raw';

export default function Index() {
  return <Article content={articleContent} />;
}
