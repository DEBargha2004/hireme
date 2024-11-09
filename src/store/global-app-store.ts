import { create } from "zustand";
import { produce } from "immer";

type State = {
  isNavbarCompressed: boolean;
};
type Actions = {
  setIsNavbarCompressed: (
    isNavbarCompressed: State["isNavbarCompressed"],
  ) => void;
  toggleIsNavbarCompressed: () => void;
};

export const useGlobalAppStore = create<State & Actions>((set) => ({
  isNavbarCompressed: true,
  setIsNavbarCompressed: (isNavbarCompressed) =>
    set(
      produce((state: State) => {
        state.isNavbarCompressed = isNavbarCompressed;
      }),
    ),
  toggleIsNavbarCompressed: () =>
    set(
      produce((state: State) => {
        state.isNavbarCompressed = !state.isNavbarCompressed;
      }),
    ),
}));
