import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import cx from "classnames";
import { Icon } from "@iconify/react";
import bellIcon from "@iconify-icons/heroicons-solid/bell";
import editIcon from "@iconify-icons/fe/edit";
import shoppingBag from "@iconify-icons/heroicons-solid/shopping-bag";
import multipleUsers from "@iconify-icons/gridicons/multiple-users";
import starSmallNegative from "@iconify-icons/healthicons/star-small-negative";
import RecentOrdersTable from "../../Components/RecentOrdersTable/RecentOrdersTable";



const UserProfile = (): JSX.Element => {

	const [reputationValue, setReputationValue] = useState("");
	const [reputationPercent, setReputationPercent] = useState(0);
	const [totalProducts, setTotalProducts] = useState(0);
	const [followers, setFollowers] = useState(0);

	useEffect( () => {
		// Get reputation value here
		const value = (() => {
			return "Star seller";
		})();

		// Get percentage here
		const percentage = (() => {
			return 85;
		})();

		// Get products value here
		const products = (() => {
			return 218;
		})();
	
		// Get followers here
		const followers = (() => {
			return 2580;
		})();
		setReputationValue(value);
		setReputationPercent(percentage);
		setTotalProducts(products);
		setFollowers(followers);
	},[]);
	return (
		<>
			<div className={cx(styles.componentWrapper)}>
				<div className={cx(styles.header, "flex-row")}>
					<div className={cx(styles.iconDiv)}>
						<Icon className={cx(styles.icon)} icon={bellIcon} />
					</div>
					<div className={cx(styles.iconDiv)}>
						<Icon className={cx(styles.icon)} icon={editIcon} />
					</div>					
				</div>

				<div className={cx(styles.userDetailsDiv, "flex-col")}>
					<div className={cx(styles.imageDiv)}>
						<img src="profile-picture.png" alt="" />
					</div>
					<p className={cx(styles.profileName)}>Konter Pulsa</p>
				</div>

				<div className={cx(styles.profileCounts, "flex-row")}>
					<div className={cx(styles.countsDiv, "flex-row")}>
						<Icon className={cx(styles.countsIcon)} icon={shoppingBag} />
						<div className={cx(styles.countsDetails, "flex-col")}>
							<p className={cx(styles.countsValue)}>{totalProducts}</p>
							<p className={cx(styles.countsCategory)}>Products</p>
						</div>
					</div>
					<div className={cx(styles.countsDiv, "flex-row")}>
						<Icon className={cx(styles.countsIcon)} icon={multipleUsers} />
						<div className={cx(styles.countsDetails,"flex-col")}>
							<p className={cx(styles.countsValue)}>{followers}</p>
							<p className={cx(styles.countsCategory)}>Followers</p>
						</div>
					</div>
				</div>

				<div className={cx(styles.reputationDiv)}>
					<h5>Reputation</h5>

					<div className={cx(styles.reputationCountsDiv, "flex-row")}>
						<Icon className={cx(styles.reputationIcon)} icon={starSmallNegative} />
						<div className={cx(styles.reputationCountsDetails, "flex-col")}>
							<div className={cx("flex-row", styles.reputationValuesDiv)}>
								<p className={cx(styles.reputationValue)}>{reputationValue}</p>
								<p className={cx(styles.reputationPercent)}>{`${reputationPercent}%`}</p>
							</div>
							
							<div className={cx("progress", styles.reputationIndicatorDiv)}>
								<div className={cx("progress-bar", styles.reputationIndicator)} role="progressbar" style={{width: `${reputationPercent}%`}}></div>
							</div>
						</div>
					</div>
				</div>

				<div className={cx(styles.recentOrdersDiv, "flex-col")}>
					<div className={cx(styles.recentOrdersHeader, "flex-row")}>
						<p>Recent Orders</p>
						<a href="#">See All</a>
					</div>

					<div className={cx(styles.recentOrdersTableDiv)}>
						<RecentOrdersTable />
					</div>
				</div>
			</div>
		</>
	);
};

export default UserProfile;