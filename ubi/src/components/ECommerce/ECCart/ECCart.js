import React, { Fragment, useEffect, useState } from "react";
import png18 from "../../../assets/img/pngs/18.png";
import png19 from "../../../assets/img/pngs/19.png";
import png1 from "../../../assets/img/pngs/1.jpg";
import Utils from "../../../utils/Utils";
import png01 from "../../../assets/img/pngs/01.jpg";
import png2 from "../../../assets/img/pngs/fe.png";
import png02 from "../../../assets/img/pngs/fi.png";
import png3 from "../../../assets/img/pngs/plantain.jpg";
import png03 from "../../../assets/img/pngs/Tuber.png";
import png4 from "../../../assets/img/pngs/Cashewnut.png";
import png04 from "../../../assets/img/pngs/Coconut.jpg";
import png5 from "../../../assets/img/pngs/Nuts.jpg";
import png05 from "../../../assets/img/pngs/Brown_beans.png";
import png6 from "../../../assets/img/pngs/Yellow_corn.jpg";
import png06 from "../../../assets/img/pngs/Whole_grains.png";
import png7 from "../../../assets/img/pngs/Maize.jpg";
import png07 from "../../../assets/img/pngs/Fresh_Cocoa.jpg";
import png8 from "../../../assets/img/pngs/Grains.jpg";
import png08 from "../../../assets/img/pngs/Dried_Cocoa.jpg";
import png9 from "../../../assets/img/pngs/carrot.jpg";
import png09 from "../../../assets/img/pngs/bell_pepper.jpg";
import png10 from "../../../assets/img/pngs/green_beans.jpg";
import png11 from "../../../assets/img/pngs/tomatoes.jpg";
import png12 from "../../../assets/img/pngs/Fresh_Cocoa.jpg";
import png13 from "../../../assets/img/pngs/Garlic.jpg";
import png14 from "../../../assets/img/pngs/Grains.jpg";
import png15 from "../../../assets/img/pngs/Habanero_pepper.jpg";
import png16 from "../../../assets/img/pngs/Maize.jpg";
import png17 from "../../../assets/img/pngs/Nigerian_Eggplant.png";
import { Badge, Breadcrumb, Button, Card, Col, Form, Pagination, Row, InputGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartServices from "../../../services/CartServices";
import ProductServices from "../../../services/ProductServices";


const Productdetails =
  [
    { id: 1, ProductId: "Cassava Tuber", Product1: png1, Product2: png1, Productpriceold: "₦25.00", Productdiscountnew: "₦ 25000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Productdiscount: "-33%", Productdiscounttext: "success", discountoffer: "discount", Favorite: "heart", },
    { id: 2, ProductId: "Walnut", Product1: png2, Product2: png02, Productpriceold: "₦25.00", Productdiscountnew: "₦ 57500", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 3, ProductId: "Sweet Potato ", Product1: png01, Product2: png01, Productpriceold: "₦25.00", Productdiscountnew: "₦ 248500", discountoffer: "discount", Productdiscount: "-50%", Productdiscounttext: "info", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 4, ProductId: "Plantain", Product1: png3, Product2: png3, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 5, ProductId: "Tuber", Product1: png03, Product2: png03, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 6, ProductId: "Green beans", Product1: png4, Product2: png4, Productpriceold: "₦25.00", Productdiscountnew: "₦ 12000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 7, ProductId: "Nigerian Eggplant", Product1: png04, Product2: png04, Productpriceold: "₦25.00", Productdiscountnew: "₦ 12000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 8, ProductId: "Brown Beans", Product1: png05, Product2: png05, Productpriceold: "₦25.00", Productdiscountnew: "₦ 12000", discountoffer: "discount", Productdiscount: "-40%", Productdiscounttext: "danger", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 9, ProductId: "Yellow Corn", Product1: png5, Product2: png5, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10050", discountoffer: "discount", Productdiscount: "-40%", Productdiscounttext: "danger", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 10, ProductId: "Whole Grains", Product1: png06, Product2: png06, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10500", discountoffer: "discount", Productdiscount: "-43%", Productdiscounttext: "warning", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 11, ProductId: "Fresh Cocoa", Product1: png07, Product2: png07, Productpriceold: "₦25.00", Productdiscountnew: "₦ 10500", discountoffer: "discount", Productdiscount: "-43%", Productdiscounttext: "warning", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 12, ProductId: "Maize", Product1: png7, Product2: png7, Productpriceold: "₦25.00", Productdiscountnew: "₦ 584700", discountoffer: "discount", Productdiscount: "-43%", Productdiscounttext: "warning", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 13, ProductId: "Beans", Product1: png8, Product2: png8, Productpriceold: "₦25.00", Productdiscountnew: "₦ 584700", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 14, ProductId: "Dried Cocoa", Product1: png08, Product2: png08, Productpriceold: "₦25.00", Productdiscountnew: "₦ 587400", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 15, ProductId: "Green Beans", Product1: png10, Product2: png10, Productpriceold: "₦25.00", Productdiscountnew: "₦ 24500", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 16, ProductId: "Fresh Tomatoes", Product1: png11, Product2: png11, Productpriceold: "₦25.00", Productdiscountnew: "₦ 25000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 17, ProductId: "Garlic", Product1: png13, Product2: png13, Productpriceold: "₦25.00", Productdiscountnew: "₦ 25000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 18, ProductId: "Carrots", Product1: png9, Product2: png9, Productpriceold: "₦25.00", Productdiscountnew: "₦ 5000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 19, ProductId: "Beans", Product1: png14, Product2: png14, Productpriceold: "₦25.00", Productdiscountnew: "₦ 155000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 20, ProductId: "Habanero pepper", Product1: png15, Product2: png15, Productpriceold: "₦25.00", Productdiscountnew: "₦ 20000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 21, ProductId: "Bell pepper", Product1: png17, Product2: png17, Productpriceold: "₦25.00", Productdiscountnew: "₦ 20000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
    { id: 22, ProductId: "Yellow Corn", Product1: png6, Product2: png06, Productpriceold: "₦25.00", Productdiscountnew: "₦ 20000", Addtocart: "Add to cart ", Quickview: "Quick View", ProductRating: "icons", Favorite: "heart", },
  ];


let Shoppingcart = [
  { Id: 1, Product: png14, ProductName: "COLLEGE BAG", Color: "Color:", Colorpicker: "Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 1, Price: "$26.00", },
  { Id: 2, Product: png15, ProductName: "PARTY WEAR SHOES", Color: "Color:", Colorpicker: "Pick", Qty: "In stock", Qtytext: "success", Quantity: 2, Price: "$23.00", },
  { Id: 3, Product: png19, ProductName: "SAMSUNG A2", Color: "Color:", Colorpicker: "Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 3, Price: "$56.00", },
  { Id: 4, Product: png16, ProductName: "FLOWER POT", Color: "Color:", Colorpicker: " Green and Black color", Qty: "Out of stock", Qtytext: "success", Quantity: 4, Price: "$36.00", },
  { Id: 5, Product: png17, ProductName: "CHAIR", Color: "Color:", Colorpicker: "Green and Black color", Qty: "Out of stock", Qtytext: "success", Quantity: 6, Price: "$24.00", },
  { Id: 6, Product: png18, ProductName: "WATCH", Color: "Color:", Colorpicker: "Green and Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 7, Price: "$34.00", },];



function ECCart() {
  const [items, setItems] = useState([]);
  const [offers, setOffers] = useState([]);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    CartServices.myCart().then((result) => {
      setItems(result.data);
      console.log(result.data);
    });

    ProductServices.gt().then((result) => {
      console.log(result.data);
      setProducts(result.data);
    });
  }, []);

  var Delete = async (id1) => {
    console.log(id1);
    var response = await CartServices.delete(id1);
    Utils.Toast('success', response.data);
    let ee = Shoppingcart.filter((e, i) => {
      return e.Id !== id1
    })
    Shoppingcart = ee
    setdata(ee)

  }
  const [data, setdata] = useState(Shoppingcart)
  function dec(el) {
    let unit = Number(el.target.parentElement.querySelector("input").value)

    // if (
    //   (unit) === 0) {
    //   return false;
    // } else {
    //   el.target.parentElement.querySelector("input").value--;
    // }
    if (unit > 0) {
      el.target.parentElement.querySelector("input").value--
    }
  }
  function inc(el) {
    Number(el.target.parentElement.querySelector("input").value++);
  }
  return (
    <Fragment>
      <Fragment>
        <div className="page-header">
          <div>
            <h2 className="main-content-title tx-24 mg-b-5">My Cart</h2>
            <Breadcrumb >
              <Breadcrumb.Item active aria-current="page">Cart</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {Utils.can('Create Products') &&
            <div className="d-flex">
              <div className="justify-content-center">
                <Button
                  onClick={() => setShowModal(true)}
                  variant="primary"
                  type="button"
                  className="my-2 btn-icon-text"
                >
                  <span className="fa fa-reply-all"></span> &nbsp; Back to Store
                </Button>
              </div>
            </div>
          }
        </div>

      </Fragment>
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col lg={12} xl={12} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h5 className="mb-3 font-weight-bold tx-14">Shopping cart</h5>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered className="text-nowrap table-shopping-cart mb-0">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" className="wd-120">
                        Price per unit
                      </th>
                      <th scope="col">Units Remaning</th>
                      <th scope="col" className="wd-120">
                        Action
                      </th>
                      <th scope="col" className="text-center ">

                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Productdetails.map((list, index) => (
                      <tr key={index} data-index={index} className={`${items.some(itm => list.id === itm.product) ? '' : 'd-none'}`}>
                        {/* when (index+1) == product.id then display */}
                        <td>
                          <div className="media">
                            <div className="card-aside-img">
                              <img
                                src={list.Product1}
                                alt="img"
                                className="img-sm"
                              />
                            </div>
                            <div className="media-body my-auto">
                              <div className="card-item-desc mt-0">
                                <h6 className="font-weight-semibold mt-0 text-uppercase">
                                  {items.some(itm => itm.product === list.id) ? items.find(itm => itm.product === list.id).products.name : null}
                                </h6>
                                <dl className="card-item-desc-1">
                                  <dt>{list.Color} </dt>
                                  <dd>{list.Colorpicker}</dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p
                            className={`text-${list.Qtytext} small mb-0 mt-1 tx-12 text-center`}
                          >
                            {items.some(itm => itm.product === list.id) ? <><b>₦</b> {items.find(itm => itm.product === list.id).products.price}</> : null}
                          </p>
                        </td>
                        <td>
                          <div className="price-wrap text-center">
                            <span className="price font-weight-bold tx-16">
                              {items.some(itm => itm.product === list.id) ? <>{items.find(itm => itm.product === list.id).products.stock}</> : null}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="handle-counter" id="handleCounter">
                            <Button
                              variant="success"
                              onClick={() => window.location.pathname = `/productdeatils/${items.some(itm => itm.product === list.id) ? items.find(itm => itm.product === list.id).products.id : null
                                }`}
                            >
                              Buy Now
                            </Button>
                          </div>
                        </td>
                        <td className="text-center">
                          <Link to="#"
                            onClick={() => Delete(list.id)}
                            className="remove-list text-danger tx-20 remove-button"
                            data-abc="true"
                          >
                            <i className="fa fa-trash"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

ECCart.propTypes = {};

ECCart.defaultProps = {};

export default ECCart;
