import React from 'react';
import { siteConfig } from '../../config/site';

export type ButtonVariant = 'amber' | 'navy' | 'whatsapp' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'amber',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
  'aria-label': ariaLabel,
}) => {
  const baseStyles =
    'rounded-full inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-105 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 select-none';

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const variantStyles: Record<ButtonVariant, string> = {
    amber: 'bg-[#F5B400] text-[#0B1530] hover:bg-[#D49E00] shadow-sm hover:shadow-md',
    navy: 'bg-[#0B1530] text-white hover:bg-[#132044] shadow-sm hover:shadow-md',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-sm hover:shadow-md',
    outline: 'border-2 border-[#F5B400] text-[#F5B400] bg-transparent hover:bg-[#F5B400] hover:text-[#0B1530]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    const defaultRel = isExternal && !href.startsWith('tel:') && !href.startsWith('mailto:') ? 'noopener noreferrer' : undefined;
    const defaultTarget = isExternal && !href.startsWith('tel:') && !href.startsWith('mailto:') ? '_blank' : undefined;

    return (
      <a
        href={href}
        onClick={onClick as (e: React.MouseEvent<HTMLAnchorElement>) => void}
        className={combinedClasses}
        target={target ?? defaultTarget}
        rel={rel ?? defaultRel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick as (e: React.MouseEvent<HTMLButtonElement>) => void}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
