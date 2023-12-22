import {create} from 'zustand';

export const useConfigStore = create(set => ({
  height: 0,
  users: null,
  setHeight: height => set({height: height}),
  width: 0,
  setWidth: width => set({width: width}),
  setAllUsers: users => set({users: users}),
}));
