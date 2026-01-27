import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps, Transition } from "framer-motion";
import { cn } from "@/lib/utils";

const glassCardVariants = cva(
  "relative overflow-hidden border transition-all duration-300 backdrop-blur-xl",
  {
    variants: {
      intent: {
        primary:
          "bg-white/[0.03] border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10",
        secondary: "bg-black/20 border-white/5",
        ghost: "bg-transparent border-transparent hover:bg-white/[0.02]",
      },
      rounding: {
        none: "rounded-none",
        sm: "rounded-lg",
        md: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-full",
      },
      paddings: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      hoverEffect: {
        true: "hover:shadow-2xl hover:shadow-white/5",
        false: "",
      },
    },
    defaultVariants: {
      intent: "primary",
      rounding: "lg",
      paddings: "md",
      hoverEffect: true,
    },
  },
);

const SPRING_TRANSITION: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

export interface GlassCardProps
  extends HTMLMotionProps<"div">, VariantProps<typeof glassCardVariants> {
  children?: React.ReactNode;
  hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, intent, paddings, rounding, hoverEffect, children, ...props },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={false}
        whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
        transition={SPRING_TRANSITION}
        className={cn(
          glassCardVariants({ intent, paddings, rounding, hoverEffect }),
          className,
        )}
        {...props}
      >
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };
