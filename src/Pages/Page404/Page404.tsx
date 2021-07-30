import React from "react";
import styles from "./Page404.module.css";
import cx from "classnames";

const Page404 = (): JSX.Element => {
	return (
		<div className={cx(styles["page-container"])}>Page Not Found</div>
	);
};

export default Page404;