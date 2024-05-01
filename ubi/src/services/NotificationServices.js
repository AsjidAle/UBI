import requests from "./httpService";

const NotificationServices = {
    get(id, params) {
        id = id ? id : '';
        return requests.get(`/announcement/${id}`, { params });
    },
    gt() {
        return requests.get(`/announcement`);
    },
    insert(body) {
        return requests.post(`/announcement`, body);
    },
    update(id, body) {
        return requests.put(`/announcement/${id}`, body);
    },
    delete(id) {
        return requests.delete(`/announcement/${id}`);
    },
}

export default NotificationServices;