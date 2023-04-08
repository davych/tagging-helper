import React, { FC } from "react";
import { pipeClickable } from "../../core/initialize";

// WithClickable
export type WithClickableProps = {
  onClick: () => void;
  identifier?: string;
  [key: string]: any;
};

export const withTaggingClickable = <P extends WithClickableProps>(
  WrappedComponent: FC<P>
): FC<P> => {
  return (props) => {
    const onClick = () => {
      if (props.identifier) {
        pipeClickable(props.identifier);
      }
      props.onClick && props.onClick();
    };
    return <WrappedComponent {...props}  onClick={onClick}  />;
  };
}; 
