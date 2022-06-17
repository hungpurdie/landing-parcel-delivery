import classNames from 'classnames/bind';
import BigBox from '~/components/Icons/BigBox';
import styles from './SectionTwo.module.scss';

const cx = classNames.bind(styles);

export default function SectionTwo() {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('big-box')}>
          <div className={cx('overlay')}>
            <BigBox />
          </div>
        </div>
        <div className={cx('content')}>
          <h3 className={cx('heading')}>
            Keeping everything safe and gibing quality services to you.
          </h3>
          <p className={cx('description')}>
            If you send lots of parcels you can sort it in seconds by connecting your Hermes account
            with eBay, Amazon and Shopify. You can also upload a CSV file - whatever&#39;s easiest!
          </p>
        </div>
      </div>
    </section>
  );
}
