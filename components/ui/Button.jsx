export function Button({
    children,
    variant = 'default',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
  }) {
    const variants = {
      default: 'bg-gray-900 hover:bg-gray-800 text-white',
      outline: 'border-2 border-gray-900 hover:bg-gray-100 text-gray-900',
      red: 'bg-red-600 hover:bg-red-700 text-white',
    }
  
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg',
    }
  
    return (
      <button
        className={`
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? 'w-full' : ''}
          rounded-md font-medium transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    )
  }