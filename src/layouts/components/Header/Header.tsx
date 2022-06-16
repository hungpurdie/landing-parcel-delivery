import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Checked from '~/components/Icons/Checked';
import hero from '~/assets/images/hero.png';
import Avatar from '~/components/Icons/Avatar';
import Attention from '~/components/Icons/Attention';
import Shipping from '~/components/Icons/Shipping';

const cx = classNames.bind(styles);

const menuItems = [
  {
    label: 'Product',
    to: '/product',
  },
  {
    label: 'About Us',
    to: '/about',
  },
  {
    label: 'Features',
    to: '/features',
  },
  {
    label: 'Contact Us',
    to: '/contact',
  },
];

export default function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <nav className={cx('nav-top')}>
          <Link className={cx('logo-link')} to='/'>
            <h1 className={cx('logo')}>Besnik</h1>
          </Link>
          <ul className={cx('menu')}>
            {menuItems.map((item, index) => (
              <Link key={index} className={cx('menu-item-link')} to={item.to}>
                <li className={cx('menu-item')}>{item.label}</li>
              </Link>
            ))}
          </ul>
          <div className={cx('actions-sign')}>
            <Button size='medium'>Sign In</Button>
            <Button size='medium' variant='primary'>
              Sign Up
            </Button>
          </div>
        </nav>

        <div className={cx('content-wrapper')}>
          <div className={cx('content-inner')}>
            <h2 className={cx('title')}>
              We bring the
              <span className={cx('title-highlight')}>Percel&nbsp;</span>
              to your doorstep.
            </h2>

            <div className={cx('description')}>
              <p>Save time tackling your to-do list at home, at work, or on the go.</p>
            </div>
            <div className={cx('actions')}>
              <Button variant='secondary' size='large'>
                Learn More
              </Button>
              <Link to='signup' className={cx('btn-link')}>
                Sign Up For Free
              </Link>
            </div>
            <div className={cx('text-detail')}>
              <Checked />
              <p>No credit card required</p>
            </div>
          </div>

          <div className={cx('hero-inner')}>
            <div className={cx('card', 'card-one')}>
              <p className={cx('line', 'line-one')} />
              <p className={cx('line', 'line-two')} />
              <div className={cx('line-text')}>
                <h5 className={cx('text', 'text-one')}>Address</h5>
                <h5 className={cx('text', 'text-two')}>Products</h5>
              </div>
              <p className={cx('line-circle')}>
                <svg
                  width='118'
                  height='20'
                  viewBox='0 0 118 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='118' height='20' rx='10' fill='#F7FAFF' />
                  <rect x='44' y='7' width='30' height='6' rx='3' fill='#C8DCFF' />
                </svg>
              </p>
            </div>
            <div className={cx('card', 'card-two')}>
              <Avatar />
              <div className={cx('info')}>
                <h5 className={cx('name')}>Lana Rose</h5>
                <p>Arriving soon</p>
              </div>
              <div className={cx('icon')}>
                <Attention />
              </div>
            </div>

            <div className={cx('hero')}>
              <img src={hero} alt='hero' />
            </div>

            <div className={cx('card', 'card-three')}>
              <p className={cx('line', 'line-one')} />
              <p className={cx('line', 'line-two')} />
              <Shipping />
              <div className={cx('info')}>
                <h5 className={cx('name')}>Shipping</h5>
                <p>Safe Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
