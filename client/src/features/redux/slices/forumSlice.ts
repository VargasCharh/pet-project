import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CommentFormType, CommentType, CompanyType, PostFormType, PostType } from '../../../types/ForumTypes';
import { addCommentThunk, addPostThunk, deletePostThunk, getAllCompaniesThunk, getAllPostsCommentsThunk, updatePostThunk } from '../../thunkActions/forumThunkActions';


export type InitialState = {
  data: PostType[],
  companies: CompanyType[],
  comments: CommentType[]
}
const initialState: InitialState = {
  data: [],
  companies: [],
  comments: []
}
const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPostsCommentsThunk.fulfilled, (state, action: PayloadAction<PostType[]>) => {
      state.data = action.payload;
    });

    builder.addCase(addPostThunk.fulfilled, (state, action: PayloadAction<PostFormType>) => {
      state.data = [action.payload, ...state.data];
    });

    builder.addCase(getAllCompaniesThunk.fulfilled, (state, action: PayloadAction<CompanyType[]>) => {
      state.companies = action.payload;
    });

    builder.addCase(deletePostThunk.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload)
    });

    builder.addCase(updatePostThunk.fulfilled, (state, action) => {
      state.data = state.data.map((el) =>  el.id === action.payload.id ? action.payload : el)
    })

    builder.addCase(addCommentThunk.fulfilled, (state, action: PayloadAction<CommentFormType>) => {
      state.data = state.data.map((el) =>  el.id === action.payload.postId ? {...el, Comments: [...el.Comments, action.payload]} : el)
    });
  }
});

export default forumSlice.reducer;
