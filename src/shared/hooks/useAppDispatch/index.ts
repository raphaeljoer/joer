import { useDispatch } from 'react-redux';
import { ReduxDispatch } from 'shared/store/types';

export const useAppDispatch = () => useDispatch<ReduxDispatch>();
