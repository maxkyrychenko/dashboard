import $api from "../../axios";

class ProxiesAPI {
	static loadPrivate(params) {
		return $api.get("proxy/get_proxy_list", {params});
	}

	static loadShared(params) {
		return $api.get("proxy/get_shared_proxy_list", {params});
	}

	static delete(uuid) {
		return $api.post("proxy/delete_proxy", {proxy_uuid: uuid});
	}

	static edit(uuid, proxy) {
		return $api.post(
			"proxy/edit_proxy",
			{
				proxy_uuid: uuid,
				...proxy
			},
			{params: {table: true}}
		);
	}

	static create(proxy) {
		return $api.post("proxy/add_proxy", proxy, {params: {table: true}});
	}

	static check(uuid) {
		return $api.post(
			"proxy/check_proxy",
			{proxy_uuid: uuid},
			{params: {table: true}}
		);
	}
}

export default ProxiesAPI;
