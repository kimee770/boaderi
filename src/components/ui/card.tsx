import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLElement>;

export function Card({ className = "", ...props }: CardProps) {
  return <section className={`card ${className}`.trim()} {...props} />;
}

export function CardHeader({ className = "", ...props }: CardProps) {
  return <div className={`card-header ${className}`.trim()} {...props} />;
}

export function CardContent({ className = "", ...props }: CardProps) {
  return <div className={`card-content ${className}`.trim()} {...props} />;
}
