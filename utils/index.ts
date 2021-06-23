
export function split<T>(data: T[]) {
	const middleIndex = Math.ceil(data.length / 2);
	const firestHalf = data.slice(0, middleIndex);
	const secondHalf = data.slice(middleIndex)
	return [firestHalf, secondHalf]
}
export function pad(num: number, size: number) {
	let index = num.toString();
	while (index.length <= size) index = '0' + index;
	return index;
}
