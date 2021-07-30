/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import styles from "./Overview.module.css";
// import modalStyles from "./Modal.module.css";
import "./Modal.css";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import { Icon, InlineIcon } from "@iconify/react";
import { Button, Modal } from "react-bootstrap";

import TableHeader from "../../Components/TableHeader/TableHeader";
import TableBody from "../../Components/TableBody/TableBody";
import Chart1 from "../../Components/Chart/Chart1";
import shoppingBag from "@iconify-icons/heroicons-solid/shopping-bag";
import shoppingCartSimpleFill from "@iconify-icons/ph/shopping-cart-simple-fill";
import pieChartFilled from "@iconify-icons/ant-design/pie-chart-filled";
import multipleUsers from "@iconify-icons/gridicons/multiple-users";
import userTie from "@iconify-icons/fa-solid/user-tie";
import closeFilled from "@iconify-icons/carbon/close-filled";


import UserProfile from "../UserProfile/UserProfile";


const Overview = (): JSX.Element => {
	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const showUserModal = () => setShow(true);

	return (
		<>
			<div className={cx("flex-col", styles.pageContainer)}>

				<div className={cx(styles.pageHeader, "flex-row")}>
					<div className={cx("flex-row", styles["search-div"])}>
						<span className={cx(styles.searchIcon, "iconify")} data-icon="akar-icons:search" data-inline="false"></span>
						<input type="text" placeholder='Search for product'/>
					</div>
					<button onClick={()=> showUserModal()} className={cx(styles.toggler, styles.showLg)}>
						<Icon icon={userTie} className={cx(styles.profileIcon)}/>
					</button>

					<Modal
						show={show}
						onHide={handleClose}
						// onClick={handleClose}
						dialogClassName='modal-wrapper'
						id="user-profile-lg-modal-wrapper"
					>
						<Modal.Header onClick={handleClose} className='modal-header'>
							<Icon icon={closeFilled} color="red" className={styles.closeIcon}/>					</Modal.Header>
						<Modal.Body className='modal-body'>
							<UserProfile />
						</Modal.Body>
					</Modal>
				</div>
				
                
				<section className={cx("flex-col", styles.overviewCardsSection)}>
					<h5>Overview</h5>

					<div className={cx(styles.overviewCardsWrapper)}>

						<div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4">
       
							<div className={cx("col", styles.cardWrapper)}>
								<div className={cx("card h-100", styles.card)}>
									<div className={cx(styles.cardBody, "card-body")}>
										<div className={cx(styles.cardHeader)}>
											<Icon className={cx(styles.cardIcon)} icon={shoppingBag} color="#e48757" />
											<span className={cx(styles.percentageValue, styles.positive)}>+24%</span>
										</div>
										<p className={cx(styles.totalValue, "card-text")}>$27,340.00</p>
										<small className={cx(styles.cardDescription)}>Total Sales</small>
									</div>
								</div>
							</div>

							<div className={cx("col", styles.cardWrapper)}>
								<div className={cx("card h-100", styles.card)}>
									<div className={cx(styles.cardBody, "card-body")}>
										<div className={cx(styles.cardHeader)}>
											<Icon className={cx(styles.cardIcon)} icon={pieChartFilled} color="#a261e4" />
											<span className={cx(styles.percentageValue, styles.negative)}>-32%</span>
										</div>
										<p className={cx(styles.totalValue, "card-text")}>$27,340.00</p>
										<small className={cx(styles.cardDescription)}>Total Expenses</small>
                      
									</div>
								</div>
							</div>
                

							<div className={cx("col", styles.cardWrapper)}>
								<div className={cx("card h-100", styles.card)}>
									<div className={cx(styles.cardBody, "card-body")}>
										<div className={cx(styles.cardHeader)}>
											<Icon className={cx(styles.cardIcon)} icon={multipleUsers} color="green" />
											<span className={cx(styles.percentageValue, styles.positive)}>+48%</span>
										</div>
										<p className={cx(styles.totalValue, "card-text")}>18,260.00</p>
										<small className={cx(styles.cardDescription)}>Total Visitors</small>
									</div>
								</div>
							</div>


							<div className={cx("col", styles.cardWrapper)}>
								<div className={cx("card h-100", styles.card)}>
									<div className={cx(styles.cardBody, "card-body")}>
										<div className={cx(styles.cardHeader)}>
											<Icon className={cx(styles.cardIcon)} icon={shoppingCartSimpleFill} color="red" />
											<span className={cx(styles.percentageValue, styles.negative)}>-12%</span>
										</div>
										<p className={cx(styles.totalValue, "card-text")}>11,340</p>
										<small className={cx(styles.cardDescription)}>Total Sales</small>
									</div>
								</div>
							</div>


						</div>
               
                
        
                
					</div>
				</section>

				<section className={cx(styles.chartSection)}>

					<div className={cx(styles.chartHeader, "flex-row")}>
						<div>
							<span>Income</span><span>Expense</span>
						</div>
						<select name="year" id="year">
							<option value="2021">2021</option>
							<option value="2020">2020</option>
							<option value="2019">2019</option>
							<option value="2018">2018</option>
							<option value="2017">2017</option>
						</select>
					</div>

					<div className={cx(styles.chartWrapper)}>
						<Chart1 />
					</div>
				</section>
        
				<section className={cx(styles.popularProductsSection)}>
					<h5>Popular Products</h5>     

					<ScrollSync>
						<div className={cx(styles.popularProductsWrapper)}>
							<ScrollSyncPane group="horizontal">
								<div className={cx(styles.popularProductsHeaderWrapper)}>
									<TableHeader />
								</div>
							</ScrollSyncPane>
							{/* <ScrollSyncPane group={["horizontal", "vertical"]}> */}
							<ScrollSyncPane group="horizontal">
                    
								<div className={cx(styles.popularProductsBodyWrapper)}>
									<TableBody />
								</div>
							</ScrollSyncPane>
						</div>
					</ScrollSync>
				</section>
                
			</div>
		</>
	);
};

export default Overview;