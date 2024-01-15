import { create } from 'zustand';
import { PersonControl } from '../app/People/Person/Person.control';

type personControlsState = {
  personControls: PersonControl[];
  addControl: (personControl: PersonControl) => void;
  setControls: (personControls: PersonControl[]) => void;
};

export const usePersonControlsStore = create<personControlsState>((set) => ({
  personControls: [],
  addControl: (personControl) =>
    set((state) => ({
      personControls: [...state.personControls, personControl],
    })),
  setControls: (personControls) =>
    set(() => ({
      personControls: [...personControls],
    })),
}));
