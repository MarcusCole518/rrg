import React, { useEffect, useState } from "react";
import { random } from "lodash";
import { getBooks } from "../services/books";
import { useCallback } from "react";
import BookMachine from "../components/BookMachine";

export default function App() {
	const [books, setBooks] = useState([]);
	const [selectedBookIndex, setSelectedBookIndex] = useState(null);

	const selectBookIndex = useCallback(() => {
		if (!books.length) {
			return;
		}
		return random(0, books.length - 1);
	}, [books.length]);

	const assignNewBookIndex = useCallback(() => {
		setSelectedBookIndex(selectBookIndex());
	}, [selectBookIndex]);

	useEffect(() => {
		let mounted = true;
		getBooks().then((books) => {
			if (mounted) {
				setBooks(books);
				setSelectedBookIndex(assignNewBookIndex);
			}
		});
		return () => (mounted = false);
	}, [selectBookIndex, assignNewBookIndex]);

	const selectedBook = () => {
		if (!books.length || !Number.isInteger(selectedBookIndex)) {
			return;
		}
		return books[selectedBookIndex];
	};

	return (
		<>
			<div id="quote-box" className="flex mt-5 h-screen">
				<div className="w-1/3 m-auto">
					{selectedBook() ? (
						<BookMachine
							selectedBook={selectedBook}
							assignNewBookIndex={assignNewBookIndex}
						/>
					) : null}
				</div>
			</div>
			<script
				src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
				defer
			></script>
		</>
	);
}
