import classNames from 'classnames/bind';
import Card from '~/components/Card';
import Box from '~/components/Icons/Box';
import Clock from '~/components/Icons/Clock';
import type { Card as ICard } from '~/models/Card';
import styles from './SectionOne.module.scss';
const cx = classNames.bind(styles);

const cards: ICard[] = [
  {
    title: 'Next day delivery',
    description: 'We will deliver your product in the next day of your order. Deliver it to door.',
    icon: <Box />,
    background: '#145ff0',
  },
  {
    title: 'Safe and secure',
    description: 'We can also arrange for a friendly, courier to collect your product.',
    icon: <Clock />,
    background: '#FF6845',
  },
  {
    title: 'Drop off any parcelshop',
    description: 'We also offer a parcel just tell us where you’d like your parcel collecting.',
    icon: <Box />,
    background: '#FCAA0F',
  },
];

export default function SectionOne() {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h1 className={cx('heading')}>What we provide</h1>
        <ul className={cx('card-list')}>
          <div className={cx('circle', 'circle-top')}></div>
          {cards.map((card, index) => (
            <li key={index} className={cx('card-item')}>
              <Card
                title={card.title}
                description={card.description}
                icon={card.icon}
                background={card.background}
              />
            </li>
          ))}
          <div className={cx('circle', 'circle-bottom')}></div>
        </ul>
      </div>
    </section>
  );
}
