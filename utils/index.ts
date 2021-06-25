export function pad(num: number, size: number) {
	let index = num.toString();
	while (index.length <= size) index = '0' + index;
	return index;
}
