export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  ...props
}) {
  const baseClasses = 'rounded-md font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
  ].join(' ');
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}