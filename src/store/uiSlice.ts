import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isUploadModalOpen: boolean;
  activeFeature: string | null;
  isProcessing: boolean;
}

const initialState: UiState = {
  isUploadModalOpen: false,
  activeFeature: null,
  isProcessing: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openUploadModal: (state, action: PayloadAction<string>) => {
      state.isUploadModalOpen = true;
      state.activeFeature = action.payload;
    },
    closeUploadModal: (state) => {
      state.isUploadModalOpen = false;
      state.activeFeature = null;
    },
    setProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
  },
});

export const { openUploadModal, closeUploadModal, setProcessing } = uiSlice.actions;
export default uiSlice.reducer;