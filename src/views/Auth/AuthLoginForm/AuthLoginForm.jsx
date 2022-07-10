import React from "react";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {MdPassword, MdPerson} from "react-icons/md";
import Button from "../../../components/Button/Button";
import FormTextField from "../../../components/FormTextField/FormTextField";
import FormFields from "../../../components/FormFields/FormFields";
import {REGISTER_ROUTE} from "../../../utils/constants/routes";
import Auth from "../../../store/auth";

const AuthLoginForm = () => {
	const {
		handleSubmit,
		setError,
		clearErrors,
		formState: {errors, isSubmitting},
		register
	} = useForm({mode: "all"});

	const onSubmit = async data => {
		await Auth.login(data, setError);
	};

	const handleClick = () => clearErrors("response");

	return (
		<>
			<h1 className="text-white text-5xl text-center mb-2 font-semibold">
				Login
			</h1>
			<NavLink
				className="text-white mb-6 block text-center"
				to={REGISTER_ROUTE}
			>
				Don&apos;t have an account?
			</NavLink>
			<form className="w-80" onSubmit={handleSubmit(onSubmit)}>
				<FormFields register={register} errors={errors}>
					<FormTextField
						startIcon={MdPerson}
						placeholder="Username"
						name="username"
						options={{required: "This field is required."}}
					/>
					<FormTextField
						startIcon={MdPassword}
						placeholder="Password"
						name="password"
						type="password"
						options={{required: "This field is required."}}
					/>
				</FormFields>
				{errors.response && (
					<p className="text-danger block overflow-ellipsis overflow-hidden whitespace-nowrap mt-2">
						{errors.response.message}
					</p>
				)}
				<Button
					onClick={handleClick}
					disabled={isSubmitting}
					type="submit"
					className="w-full mt-6"
				>
					Login
				</Button>
			</form>
		</>
	);
};

export default AuthLoginForm;