import {createAction, props} from '@ngrx/store';

export type filterType = 'all' | 'completed' | 'pending';
export const setFilter = createAction('[Filter] Set Filter', props<{ filter: filterType }>());
