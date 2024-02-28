import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./button";

type SubmitButtonProps = {
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
};

// this component will be used to submit forms
const SubmitButton = ({ children, variant, className }: SubmitButtonProps) => {
  const { pending } = useFormStatus(); // get pending state while form submits the server action
  return (
    <Button
      type="submit"
      variant={variant}
      disabled={pending}
      className={cn(className)}
    >
      {pending ? <Loader2 className="animate-spin" /> : children}
    </Button>
  );
};

export default SubmitButton;
