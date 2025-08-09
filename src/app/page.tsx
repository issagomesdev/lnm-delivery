import { headers } from 'next/headers';
import ClientSwitcher from './ClientSwitcher';

export default async function Home() {
  const hdrs = await headers();
  const ua = hdrs.get('user-agent') ?? '';
  const initialIsMobile =
    /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(ua);

  return <ClientSwitcher initialIsMobile={initialIsMobile} />;
}