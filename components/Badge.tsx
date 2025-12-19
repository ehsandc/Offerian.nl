import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'info' | 'default'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    success: 'bg-secondary-100 text-secondary-800 border-secondary-200',
    warning: 'bg-accent-100 text-accent-800 border-accent-200',
    info: 'bg-primary-100 text-primary-800 border-primary-200',
    default: 'bg-gray-100 text-gray-800 border-gray-200',
  }
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
