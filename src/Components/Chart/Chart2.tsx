import React, { useEffect, useRef } from "react";
import cx from "classnames";
import styles from "./Chart2.module.css";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
import Chart from "chart.js/auto";

const Chart2 = () => {
	// Our labels along the x-axis
	const months = ["Jan", "Feb", "Mar",
		"Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	// For drawing the lines
	const africa = [86,114,106,106,107,111,133,221,783,2478];
	const asia = [282,350,411,502,635,809,947,1402,3700,5267];
	const europe = [168,170,178,190,203,276,408,547,675,734];
	const latinAmerica = [40,20,10,16,24,38,74,167,508,784];
	const northAmerica = [6,3,2,2,7,26,82,172,312,433];

	const inputEl = useRef(null);
	useEffect(() => {
		const divElement = inputEl.current;
		if (divElement !== null) {
			const myChart = new Chart(divElement, {
				type: "bar",
				data: {
					labels: months,
					datasets: [
						{
							label: "Rainfall",
							backgroundColor: "rgba(75,192,192,1)",
							borderColor: "rgba(0,0,0,1)",
							borderWidth: 0,
							borderRadius: 10,
							borderSkipped: "bottom",
							barThickness: 20,
							data: [65, 59, 80, 81, 56, 45, 12, 50, 90, 77, 45, 80]
						}
					]
				}
			});	
		}
		
	}, []);
    

	return (
		<>
			<canvas ref={inputEl} id={cx(styles.myChart)}></canvas>
		</>
	);
};

export default Chart2;