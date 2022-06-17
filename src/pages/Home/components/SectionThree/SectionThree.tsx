import classNames from 'classnames/bind';
import Card from '~/components/Card';
import Box from '~/components/Icons/Box';
import styles from './SectionThree.module.scss';
import type { Card as ICard } from '~/models/Card';

const cx = classNames.bind(styles);

const cards: ICard[] = [
  {
    title: 'Normal service',
    description: '$2 Charge',
    icon: <Box width={20} height={20} />,
    background: '#145ff0',
  },
  {
    title: 'Same day',
    description: '$7 Charge',
    icon: <Box width={20} height={20} />,
    background: '#FF6845',
  },
  {
    title: 'Next day',
    description: '$5 Charge',
    icon: <Box width={20} height={20} />,
    background: '#FCAA0F',
  },
];

export default function SectionThree() {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('left')}>
          <h2 className={cx('heading')}>Discover the joy of having a lot on your service.</h2>
          <ul className={cx('text-list')}>
            <li className={cx('text-item')}>
              <h3 className={cx('title')}>Offer</h3>
              <p className={cx('description')}>Safe place delivery photo confirmation.</p>
            </li>
            <li className={cx('text-item')}>
              <h3 className={cx('title')}>Security</h3>
              <p className={cx('description')}>Divert to a neighbour or safe place.</p>
            </li>
            <li className={cx('text-item')}>
              <h3 className={cx('title')}>Real time</h3>
              <p className={cx('description')}>Regular, real-time tracking information.</p>
            </li>
            <li className={cx('text-item')}>
              <h3 className={cx('title')}>Payment</h3>
              <p className={cx('description')}>A delivery time window on the day</p>
            </li>
          </ul>
        </div>

        <div className={cx('right')}>
          <div className={cx('background')}>
            <div className={cx('overlay')}>
              <h2 className={cx('title')}>Happiness in each shipment</h2>
              <svg
                width='336'
                height='459'
                viewBox='0 0 336 459'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M303 0H33C14.7746 0 0 14.7746 0 33V136.041C0 139 0.400299 141.916 1.1379 144.782C16.7367 205.39 26.9839 318.919 192.5 274C362 228 244 459 182 459H303C321.225 459 336 444.225 336 426V33C336 14.7746 321.225 0 303 0Z'
                  fill='#FF9B84'
                />
              </svg>
            </div>
            <div className={cx('bottom')}>
              <h2 className={cx('title-2')}>Delivery Types</h2>
              <ul className={cx('card-list')}>
                {cards.map((card, index) => (
                  <li key={index} className={cx('card-item')}>
                    <Card
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                      background={card.background}
                      size='small'
                      shape='circle'
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
