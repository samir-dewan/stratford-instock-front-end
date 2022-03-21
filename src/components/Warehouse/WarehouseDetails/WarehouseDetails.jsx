import React, { Component } from "react";
import axios from "axios";
import "./WarehouseDetails.scss";
import arrowBack from "../../../assets/icons/arrow_back-24px.svg";
import chevronRight from "../../../assets/icons/chevron_right-24px.svg";
import editIcon from "../../../assets/icons/edit-24px.svg";
import deleteIcon from "../../../assets/icons/delete_outline-24px.svg";

export default class WarehouseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouseDetails: {},
      inventory: [],
      isLoading: true,
    };
  }

  fetchData = () => {
    axios
      .get(
        `http://localhost:5000/warehouses/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9`
      )
      .then((response) => {
        console.log(response);
        this.setState({
          warehouseDetails: response.data[0],
          inventory: response.data.slice(1),
          isLoading: false,
        });
      });
  };
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {}

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="help">
          <div className="warehouse">
            <div className="warehouse__header">
              <div className="warehouse__header-container">
                <button className="button-icon">
                  <img src={arrowBack} />
                </button>
                <h1 className="warehouse__title">{this.state.warehouseDetails.city}</h1>
              </div>
                <button className="edit-button"></button>
                <button className="edit-button edit-button--tablet">Edit</button>
            </div>
            <div className="main">
              <div className="details">
                <div className="details__address">
                  <p className="details__title">WAREHOUSE ADDRESS:</p>
                  <div className="details__container">
                    <p className="details__information">
                      {this.state.warehouseDetails.address},
                    </p>
                    <p className="details__information">
                      {this.state.warehouseDetails.city},
                      {this.state.warehouseDetails.country}
                    </p>
                  </div>
                </div>
                <div className="details__contact">
                  <div className="details__contact-info">
                    <p className="details__title">CONTACT NAME:</p>
                    <p className="details__information">
                      {this.state.warehouseDetails.contact.name}
                    </p>
                    <p className="details__information">
                      {this.state.warehouseDetails.contact.position}
                    </p>
                  </div>
                  <div className="details__contact-info">
                    <p className="details__title">CONTACT INFORMATION:</p>
                    <p className="details__information">
                      {this.state.warehouseDetails.contact.phone}
                    </p>
                    <p className="details__information">
                      {this.state.warehouseDetails.contact.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="inventory">
                <div className="inventory__header">
                  <div className="inventory__title">
                    <p className="inventory__title--tablet">INVENTORY ITEM</p>
                  </div>
                  <div className="inventory__title">
                    <p className="inventory__title--tablet">CATEGORY</p>
                  </div>
                  <div className="inventory__title">
                    <p className="inventory__title--tablet">STATUS</p>
                  </div>
                  <div className="inventory__title">
                    <p className="inventory__title--tablet">QTY</p>
                  </div>
                  <div className="inventory__title">
                    <p className="inventory__title--tablet">ACTIONS</p>
                  </div>
                </div>
                <div className="inventory__list">
                  {this.state.inventory.map((item) => {
                    return (
                      <div className="inventory__main">
                        <div className="inventory__container">
                          <div className="inventory__box">
                            <div className="inventory__item">
                              <p className="details__title inventory__title--mobile">
                                INVENTORY ITEM
                              </p>
                              <div className="inventory__button">
                                <p>{item.itemName}</p>
                                <button className="button-icon">
                                  <img className="button-icon" src={chevronRight} />
                                </button>
                              </div>
                            </div>
                            <div className="inventory__category">
                              <p className="details__title inventory__title--mobile">
                                CATEGORY
                              </p>
                              <p>{item.category}</p>
                            </div>
                          </div>
                          <div className="inventory__storage">
                            <div className="inventory__item">
                              <p className="details__title inventory__title--mobile">
                                STATUS
                              </p>
                              <p>{item.status}</p>
                            </div>
                            <div className="inventory__category">
                              <p className="details__title inventory__title--mobile">
                                QTY
                              </p>
                              <p>{item.quantity}</p>
                            </div>
                          </div>
                        </div>
                        <div className="inventory__buttons">
                          <button className="button-icon">
                            <img className='button-icon'src={deleteIcon} />
                          </button>
                          <button className="button-icon">
                            <img className='button-icon' src={editIcon} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
