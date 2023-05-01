import { useDispatch } from 'react-redux';
import {AppDispatch} from '../types/root-state';

export const useAppDispatch = () => useDispatch<AppDispatch>();
