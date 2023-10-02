import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Question, Post, Follower, Like } from '../../app/mockTypes';
import { users } from '../../app/mock';

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: users || [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    followUser: (state, action: PayloadAction<string>) => {
      const userIdToFollow = action.payload;
      const userToFollow = state.users.find(user => user.id === userIdToFollow);
      if (userToFollow) {
        // Реализуйте логику подписки на пользователя, например, добавление его в массив подписок текущего пользователя
        // userToFollow можно использовать для получения данных о пользователе, на которого подписываемся
      }
    },
    unfollowUser: (state, action: PayloadAction<string>) => {
      const userIdToUnfollow = action.payload;
      const userToUnfollow = state.users.find(
        user => user.id === userIdToUnfollow,
      );
      if (userToUnfollow) {
        // Реализуйте логику отписки от пользователя, например, удаление его из массива подписок текущего пользователя
        // userToUnfollow можно использовать для получения данных о пользователе, от которого отписываемся
      }
    },
    addLikeToUserPost: (
      state,
      action: PayloadAction<{ userId: string; postId: string }>,
    ) => {
      const { userId, postId } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        // Реализуйте логику добавления лайка к посту пользователя
        // user можно использовать для получения данных о пользователе, чей пост лайкаем
      }
    },
    removeLikeFromUserPost: (
      state,
      action: PayloadAction<{ userId: string; postId: string }>,
    ) => {
      const { userId, postId } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        // Реализуйте логику удаления лайка с поста пользователя
        // user можно использовать для получения данных о пользователе, чей пост убираем лайк
      }
    },
    askQuestionToUser: (
      state,
      action: PayloadAction<{ userId: string; question: Question }>,
    ) => {
      const { userId, question } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        // Реализуйте логику отправки вопроса другому пользователю
        // user можно использовать для получения данных о пользователе, которому отправляем вопрос
      }
    },
  },
});

export const {
  setUsers,
  // getUserById,
  followUser,
  unfollowUser,
  addLikeToUserPost,
  removeLikeFromUserPost,
  askQuestionToUser,
} = usersSlice.actions;
export default usersSlice.reducer;
