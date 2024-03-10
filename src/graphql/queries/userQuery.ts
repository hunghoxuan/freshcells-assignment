import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'

export const GET_USER_QUERY = gql`
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
