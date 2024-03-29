import React from "react";
import {FaNetworkWired} from "react-icons/fa";
import {
	MdApps,
	MdGroups,
	MdHome,
	MdMail,
	MdMemory,
	MdPerson,
	MdSettings
} from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import NavbarItem from "../../components/NavbarItem/NavbarItem";
import {
	ACCOUNTS_ROUTE,
	APPS_ROUTE,
	HOME_ROUTE,
	MAILING_ROUTE,
	PARSING_ROUTE,
	PROFILE_ROUTE,
	PROXIES_ROUTE,
	SETTINGS_ROUTE
} from "../../utils/constants/routes";

const SidebarSection = () => (
	<div className="bg-primary py-16">
		<Navbar>
			<li>
				<NavbarItem startIcon={MdHome} text="Home" path={HOME_ROUTE} />
			</li>
			<li>
				<NavbarItem
					startIcon={MdGroups}
					text="Accounts"
					path={ACCOUNTS_ROUTE}
				/>
			</li>
			<li>
				<NavbarItem startIcon={MdMemory} text="Parsing" path={PARSING_ROUTE} />
			</li>
			<li>
				<NavbarItem startIcon={MdMail} text="Mailing" path={MAILING_ROUTE} />
			</li>
			<li>
				<NavbarItem
					startIcon={MdPerson}
					text="My Profile"
					path={PROFILE_ROUTE}
				/>
			</li>
			<li>
				<NavbarItem
					startIcon={FaNetworkWired}
					text="Proxies"
					path={PROXIES_ROUTE}
				/>
			</li>
			<li>
				<NavbarItem startIcon={MdApps} text="Apps" path={APPS_ROUTE} />
			</li>
			<li>
				<NavbarItem
					startIcon={MdSettings}
					text="Settings"
					path={SETTINGS_ROUTE}
				/>
			</li>
		</Navbar>
	</div>
);

export default SidebarSection;
