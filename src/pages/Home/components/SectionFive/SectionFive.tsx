import styles from './SectionFive.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useMediaQuery } from '~/hooks';

const cx = classNames.bind(styles);

export default function SectionFive() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <section className={cx('wrapper')}>
      <div className={cx('circle', 'circle-small')}></div>
      <div className={cx('circle', 'circle-big')}></div>
      <div className={cx('inner')}>
        <div className={cx('content')}>
          <h3 className={cx('title')}>Want to know about exciting and awsome Offer?</h3>
          <div className={cx('email')}>
            <input type='email' placeholder='Enter email address...' />
            <div className={cx('btn')}>
              <Button size={isMobile ? 'medium' : 'large'} variant='primary'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
