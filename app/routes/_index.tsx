import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/articles/deploy-remix-vite-on-lambda-using-pulumi');
  }, [navigate]);

  return null;
}
