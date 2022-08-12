import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import Button from "../../../components/Button/Button";
import FormFields from "../../../components/FormFields/FormFields";
import FormTextField from "../../../components/FormTextField/FormTextField";
import {profileSettingsFormValidation} from "../../../validation/settings";
import Auth from "../../../store/auth";
import Avatar from "../../../components/Avatar/Avatar";

const SettingsProfileForm = observer(() => {
	const [requests, setRequests] = useState([]);
	const hiddenFileInput = useRef(null);
	const {
		handleSubmit,
		register,
		setError,
		formState: {errors, isSubmitting, dirtyFields}
	} = useForm({mode: "all"});
	const {
		user: {username, avatar}
	} = Auth;

	const onSubmit = async data => {
		if (dirtyFields.username) {
			setRequests([...requests, Auth.changeUsername(data.username, setError)]);
		}

		if (dirtyFields.old_password && dirtyFields.new_password) {
			setRequests([
				...requests,
				Auth.changePassword(data.old_password, data.new_password, setError)
			]);
		}

		await Promise.all(requests);
	};

	const handleChange = e => {
		const file = e.target.files[0];
		setRequests([...requests, Auth.uploadAvatar(file)]);
	};

	const handleClick = () => hiddenFileInput.current.click();

	return (
		<>
			<h2 className="text-white text-4xl mb-4 font-semibold">
				Profile settings
			</h2>
			<div className="flex">
				<form className="max-w-sm mr-16" onSubmit={handleSubmit(onSubmit)}>
					<FormFields className="mb-6" register={register} errors={errors}>
						<FormTextField
							defaultValue={username}
							placeholder="Username"
							name="username"
							options={profileSettingsFormValidation.username}
						/>
						<FormTextField
							placeholder="Old Password"
							type="password"
							name="old_password"
							options={profileSettingsFormValidation.old_password}
						/>
						<FormTextField
							placeholder="New Password"
							type="password"
							name="new_password"
							options={profileSettingsFormValidation.new_password}
						/>
					</FormFields>
					<Button
						disabled={isSubmitting || Object.keys(dirtyFields).length === 0}
						type="submit"
					>
						Save
					</Button>
				</form>
				<div className="flex flex-col items-center">
					<input
						onChange={handleChange}
						ref={hiddenFileInput}
						type="file"
						hidden
					/>
					<Avatar className="mb-4" width={80} height={80} imagePath={avatar} />
					<Button onClick={handleClick} size="medium">
						Upload photo
					</Button>
				</div>
			</div>
		</>
	);
});

export default SettingsProfileForm;
