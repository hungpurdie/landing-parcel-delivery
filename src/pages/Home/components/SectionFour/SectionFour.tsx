import styles from './SectionFour.module.scss';
import classNames from 'classnames/bind';
import avatar from '~/assets/images/avatar.png';

const cx = classNames.bind(styles);

export default function SectionFour() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('left')}>
          <img src={avatar} alt='avatar' className={cx('avatar')} />
          <div className={cx('text')}>
            <h4 className={cx('title')}>Samanta Kelley</h4>
            <p className={cx('sub-title')}>Founder</p>
          </div>
        </div>
        <div className={cx('right')}>
          <blockquote cite='Albert Einstein'>
            I Love the analytics that lobar.design offersall in one place. I Love the analytics at
            that lobar.design offers all place.
          </blockquote>
        </div>
      </div>
    </div>
  );
}
