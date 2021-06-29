import { ICollectionPaths } from "@/types/pages/collection"
import { useEffect, useState } from "react"

const basePath = '/api'

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