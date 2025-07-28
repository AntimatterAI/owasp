interface ButtonProps {
  text: string;
  variant?: "primary" | "ghost-white" | "ghost-dark" | "light-blue";
  size?: "40" | "48" | "56";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  variant = "primary",
  size = "40",
  className = "",
  disabled = false,
  onClick
}: ButtonProps) {
  const baseClasses = "font-['Poppins'] font-semibold text-center transition-all duration-300 flex items-center justify-center rounded-sm cursor-pointer";
  
  const sizeClasses = {
    "40": "h-10 px-4 text-[14px] leading-[20px] tracking-[-0.28px]",
    "48": "h-12 px-6 text-[14px] leading-[20px] tracking-[-0.28px]",
    "56": "h-14 px-8 text-[16px] leading-[24px] tracking-[-0.32px]"
  };

  const variantClasses = {
    "primary": "bg-[#003594] text-[#ffffff] hover:bg-[#004bbb] shadow-sm hover:shadow-md",
    "ghost-white": "border-2 border-[#757575] text-[#ffffff] hover:border-white/60 hover:bg-white/10",
    "ghost-dark": "border-2 border-[#757575] text-[#101820] hover:border-gray-400 hover:bg-gray-50",
    "light-blue": "bg-[#00a7e1] text-[#ffffff] hover:bg-[#0096d1] shadow-sm hover:shadow-md"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {text}
    </button>
  );
} 