import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const mockDelay = ms => new Promise(r => setTimeout(r, ms));

export const fetchMangas = createAsyncThunk("mangas/fetchAll", async () => {
  await mockDelay(500);
  return [
    { id: "1", title: "Demon Slayer", image: require("../assets/manga1.png"), description: "Tanjiro em busca de cura para Nezuko.", isInStock: true },
    { id: "2", title: "JuJutsu Kaisen", image: require("../assets/manga2.png"), description: "Itadori enfrenta maldições com seus aliados.", isInStock: false },
    { id: "3", title: "Boku no Hero Academia", image: require("../assets/manga3.png"), description: "Midoriya trilha o caminho do herói.", isInStock: true },
    { id: "4", title: "Hunter x Hunter", image: require("../assets/manga4.png"), description: "Gon procura por seu pai e aventuras.", isInStock: true },
    { id: "5", title: "One Piece", image: require("../assets/manga5.png"), description: "Luffy em busca do One Piece.", isInStock: false },
    { id: "6", title: "Eleceed", image: require("../assets/manga6.png"), description: "Jiwoo e Kayden contra organizações secretas.", isInStock: true },
  ];
});

export const fetchMangaById = createAsyncThunk("mangas/fetchById", async (id, { getState }) => {
  await mockDelay(300);
  const all = getState().mangas.data;
  const found = all.find(m => m.id === id);
  if (found) return found;
  return { id: String(nanoid()), title: "Desconhecido", image: null, description: "Sem dados", isInStock: false };
});

const mangasSlice = createSlice({
  name: "mangas",
  initialState: {
    data: [],
    favorites: [],
    selected: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const exists = state.favorites.includes(id);
      state.favorites = exists ? state.favorites.filter(f => f !== id) : [...state.favorites, id];
    },
    removeFavorite(state, action) {
      const id = action.payload;
      state.favorites = state.favorites.filter(f => f !== id);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMangas.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMangas.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMangas.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchMangaById.pending, state => {
        state.selected = null;
      })
      .addCase(fetchMangaById.fulfilled, (state, action) => {
        state.selected = action.payload;
      });
  },
});

export const { toggleFavorite, removeFavorite } = mangasSlice.actions;
export default mangasSlice.reducer;
