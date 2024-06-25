import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva( "bg-primary absolute top-3 bottom-0 h-[20px] w-[20px] py-6 px-11 rounded-full right-4 flex justify-center items-center"
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
