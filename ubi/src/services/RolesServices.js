import requests from './httpService';

const RolesServices = {
  get(id) {
    id = id ? id : '';
    return requests.get(`/roles/${id}`);
  },
  gt() {
    return requests.get(`/roles`);
  },
};

export default RolesServices;
