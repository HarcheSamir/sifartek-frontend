import { create } from 'zustand';

const useLayoutStore = create((set, get) => ({
    sideBar: false,
    switchSideBar: () => {
        set({ sideBar: !get().sideBar });
    },
    switchSideBarOff: () => {
        set({ sideBar: false });
    },
}));

export default useLayoutStore;
