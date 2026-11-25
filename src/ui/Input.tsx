import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "../lib/cn";

// Heights match Button sizes (28-44) so inputs and buttons line up in a row.
const sizes = {
    xs: "h-7 px-2 text-xs file:text-xs",
    sm: "h-8 px-2.5 text-sm file:text-sm",
    md: "h-9 px-3 text-sm file:text-sm",
    lg: "h-10 px-3.5 text-sm file:text-sm",
    xl: "h-11 px-4 text-base file:text-base",
} as const;

export type InputSize = keyof typeof sizes;

// Native `size` (character width) is replaced by the visual size scale.
export interface InputProps extends Omit<InputPrimitive.Props, "size"> {
    size?: InputSize;
}

export function Input({ size = "sm", className, ...props }: InputProps) {
    return (
        <InputPrimitive
            className={(state) =>
                cn(
                    "w-full min-w-0 rounded-md border border-border bg-transparent text-text outline-none transition-[border-color] duration-150 ease-out",
                    "placeholder:text-muted selection:bg-accent selection:text-accent-fg",
                    "focus-visible:border-muted",
                    "aria-invalid:border-danger aria-invalid:focus-visible:border-danger",
                    "data-invalid:border-danger data-invalid:focus-visible:border-danger",
                    "data-disabled:cursor-not-allowed data-disabled:opacity-50",
                    "file:mr-3 file:h-full file:border-0 file:bg-transparent file:font-medium file:text-text",
                    sizes[size],
                    typeof className === "function" ? className(state) : className,
                )
            }
            {...props}
        />
    );
}
