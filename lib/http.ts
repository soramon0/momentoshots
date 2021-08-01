import { useEffect, useState } from "react"

import { getBackendEndpoint } from "@/utils/env"
import { ICollectionPaths } from "@/types/pages/collection"

const basePath = '/api'
const backendPath = getBackendEndpoint()

export const useCollectionPaths = () => {
	const [paths, setPaths] = useState<ICollectionPaths>([])

	useEffect(() => {
		const fetchData = async () => {
			const blob = await fetch(`${basePath}/collections/paths`)
			const data = await blob.json()
			setPaths(data.paths as ICollectionPaths)
		}

		fetchData()
	}, [])

	return { paths }
}

type Payload = {
	name: string;
	email: string;
	phone: string;
	message: string;
}

type Error = {
	[key: string]: string[]
}

export const useCreateContact = (payload: Payload) => {
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState<Error | null>(null)

	const createContact = async (payloadData = payload) => {
		setLoading(true);

		const blob = await fetch(`${backendPath}/contacts`, {
			method: 'post',
			body: JSON.stringify(payloadData),
			headers: {
				'Content-Type': 'application/json'
			},
		});
		const { data } = await blob.json();

		setErrors(data?.errors ?? {})
		setLoading(false);

		return { errors: data?.errors }
	}

	return { loading, errors, createContact }
}
