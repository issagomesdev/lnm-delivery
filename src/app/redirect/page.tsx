'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function RedirectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const to = searchParams.get('to') || '/';
    window.history.pushState(null, '', '/');
    router.replace(to);
  }, [router, searchParams]);

  return null;
}
