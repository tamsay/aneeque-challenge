import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart1.module.css";
import cx from "classnames";

const state = {
	labels: ["Jan", "Feb", "Mar",
		"Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	datasets: [
		{
			label: "Income",
			backgroundColor: "rgba(150,194,249,1)",
			borderColor: "rgba(150,194,249,1)",
			borderWidth: 0,
			borderRadius: 10,
			borderSkipped: "top, bottom",
			barThickness: 10,
			hoverBackgroundColor: "rgba(53,122,226,1)",
			data: [6500, 5900, 8000, 8100, 5600, 4500, 4900, 5000, 6000, 7700, 4500, 9000]
		}
	],
};

const Chart1 = (): JSX.Element => {
	return (
		<div className={cx(styles.wrapper)}>
			<Bar className={styles.chart}
				data={state}
				options={{
					plugins: {
						legend: {
							display: false,
							labels: {
								color: "rgb(255, 99, 132)"
							}
						},
						title:{
							display: false,
						},
					},
					maintainAspectRatio: false,
					scales: {
						y: {
							grid: {
								display: true,
								color: "rgba(238,242,248,0.8)"
							},
							max: 10000,
							min: 0,
							ticks: {
								stepSize: 2500
							},
							
						},
						x: {
							grid: {
								display: false,
							},
						}
					},
					tooltip: {
						callbacks: {
							labelColor: function() {
								return {
									borderColor: "rgb(0, 0, 255)",
									backgroundColor: "rgb(255, 0, 0)",
									borderWidth: 2,
									borderDash: [2, 2],
									borderRadius: 2,
								};
							},
							labelTextColor: function() {
								return "#543453";
							}
						}
					}
				}}
			/>
		</div>
	);
};

export default Chart1;