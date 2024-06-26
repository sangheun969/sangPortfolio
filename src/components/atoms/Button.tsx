import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const ButtonVariants = cva(
  `
        flex justify-center items-center active:scale font-bold text-slate-100 transition-all shadow-md
    `,
  {
    variants: {
      variant: {
        default: "",
        icontBtn: "border border-slate-400 text-slate-600",
        sendBtn1: "bg-white text-slate-600 hover:bg-slate-300",
        sendBtn2: "opacity-0 text-slate-600",
      },
      size: {
        default: "",
        sm: "w-[40px] h-[40px] text-[16px] rounded-md",
        mm: "w-[95px] h-[40px] text-[16px] rounded-md",
        dd: "w-[85px] h-[85px] text-[16px] rounded-xl",
        md: "w-[105px] h-[40px] text-[16px] rounded-xl",
        mdl: "w-[120px] h-[40px] text-[16px] rounded-xl",
        mlg: "w-[170px] h-[40px] text-[16px] rounded-xl",
        lg: "w-[300px] h-[50px] text-[20px] rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  label?: string;
  children?: React.ReactElement;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  label,
  ...props
}) => {
  return (
    <button className={cn(ButtonVariants({ variant, size }))} {...props}>
      {children && children}
      {label && label}
    </button>
  );
};

export default Button;
