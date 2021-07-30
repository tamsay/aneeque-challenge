import React from "react";
import styles from "./VerticalMenu.module.css";
import cx from "classnames";
import { Icon } from "@iconify/react";
import shoppingBag from "@iconify-icons/heroicons-solid/shopping-bag";
import squaresFourFill from "@iconify-icons/ph/squares-four-fill";
import paperPlaneTiltFill from "@iconify-icons/ph/paper-plane-tilt-fill";
import settingsFilled from "@iconify-icons/ci/settings-filled";
import page20Filled from "@iconify-icons/fluent/page-20-filled";
import multipleUsers from "@iconify-icons/gridicons/multiple-users";


const VerticalMenu = (): JSX.Element => {
	return (
		<>
			<div className={cx(styles.componentWrapper, "flex-col")}>

				<div className={cx(styles.header, "flex-row")}>
					<div className={cx(styles.logoDiv)}>
						<img className={cx(styles.logo)} src="anaquee logo.png" alt="logo" />
					</div>
					<span className={cx(styles.companyName)}>
                    Tumbas
					</span>
				</div>
            
				<div className={cx(styles.menuSegment)}>
					<h5 className={cx(styles.menuHeader)}>Menu</h5>
					<ul>
						<li className={cx(styles.active)} >
							<a className={cx(styles.active)} href="#">
								<Icon className={cx(styles.icon)} icon={squaresFourFill}  />			<span>Overview</span>
							</a>
						</li>
						<li>
							<a href="#">
								<Icon className={cx(styles.icon)} icon={page20Filled}  />
								<span>Orders</span>
							</a>
						</li>
						<li>
							<a href="#">
								<Icon className={cx(styles.icon)} icon={shoppingBag}  />
								<span>Products</span>
							</a>
						</li>
						<li>
							<a href="#">
								<Icon className={cx(styles.icon)} icon={settingsFilled}  />
								<span>Settings</span>
							</a>
						</li>
					</ul>
				</div>
            
				<div className={cx(styles.menuSegment)}>
					<h5 className={cx(styles.menuHeader)}>Business</h5>
					<ul>
						<li >
							<a href="#">
								<Icon className={cx(styles.icon)} icon={paperPlaneTiltFill}  />
								<span>Shipment</span>
							</a>
						</li>
						<li>
							<a href="#">
								<Icon className={cx(styles.icon)} icon={multipleUsers}  />
								<span>Employee</span>
							</a>
						</li>
					</ul>
				</div>
			
				<div className={cx(styles.footer)}>
					<p>&copy; Tumbas. 2021</p>
					<small>Platform for solution of all types of business to be more advanced.</small>
				</div>
            
			</div>
                
		</>
	);
};

export default VerticalMenu;