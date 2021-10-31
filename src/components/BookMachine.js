import React from "react";
import Button from "./Button";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";

const BookMachine = ({ selectedBook, assignNewBookIndex }) => (
	<>
		<div className="shadow-2xl p-4 rounded-lg grid grid-rows-3 grid-flow-col gap-4">
			<div id="new-quote">{`${selectedBook().book}`}</div>
			<div id="author">{`${selectedBook().author}`}</div>
			<Button
				buttonDisplayName="Next Resource"
				clickHandler={assignNewBookIndex}
			/>
			<a
				href={`https://twitter.com/intent/tweet?text=${
					selectedBook().book
				}&hastags=testing`}
				id="tweet-quote"
			>
				<FiTwitter />
			</a>
		</div>
	</>
);

export default BookMachine;
