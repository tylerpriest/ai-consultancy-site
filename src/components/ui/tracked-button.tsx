import * as React from "react";
import { Button, ButtonProps } from "./button";
import { trackButtonClick } from "@/lib/analytics";

interface TrackedButtonProps extends ButtonProps {
  trackingName: string;
  trackingLocation?: string;
}

const TrackedButton = React.forwardRef<HTMLButtonElement, TrackedButtonProps>(
  ({ trackingName, trackingLocation, onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Track the button click
      trackButtonClick(trackingName, trackingLocation);
      
      // Call the original onClick handler if provided
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <Button
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

TrackedButton.displayName = "TrackedButton";

export { TrackedButton };