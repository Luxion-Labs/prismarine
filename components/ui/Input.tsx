import "./input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Input({
  label,
  error,
  helperText,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id || Math.random().toString(36).substr(2, 9);

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`input ${error ? "input--error" : ""} ${className}`.trim()}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
      {helperText && !error && (
        <span className="input-helper">{helperText}</span>
      )}
    </div>
  );
}
