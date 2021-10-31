export function getBooks() {
	return fetch(
		"https://gist.githubusercontent.com/MarcusCole518/d389c8293949f8d1978c003bd8005043/raw/1ae33ec6c78170e24f76fbdf734a270262530e04/books.json"
	).then((data) => data.json());
}
