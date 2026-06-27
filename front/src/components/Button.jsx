export default function Button({ children, type = 'button', variant = 'primary', className = '', ...props }) {
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';

  return (
    <button type={type} className={`duo-btn ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
