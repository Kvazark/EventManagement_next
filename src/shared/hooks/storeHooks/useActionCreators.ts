import { useAppDispatch } from './useAppDispatch';
import {
	ActionCreatorsMapObject,
	AsyncThunk,
	bindActionCreators,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
	actions: Actions
): BoundActions<Actions> => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(actions, dispatch), []);
};

type BoundActions<Actions extends ActionCreatorsMapObject> = {
	[key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
		? BoundAsyncThunk<Actions[key]>
		: Actions[key];
};

type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
	...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>;
