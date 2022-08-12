import React from "react";
import PropTypes from "prop-types";
import {observer} from "mobx-react-lite";
import Auth from "../../store/auth";
import Avatar from "../Avatar/Avatar";

const MainTopbar = observer(({children}) => {
	const {
		user: {username, avatar}
	} = Auth;

	return (
		<div className="bg-primary px-16 flex">
			{children}
			<div className="ml-auto flex items-center">
				<Avatar className="mr-2" imagePath={avatar} />
				<p className="w-28 overflow-hidden text-ellipsis whitespace-nowrap">
					{username}
				</p>
			</div>
		</div>
	);
});

MainTopbar.propTypes = {
	children: PropTypes.node
};

MainTopbar.defaultProps = {
	children: undefined
};

export default MainTopbar;