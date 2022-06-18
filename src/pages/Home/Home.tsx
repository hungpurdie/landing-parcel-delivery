import MainLayout from '~/layouts/MainLayout/MainLayout';
import SectionFive from '~/pages/Home/components/SectionFive';
import SectionFour from '~/pages/Home/components/SectionFour';
import SectionOne from '~/pages/Home/components/SectionOne';
import SectionThree from '~/pages/Home/components/SectionThree';
import SectionTwo from '~/pages/Home/components/SectionTwo';

export default function Home() {
  return (
    <MainLayout>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </MainLayout>
  );
}
