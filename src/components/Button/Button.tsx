interface ButtonProps {
  onClick: () => void;
  text: string;
}
export default function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}
