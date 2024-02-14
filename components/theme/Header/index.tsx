import { Navigation } from '@/components/ui';

export function Header() {
  return (
    <header className="fixed inset-0 z-10 h-fit px-6 xl:px-8">
      <Navigation />
    </header>
  );
}
