import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ArticlesPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);
};

export default ArticlesPage;
