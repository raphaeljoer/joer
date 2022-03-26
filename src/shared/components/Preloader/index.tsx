import { ProgressLoader } from '../ProgressLoader';

type Props = {
  children?: JSX.Element;
  isLoading: boolean;
};

export const Preloader = ({ children, isLoading }: Props): JSX.Element => {
  if (isLoading) return <ProgressLoader />;
  return children ? children : <></>;
};
