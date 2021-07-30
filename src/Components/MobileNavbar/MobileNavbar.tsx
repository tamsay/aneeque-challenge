/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styles from "./MobileNavbar.module.css";
import "./MobileNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import cx from "classnames";
import { Button, Modal } from "react-bootstrap";
import { Icon, InlineIcon } from "@iconify/react";
import userTie from "@iconify-icons/fa-solid/user-tie";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import MenuItems from "../VerticalMenu/VerticalMenu";
import closeFilled from "@iconify-icons/carbon/close-filled";



$(function() {
	$(".menu-icon").on("click", function () {
		$("nav ul").toggleClass("showing");
	});
});

// Scrolling Effect

$(window).on("scroll", function() {
	if ($(window).scrollTop()) {
		$("nav").addClass("navBgColor");
	}
	else {
		$("nav").removeClass("navBgColor");
	}
});

// {cx(styles[])}
const MobileNavbar = (): JSX.Element => {

	const [showUser, setUserShow] = useState(false);
	const [showMenu, setMenuShow] = useState(false);
	const handleUserClose = () => setUserShow(false);
	const handleMenuClose = () => setMenuShow(false);
	const showUserModal = () => setUserShow(true);
	const showMenuModal = () => setMenuShow(true);

	return (
		<>
			<Navbar fixed='top' collapseOnSelect expand="lg" id={cx(styles["page-container"])}>
				<Container>
				
					<button onClick={()=> showMenuModal()} className={cx(styles.toggler)}>
						<span className={cx("iconify", styles.menuIcon)} data-icon="icon-park:application-menu" data-inline="false"></span>
					</button>

					<Navbar.Brand href="#home" className={cx(styles.navBrand)}>Aneeque</Navbar.Brand>

					<button onClick={()=> showUserModal()} className={cx(styles.toggler)}>
						<Icon icon={userTie} className={cx(styles.profileIcon)}/>
					</button>
				</Container>
				<Modal
					show={showUser}
					onHide={handleUserClose}
					dialogClassName='modal-wrapper'
					id="mobile-user-modal-wrapper"
				>
					
					<Modal.Header onClick={handleUserClose} className='modal-header'>
						<Icon icon={closeFilled} color="red" className={styles.closeIcon}/>					</Modal.Header>
					<Modal.Body className='modal-body'>
						<UserProfile />
					</Modal.Body>
				</Modal>
				

				<Modal
					show={showMenu}
					onHide={handleMenuClose}
					dialogClassName='modal-wrapper'
					id="menu-items-modal-wrapper"
				>
					<Modal.Header onClick={handleMenuClose} className='modal-header'>
						<Icon icon={closeFilled} color="red" className={styles.closeIcon}/>					</Modal.Header>
					<Modal.Body className='modal-body'>
						<MenuItems />
					</Modal.Body>
				</Modal>

			</Navbar>
		</>
	);
};

export default MobileNavbar;