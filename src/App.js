import React, { useState } from "react";
import TicTacToe from "./TicTacToe";
import { createBoard } from "./utils/boardUtil";
// context to be used in TicTacTpes
let BoardContext = React.createContext();
function App() {
	// to get the state in inner component- TicTacToe
	let [board, setBoard] = useState(createBoard());
	return (
		// using BoardContext.Provider we could now use board and setBoard in TicTacToe with the help of BoardContext
		<BoardContext.Provider value={{ board, setBoard }}>
			<TicTacToe />
		</BoardContext.Provider>
	);
}
// chenge the import for ./index.js
export { App, BoardContext };
