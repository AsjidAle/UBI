import requests from './httpService';

const RolesServices = {
  get() {
    return requests.get(`/roles`);
  },
};

export default RolesServices;
