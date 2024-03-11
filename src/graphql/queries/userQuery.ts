import { gql, TypedDocumentNode } from '@apollo/client'
import { useQuery } from '@apollo/client'

interface GetUserQueryData {
   user: {
      id: number
      email: string
      firstName: string
      lastName: string
   }
}

interface GetUserQueryVariables {
   id: number
}

export const GET_USER_QUERY: TypedDocumentNode<GetUserQueryData, GetUserQueryVariables> = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
    }
  }
`

export const useGetUserQuery = (id: number, jwt: string) => {
  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: { id },
    skip: !id,
    context: {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  })

  return { data, loading, error }
}
