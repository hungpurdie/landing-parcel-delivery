import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
interface ButtonProps {
  size: 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  outline?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export default function Button({
  size,
  variant,
  to,
  href,
  outline,
  rounded = true,
  disabled,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...restProps
}: ButtonProps) {
  let Component: any = 'button';

  const props = {
    onClick,
    to,
    href,
    ...restProps,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    (Object.keys(props) as (keyof typeof props)[]).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    [size]: size,
    [variant || '']: variant,
    [className || '']: className,
    outline,
    rounded,
    disabled,
  });

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}
