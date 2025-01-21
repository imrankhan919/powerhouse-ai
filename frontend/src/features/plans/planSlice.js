import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import planService from "./planService";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    plans: [],
    plan: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlans.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.plans = action.payload;
        state.isError = false;
      })
      .addCase(getPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default planSlice.reducer;

// Get Plan
export const getPlans = createAsyncThunk(
  "FETCH/PLAN",
  async (uid, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await planService.fetchPlans(uid, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
