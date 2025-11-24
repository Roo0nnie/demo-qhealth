import React from "react"

import Play from "../assets/play-big.svg"
import Stop from "../assets/stop.svg"
import Spinner from "./Spinner"

export interface IStartButton {
	isLoading: boolean
	onClick: () => void
	isMeasuring: boolean
}

const StartButton = ({ isLoading, onClick, isMeasuring }: IStartButton) => {
	return (
		<div className="flex justify-center items-center h-[64px] w-[64px] sm:h-[72px] sm:w-[72px] md:h-[80px] md:w-[80px] lg:h-[88px] lg:w-[88px]">
			{isLoading ? (
				<Spinner />
			) : (
				<div
					onClick={onClick}
					className="flex justify-center items-center bg-[#271ebf] rounded-full cursor-pointer h-full w-full transition-all duration-300 shadow-md hover:bg-[#4a7c2a] hover:scale-105 hover:shadow-lg active:scale-95"
				>
					<img
						src={isMeasuring ? Stop : Play}
						alt={isMeasuring ? "Stop" : "Play"}
						className="w-1/2 h-1/2 object-contain"
					/>
				</div>
			)}
		</div>
	)
}

export default StartButton
