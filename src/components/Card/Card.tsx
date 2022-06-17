import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  background?: string;
  size?: 'small' | 'large';
  shape?: 'circle' | 'square';
}
export default function Card({ title, description, icon, background, size, shape }: CardProps) {
  const classes = cx('wrapper', {
    [size || 'small']: size,
    [shape || 'square']: shape,
  });

  return (
    <div className={classes}>
      <div
        className={cx('icon')}
        style={{
          background: `${background}`,
        }}
      >
        {icon}
      </div>
      <div className={cx('content')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('description')}>{description}</div>
      </div>
    </div>
  );
}
