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
  reducers: {
    reset: (state, action) => {
      return {
        plans: [],
        plan: {},
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
      };
    },
  },
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
      })
      .addCase(getPlan.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.plan = action.payload;
        state.isError = false;
      })
      .addCase(getPlan.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createPlan.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(createPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.plans = [action.payload, ...state.plans];
        state.isError = false;
      })
      .addCase(createPlan.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = planSlice.actions;
export default planSlice.reducer;

// Get Plans
export const getPlans = createAsyncThunk(
  "FETCH/PLANS",
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

// Get Plan
export const getPlan = createAsyncThunk("FETCH/PLAN", async (pid, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token;
  try {
    return await planService.fetchPlan(pid, token);
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Add Plan
export const createPlan = createAsyncThunk(
  "ADD/PLAN",
  async (formData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await planService.addPlan(formData, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
