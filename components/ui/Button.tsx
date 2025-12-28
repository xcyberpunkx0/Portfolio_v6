interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses = "px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2";
  const variantClasses = {
    primary: "bg-accent-yellow text-black hover:scale-105 hover:shadow-lg hover:shadow-accent-yellow/30",
    secondary: "border-2 border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-black",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
