import { NextRouter, useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import type { MutationHookOptions } from '@apollo/client';

import type {
	CreateContactMutation,
	CreateContactMutationVariables,
} from '../generated';
import { CreateContactDocument } from '../generated';

type OptionsFunc = (
	router: NextRouter
) => MutationHookOptions<CreateContactMutation, CreateContactMutationVariables>;

export const useCreateContact = (optionsFunc?: OptionsFunc) => {
	const router = useRouter();
	const options = optionsFunc ? optionsFunc(router) : {};
	return useMutation(CreateContactDocument, options);
};
