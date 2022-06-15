import './GlobalStyle.scss';
import 'normalize.css';

interface GlobalStyleProps {
  children: JSX.Element;
}

export default function GlobalStyle({ children }: GlobalStyleProps) {
  return children;
}
