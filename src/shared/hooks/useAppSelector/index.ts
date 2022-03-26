import { ReduxStore } from 'shared/store/types';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
