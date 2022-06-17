import MainLayout from '~/layouts/MainLayout/MainLayout';
import SectionOne from '~/pages/Home/components/SectionOne';
import SectionTwo from '~/pages/Home/components/SectionTwo';

export default function Home() {
  return (
    <MainLayout>
      <SectionOne />
      <SectionTwo />
    </MainLayout>
  );
}
