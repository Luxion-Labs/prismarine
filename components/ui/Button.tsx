import "./button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass = `button--${variant}`;
  const sizeClass = `button--${size}`;

  return (
    <button
      className={`button ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    />
  );
}
