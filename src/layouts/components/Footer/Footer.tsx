import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Facebook from '~/components/Icons/Facebook';
import LinkedIn from '~/components/Icons/LinkedIn';
import Twitter from '~/components/Icons/Twitter';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('left')}>
          <Link to='/'>
            <h1 className={cx('logo')}>Besnik</h1>
          </Link>
          <p className={cx('description')}>Twist,for a more intentional way of working together.</p>
          <ul className={cx('socials')}>
            <li className={cx('icon')}>
              <Facebook />
            </li>
            <li className={cx('icon')}>
              <LinkedIn />
            </li>
            <li className={cx('icon')}>
              <Twitter />
            </li>
          </ul>
        </div>

        <div className={cx('right')}>
          <div className={cx('links')}>
            <h2>PRODUCTS</h2>
            <ul className={cx('links-list')}>
              <li>Features</li>
              <li>Remote Teams</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>API</li>
            </ul>
          </div>

          <div className={cx('links')}>
            <h2>RESOURCES</h2>
            <ul className={cx('links-list')}>
              <li>Downloads</li>
              <li>Help Center</li>
              <li>Twist Guides</li>
              <li>Remote Work guides</li>
              <li>Twist vs Slack</li>
            </ul>
          </div>

          <div className={cx('links')}>
            <h2>COMPANY</h2>
            <ul className={cx('links-list')}>
              <li>About Doist</li>
              <li>Press</li>
              <li>Todoist</li>
              <li>We are hiring!</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
