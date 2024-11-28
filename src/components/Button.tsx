interface ButtonProps {
  label?: string;
  onClick?: (
    e: React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  className?: string;
}

function Button({
  label = '',
  onClick = () => {},
  className = '',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-12 py-2 hover:bg-opacity-90 rounded ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
