import { SnackbarContent } from 'notistack';
import React, { forwardRef } from 'react';

type Props = {
  id: string | number;
  message: string | React.ReactNode;
};

export const Snack = forwardRef<HTMLDivElement, Props>(function Snack(
  props,
  ref
) {
  return (
    <SnackbarContent ref={ref}>
      <>{props.message}</>
    </SnackbarContent>
  );
});
