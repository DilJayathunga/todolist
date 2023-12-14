import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3001/',
    }),
    tagTypes: ['todo'],
    endpoints: builder => ({
        getAllTodos: builder.query({
            query: () => "/get",
            providesTags: ['todo']
        }),

        createTodo: builder.mutation({
            query: (data) => ({
                url: '/add',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['todo']
        }),

        updateTodo: builder.mutation({
            query: (data) => ({
                url: `/update/${data.id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['todo']
        }),

        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['todo']
        }),
    })
});

export const {
    useGetAllTodosQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = apiSlice;