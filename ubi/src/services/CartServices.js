import requests from "./httpService";

const CartServices = {
    get(id, params) {
        id = id ? id : '';
        return requests.get(`/cart/${id}`, { params });
    },
    gt() {
        return requests.get(`/cart`);
    },
    insert(body) {
        return requests.post(`/cart`, body);
    },
    myCart(){
        return requests.get('/myCart');
    },
    update(id, body) {
        return requests.put(`/cart/${id}`, body);
    },
    delete(id) {
        return requests.delete(`/cart/${id}`);
    },
}

export default CartServices;