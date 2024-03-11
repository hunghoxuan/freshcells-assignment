import { gql, TypedDocumentNode } from '@apollo/client'
import { useMutation } from '@apollo/client'

interface LoginMutationData {
  login?: {
    jwt: string
    user: {
      id: number
      email: string
      username: string
    }
  }
}

interface LoginMutationVariables {
  email: string
  password: string
}

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        email
        username
      }
    }
  }
`

export const useLoginMutation = () => {
  const [mutate, { data, loading, error }] = useMutation<LoginMutationData, LoginMutationVariables> (LOGIN_MUTATION)

  const login = async (email: string, password: string) => {
    return mutate({ variables: { email, password } })
  }

  return { login, data, mutateLoading: loading, mutateError: error }
}
