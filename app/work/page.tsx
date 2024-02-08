import { Heading } from '@/components/theme';
import { Menu } from '@/components/routes/Work';

export default async function Page() {
  return (
    <div className="flex h-[100lvh]  flex-row items-end justify-between pb-44">
      <Heading>Work</Heading>
      <Menu items={[]} />
    </div>
  );
}
