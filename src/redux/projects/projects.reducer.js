import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../services/api-service";

const INITIAL_STATE = {
  projectsData: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const data = await apiFetch('/nocodb/project_cards', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return data.list;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState: INITIAL_STATE,
  reducers: {
    setProjects(state, action) {
      state.projectsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projectsData = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setProjects } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
export const selectProjects = (state) => state.projects.projectsData;
