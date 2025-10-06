import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/login');
  // This component will not render anything as the redirect happens on the server.
  return null;
}