import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getData = createAsyncThunk("haberSlice/getData", async () => {
  const response = await axios(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
  );

  return response.data.articles;
});

export const haberSlice = createSlice({
  name: "haberSlice",

  initialState: {
    haberler: [],
    loading: true,
  },

  reducers: {
    clearHaber: () => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.haberler = action.payload;

        state.loading = false;
      });
  },
});

export const { clearHaber } = haberSlice.actions;

export default haberSlice.reducer;
