import React from "react";
import styles from "./TableHeader.module.css";
import cx from "classnames";

const TableHeader = (): JSX.Element => {
	return (
		<>
			<div className={cx(styles.wrapper)}>

				<div className={cx("flex-row", styles.content)}>
					<div className={cx(styles.imageHeader)}>Photos</div>
					<div>Name</div>
					<div>Date</div>
					<div>Category</div>
					<div>Brand</div>
					<div>Price</div>
					<div>Status</div>
				</div>
                
			</div>
                
		</>
	);
};

export default TableHeader;