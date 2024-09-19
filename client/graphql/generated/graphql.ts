import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Meal = {
  __typename?: 'Meal';
  creator?: Maybe<Scalars['String']['output']>;
  creator_email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMeal?: Maybe<Meal>;
  deleteMeal?: Maybe<Meal>;
  updateMeal?: Maybe<Meal>;
};


export type MutationCreateMealArgs = {
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  instructions?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteMealArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMealArgs = {
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  instructions?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  findMealById?: Maybe<Meal>;
  getAllMeals?: Maybe<Array<Maybe<Meal>>>;
};


export type RootQueryFindMealByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateMealMutationVariables = Exact<{
  title: Scalars['String']['input'];
  image: Scalars['String']['input'];
  summary: Scalars['String']['input'];
  instructions: Scalars['String']['input'];
  creator: Scalars['String']['input'];
  creator_email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateMealMutation = { __typename?: 'Mutation', createMeal?: { __typename?: 'Meal', id?: string | null, title?: string | null, image?: string | null, summary?: string | null, instructions?: string | null, creator?: string | null, creator_email?: string | null, password?: string | null } | null };

export type UpdateMealMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  image: Scalars['String']['input'];
  summary: Scalars['String']['input'];
  instructions: Scalars['String']['input'];
  creator: Scalars['String']['input'];
  creator_email: Scalars['String']['input'];
}>;


export type UpdateMealMutation = { __typename?: 'Mutation', updateMeal?: { __typename?: 'Meal', id?: string | null, title?: string | null, image?: string | null, summary?: string | null, instructions?: string | null, creator?: string | null, creator_email?: string | null, password?: string | null } | null };

export type DeleteMealMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMealMutation = { __typename?: 'Mutation', deleteMeal?: { __typename?: 'Meal', id?: string | null } | null };

export type GetAllMealsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMealsQuery = { __typename?: 'RootQuery', getAllMeals?: Array<{ __typename?: 'Meal', id?: string | null, title?: string | null, image?: string | null, summary?: string | null, instructions?: string | null, creator?: string | null, creator_email?: string | null, password?: string | null } | null> | null };

export type FindMealByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindMealByIdQuery = { __typename?: 'RootQuery', findMealById?: { __typename?: 'Meal', id?: string | null, title?: string | null, image?: string | null, summary?: string | null, instructions?: string | null, creator?: string | null, creator_email?: string | null, password?: string | null } | null };


export const CreateMealDocument = gql`
    mutation createMeal($title: String!, $image: String!, $summary: String!, $instructions: String!, $creator: String!, $creator_email: String!, $password: String!) {
  createMeal(
    title: $title
    image: $image
    summary: $summary
    instructions: $instructions
    creator: $creator
    creator_email: $creator_email
    password: $password
  ) {
    id
    title
    image
    summary
    instructions
    creator
    creator_email
    password
  }
}
    `;
export type CreateMealMutationFn = Apollo.MutationFunction<CreateMealMutation, CreateMealMutationVariables>;

/**
 * __useCreateMealMutation__
 *
 * To run a mutation, you first call `useCreateMealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMealMutation, { data, loading, error }] = useCreateMealMutation({
 *   variables: {
 *      title: // value for 'title'
 *      image: // value for 'image'
 *      summary: // value for 'summary'
 *      instructions: // value for 'instructions'
 *      creator: // value for 'creator'
 *      creator_email: // value for 'creator_email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateMealMutation(baseOptions?: Apollo.MutationHookOptions<CreateMealMutation, CreateMealMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMealMutation, CreateMealMutationVariables>(CreateMealDocument, options);
      }
export type CreateMealMutationHookResult = ReturnType<typeof useCreateMealMutation>;
export type CreateMealMutationResult = Apollo.MutationResult<CreateMealMutation>;
export type CreateMealMutationOptions = Apollo.BaseMutationOptions<CreateMealMutation, CreateMealMutationVariables>;
export const UpdateMealDocument = gql`
    mutation updateMeal($id: ID!, $title: String!, $image: String!, $summary: String!, $instructions: String!, $creator: String!, $creator_email: String!) {
  updateMeal(
    id: $id
    title: $title
    image: $image
    summary: $summary
    instructions: $instructions
    creator: $creator
    creator_email: $creator_email
  ) {
    id
    title
    image
    summary
    instructions
    creator
    creator_email
    password
  }
}
    `;
export type UpdateMealMutationFn = Apollo.MutationFunction<UpdateMealMutation, UpdateMealMutationVariables>;

/**
 * __useUpdateMealMutation__
 *
 * To run a mutation, you first call `useUpdateMealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMealMutation, { data, loading, error }] = useUpdateMealMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      image: // value for 'image'
 *      summary: // value for 'summary'
 *      instructions: // value for 'instructions'
 *      creator: // value for 'creator'
 *      creator_email: // value for 'creator_email'
 *   },
 * });
 */
export function useUpdateMealMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMealMutation, UpdateMealMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMealMutation, UpdateMealMutationVariables>(UpdateMealDocument, options);
      }
export type UpdateMealMutationHookResult = ReturnType<typeof useUpdateMealMutation>;
export type UpdateMealMutationResult = Apollo.MutationResult<UpdateMealMutation>;
export type UpdateMealMutationOptions = Apollo.BaseMutationOptions<UpdateMealMutation, UpdateMealMutationVariables>;
export const DeleteMealDocument = gql`
    mutation deleteMeal($id: ID!) {
  deleteMeal(id: $id) {
    id
  }
}
    `;
export type DeleteMealMutationFn = Apollo.MutationFunction<DeleteMealMutation, DeleteMealMutationVariables>;

/**
 * __useDeleteMealMutation__
 *
 * To run a mutation, you first call `useDeleteMealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMealMutation, { data, loading, error }] = useDeleteMealMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMealMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMealMutation, DeleteMealMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMealMutation, DeleteMealMutationVariables>(DeleteMealDocument, options);
      }
export type DeleteMealMutationHookResult = ReturnType<typeof useDeleteMealMutation>;
export type DeleteMealMutationResult = Apollo.MutationResult<DeleteMealMutation>;
export type DeleteMealMutationOptions = Apollo.BaseMutationOptions<DeleteMealMutation, DeleteMealMutationVariables>;
export const GetAllMealsDocument = gql`
    query getAllMeals {
  getAllMeals {
    id
    title
    image
    summary
    instructions
    creator
    creator_email
    password
  }
}
    `;

/**
 * __useGetAllMealsQuery__
 *
 * To run a query within a React component, call `useGetAllMealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMealsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMealsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMealsQuery, GetAllMealsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMealsQuery, GetAllMealsQueryVariables>(GetAllMealsDocument, options);
      }
export function useGetAllMealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMealsQuery, GetAllMealsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMealsQuery, GetAllMealsQueryVariables>(GetAllMealsDocument, options);
        }
export function useGetAllMealsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllMealsQuery, GetAllMealsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMealsQuery, GetAllMealsQueryVariables>(GetAllMealsDocument, options);
        }
export type GetAllMealsQueryHookResult = ReturnType<typeof useGetAllMealsQuery>;
export type GetAllMealsLazyQueryHookResult = ReturnType<typeof useGetAllMealsLazyQuery>;
export type GetAllMealsSuspenseQueryHookResult = ReturnType<typeof useGetAllMealsSuspenseQuery>;
export type GetAllMealsQueryResult = Apollo.QueryResult<GetAllMealsQuery, GetAllMealsQueryVariables>;
export const FindMealByIdDocument = gql`
    query findMealById($id: ID!) {
  findMealById(id: $id) {
    id
    title
    image
    summary
    instructions
    creator
    creator_email
    password
  }
}
    `;

/**
 * __useFindMealByIdQuery__
 *
 * To run a query within a React component, call `useFindMealByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMealByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMealByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindMealByIdQuery(baseOptions: Apollo.QueryHookOptions<FindMealByIdQuery, FindMealByIdQueryVariables> & ({ variables: FindMealByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMealByIdQuery, FindMealByIdQueryVariables>(FindMealByIdDocument, options);
      }
export function useFindMealByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMealByIdQuery, FindMealByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMealByIdQuery, FindMealByIdQueryVariables>(FindMealByIdDocument, options);
        }
export function useFindMealByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMealByIdQuery, FindMealByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMealByIdQuery, FindMealByIdQueryVariables>(FindMealByIdDocument, options);
        }
export type FindMealByIdQueryHookResult = ReturnType<typeof useFindMealByIdQuery>;
export type FindMealByIdLazyQueryHookResult = ReturnType<typeof useFindMealByIdLazyQuery>;
export type FindMealByIdSuspenseQueryHookResult = ReturnType<typeof useFindMealByIdSuspenseQuery>;
export type FindMealByIdQueryResult = Apollo.QueryResult<FindMealByIdQuery, FindMealByIdQueryVariables>;