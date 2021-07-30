import React from "react";
import styles from "./RecentOrdersTable.module.css";
import cx from "classnames";

const RecentOrdersTable = (): JSX.Element => {
	return (
		<>
			<div className={cx(styles.wrapper)}>
                 
				<div className={cx(styles.content, "flex-row")}>
					<div className={styles.imageDiv}>
						<img src="hat.png" alt="product" />
					</div>
					<div className={styles.productNameDiv}>
						<p className={styles.productName}>Cowboy Hat</p>
						<small className={styles.timeDiv}><span className={cx(styles.transactionTime)}>2</span> minutes ago</small>
					</div>
					<div className={styles.productPrice}>+$99.89</div>
				</div>

				<div className={cx(styles.content, "flex-row")}>
					<div className={styles.imageDiv}>
						<img src="camera.png" alt="product" />
					</div>
					<div className={styles.productNameDiv}>
						<p className={styles.productName}>Nikon Pro</p>
						<small className={styles.timeDiv}><span className={cx(styles.transactionTime)}>2</span> minutes ago</small>
					</div>
					<div className={styles.productPrice}>+$99.89</div>
				</div>

				<div className={cx(styles.content, "flex-row")}>
					<div className={styles.imageDiv}>
						<img src="phone.jpeg" alt="product" />
					</div>
					<div className={styles.productNameDiv}>
						<p className={styles.productName}>Redmi Pro</p>
						<small className={styles.timeDiv}><span className={cx(styles.transactionTime)}>2</span> minutes ago</small>
					</div>
					<div className={styles.productPrice}>+$99.89</div>
				</div>

				<div className={cx(styles.content, "flex-row")}>
					<div className={styles.imageDiv}>
						<img src="logo192.png" alt="product" />
					</div>
					<div className={styles.productNameDiv}>
						<p className={styles.productName}>Cowboy Hat</p>
						<small className={styles.timeDiv}><span className={cx(styles.transactionTime)}>2</span> minutes ago</small>
					</div>
					<div className={styles.productPrice}>+$99.89</div>
				</div>

				<div className={cx(styles.content, "flex-row")}>
					<div className={styles.imageDiv}>
						<img src="logo192.png" alt="product" />
					</div>
					<div className={styles.productNameDiv}>
						<p className={styles.productName}>Cowboy Hat</p>
						<small className={styles.timeDiv}><span className={cx(styles.transactionTime)}>2</span> minutes ago</small>
					</div>
					<div className={styles.productPrice}>+$99.89</div>
				</div>

				<div className={cx(styles.content, "flex-row")}>
					<div className={styles.imageDiv}>
						<img src="logo192.png" alt="product" />
					</div>
					<div className={styles.productNameDiv}>
						<p className={styles.productName}>Cowboy Hat</p>
						<small className={styles.timeDiv}><span className={cx(styles.transactionTime)}>2</span> minutes ago</small>
					</div>
					<div className={styles.productPrice}>+$99.89</div>
				</div>

				<div className={cx(styles.content, "flex-row")}>
					<div className={styles.imageDiv}>
						<img src="logo192.png" alt="product" />
					</div>
					<div className={styles.productNameDiv}>
						<p className={styles.productName}>Cowboy Hat</p>
						<small className={styles.timeDiv}><span className={cx(styles.transactionTime)}>2</span> minutes ago</small>
					</div>
					<div className={styles.productPrice}>+$99.89</div>
				</div>

				<div className={cx(styles.content, "flex-row")}>
					<div className={styles.imageDiv}>
						<img src="logo192.png" alt="product" />
					</div>
					<div className={styles.productNameDiv}>
						<p className={styles.productName}>Cowboy Hat</p>
						<small className={styles.timeDiv}><span className={cx(styles.transactionTime)}>2</span> minutes ago</small>
					</div>
					<div className={styles.productPrice}>+$99.89</div>
				</div>

			
				

			</div>
          
             
		</>
	);
};

export default RecentOrdersTable;