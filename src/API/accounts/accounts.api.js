import $api from "../../axios/index";

class AccountsAPI {
	static loadAll(params) {
		return $api.get("account/get_account_list", {params});
	}

	static delete(uuid) {
		return $api.post("account/delete_account", {account_uuid: uuid});
	}

	static edit(uuid, account) {
		return $api.post(
			"account/edit_account",
			{
				account_uuid: uuid,
				...account
			},
			{params: {table: true}}
		);
	}

	static loadAccountToken(uuid) {
		return $api.get("account/get_account_token", {
			params: {account_uuid: uuid}
		});
	}
}

export default AccountsAPI;
