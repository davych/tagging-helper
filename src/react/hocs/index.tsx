import React, { FC } from "react";

// WithClickable
export type WithClickableProps = {
  onClick: () => void;
  identifier?: string;
};

export const withTaggingClickable = <P extends WithClickableProps>(
  WrappedComponent: FC<P>
): FC<P> => {
  return (props) => {
    const onClick = () => {
      console.log("click", props.identifier);
      props.onClick && props.onClick();
    };
    return <WrappedComponent {...props}  onClick={onClick}  />;
  };
}; 
