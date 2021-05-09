//creating an inner component ( of ./App.js)

import produce from "immer";
import { useContext, useState } from "react";
import { BoardContext } from "./App";

function TicTacToe() {
	// getting board from context(BoardCoontext) defined in outer component(App.js)
	let { board, setBoard } = useContext(BoardContext);
	// we could have directly used the board here as well, now we'll create the player here
	let [player, setPlayer] = useState(0);
	// Array destructuring :
	// let arr= useState(0);
	// let player = arr[0];
	// let setPlayer = arr[1];
	return (
		<div
			style={{
				width: "100vw", //view port width
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
			}}
		>
			{board.map(function (row, rowIdx) {
				return (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						{row.map(function (item, colIdx) {
							return (
								<button
									style={{
										height: "100px",
										width: "100px",
									}}
									onClick={function () {
										const updatedBoard = produce(board, (draftBoard) => {
											if (draftBoard[rowIdx][colIdx] == -1) {
												draftBoard[rowIdx][colIdx] = player;
											}
										});
										setBoard(updatedBoard);
										setPlayer(player == 0 ? 1 : 0);
									}}
								>
									{item == -1 ? " " : item}
								</button>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default TicTacToe;
