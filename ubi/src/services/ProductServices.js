import requests from "./httpService";

const ProductServices = {
    get(id, params) {
        id = id ? id : '';
        return requests.get(`/product/${id}`, { params });
    },
    gt() {
        return requests.get(`/product`);
    },
    my(){
        return requests.get('/myproducts');
    },
    insert(body) {
        return requests.post(`/product`, body);
    },
    update(id, body) {
        return requests.put(`/product/${id}`, body);
    },
    delete(id) {
        return requests.delete(`/product/${id}`);
    },
}

export default ProductServices;