import { useDispatch } from 'react-redux';
import {AppDispatch} from '../types/rootState';

export const useAppDispatch = () => useDispatch<AppDispatch>();
