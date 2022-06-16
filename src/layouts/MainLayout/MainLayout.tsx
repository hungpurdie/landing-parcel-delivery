import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={cx('layout')}>
      <Header />
      <main className={cx('main')}>{children}</main>
      <Footer />
    </div>
  );
}
