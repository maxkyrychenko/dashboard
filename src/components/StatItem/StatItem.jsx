import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const StatItem = ({value, title, className}) => (
	<div
		className={classNames(
			className,
			"inline-block border py-4 px-8 rounded-2xl border-primaryLighter text-center"
		)}
	>
		<p className="text-4xl font-semibold mb-1 text-accent">{value}</p>
		<p className="text-lg capitalize whitespace-nowrap">{title}</p>
	</div>
);

StatItem.propTypes = {
	value: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	className: PropTypes.string
};

StatItem.defaultProps = {
	className: ""
};

export default StatItem;