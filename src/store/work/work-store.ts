import { create } from 'zustand'



type ButtonStoreState = {
    isSaved: boolean;
    onSaved: () => void;
    notSaved: () => void;
};

export const useButtonStore = create<ButtonStoreState>((set) => ({
    // isSaved: localStorage.getItem('isSaved') === 'true', // Initialize from localStorage
    isSaved: false, // Initialize from localStorage
    onSaved: () => {
        set({ isSaved: true });
        // localStorage.setItem('isSaved', 'true'); // Save to localStorage
    },
    notSaved: () => {
        set({ isSaved: false });
        // localStorage.setItem('isSaved', 'false'); // Save to localStorage
    }
}));

