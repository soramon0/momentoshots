import type { ApolloError } from '@apollo/client';

type Props = {
  type: 'Error' | 'Success';
  error?: ApolloError;
  message?: string;
};

function Notifier({ type, error, message }: Props) {
  if (type === 'Error' && error && error.message) {
    // @ts-ignore
    const networkError = error.networkError?.result;
    const hasNetworkError = networkError && networkError?.errors.length;

    const graphQLErrors =
      error.graphQLErrors &&
      error.graphQLErrors.length &&
      error.graphQLErrors[0].extensions;

    if (hasNetworkError) {
      return networkError.errors.map((error, i) => (
        <div
          className='max-w-md bg-red-400 px-4 py-3 rounded-sm absolute right-6 bottom-10'
          key={i}
        >
          <p className='text-white'>
            <strong className='text-white'>Shoot! </strong>
            {error.message.replace('GraphQL error: ', '')}
          </p>
        </div>
      ));
    }

    if (graphQLErrors) {
      return error.graphQLErrors.map(({ extensions }) => {
        const { errors } = extensions.exception.data;

        return Object.values(errors).map((msg: string, i) => (
          <div
            key={i}
            className='max-w-md bg-red-400 px-4 py-3 rounded-sm absolute right-6 bottom-10'
          >
            <p className='text-white'>
              <strong className='font-semibold'>Shoot! </strong>
              {msg}
            </p>
          </div>
        ));
      });
    }
  }

  return (
    <div className='max-w-md bg-green-400 px-4 py-3 rounded-sm absolute right-6 bottom-10'>
      <p className='text-white'>
        <strong className='font-semibold'>Yay!</strong> {message}
      </p>
    </div>
  );
}

Notifier.defaultProps = {
  error: {},
  message: 'You did it!',
};

export default Notifier;
