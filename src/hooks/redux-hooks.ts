import { AppDispatch, RootState } from '@store/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispath = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
