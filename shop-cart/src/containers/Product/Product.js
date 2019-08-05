import React, { Component } from 'react';
import axios from '../../axios-orders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Product.css";
import SectionList from '../../components/SectionList/SectionList';
import Aux from "../../hoc/Auxiliary/Auxiliary";

class Product extends Component {
    state = {
        product: null,
        size: [],
        avalibleAmount: 0,
        selectedAmount: 1,
        rate: null,
        sectionList: []
    }

    componentDidMount() {
        this.initProduct();
        this.initSelectList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.productId !== this.props.match.params.productId) {
            this.initProduct();
        }
    }

    initProduct = () => {
        axios.get('product.json')
            .then(reponse => {
                const prodcutsData = { ...reponse.data };
                const productId = parseInt(this.props.match.params.productId, 10);
                let targetData = null;
                Object.keys(prodcutsData)
                    .map(igKey => {
                        targetData = prodcutsData[igKey].products.filter(function (item, index, array) {
                            return item.id === productId;
                        });
                    });
                this.setState({ product: targetData[0] });
                this.setState({ rate: this.getRateStar() });
            })
            .catch(error => {
                console.log("Product Get error", error);
            });

        axios.get('size.json')
            .then(reponse => {
                const sizeData = { ...reponse.data };
                const productId = parseInt(this.props.match.params.productId, 10);
                let targetData = null;
                Object.keys(sizeData)
                    .map(igKey => {
                        targetData = sizeData[igKey].size.filter(function (item, index, array) {
                            return item.id === productId;
                        });
                    });

                const tempSize = [];
                targetData.forEach(element => {
                    tempSize.push(element);
                });
                this.setState({ size: tempSize });

                const currentSize = this.filterSize("large");
                this.setState({ avalibleAmount: currentSize[0].amount })
            })
            .catch(error => {
                console.log("Size Get error", error);
            });
    }

    initSelectList = () => {
        axios.get('sectionList.json')
            .then(reponse => {
                const listData = { ...reponse.data };
                let dbSectionList = [];

                Object.keys(listData)
                    .map(igKey => {
                        listData[igKey].items.forEach((element, i, array) => {
                            // element: 單一個陣列的值
                            // i: 陣列的索引值 0, 1, 2, ...
                            // array: 傳入的陣列本體
                            dbSectionList.push(element);
                        });
                    });

                this.setState({ sectionList: dbSectionList });
            })
            .catch(error => {
                console.log("Section List Get error", error);
            });
    }

    filterSize = (name) => {
        const sizeData = [...this.state.size];
        let filterSize = sizeData.filter(function (item, index, array) {
            return item.name === name;
        });
        return filterSize;
    }

    sizeOnchange = (event) => {
        const SelectedSize = event.target.value;
        let currentSize = this.filterSize(SelectedSize);
        this.setState({ avalibleAmount: currentSize[0].amount });
    }

    selectedAmountOnchange = (event) => {

    }

    addSelectedAmount = () => {
        const avalibleAmont = this.state.avalibleAmount;
        let amount = this.state.selectedAmount;

        if (amount < avalibleAmont) {
            amount++;
        }
        this.setState({ selectedAmount: amount });
    }

    reduceSelectedAmount = () => {
        let amount = this.state.selectedAmount;

        if (amount > 1) {
            amount--;
        }
        this.setState({ selectedAmount: amount });
    }

    getRateStar = () => {
        const product = { ...this.state.product };
        const rate = product.rate;
        const splitRate = rate.toString().split(".");
        const isFloat = (splitRate.length == 2) ? true : false;

        let html = [];
        const intRate = parseInt(splitRate[0], 10);
        const len = (isFloat) ? (intRate - 1) : intRate;

        for (let i = 0; i < intRate; i++) {
            html.push(<i key={(i + 1)} className="fas fa-star"></i>);
        }

        if (isFloat) {
            html.push(<i key={(intRate + 1)} className="fas fa-star-half-alt"></i>);
        }

        const htmlLen = html.length;
        for (let j = 0; j < (5 - htmlLen); j++) {
            html.push(<i key={(htmlLen + j + 1)} className="far fa-star"></i>);
        }

        return html;
    }

    render() {
        const product = { ...this.state.product };
        const size = { ...this.state.size };
        const sectionList = [...this.state.sectionList];

        return (
            <Aux>
                <div className="productWrapper">
                    <div className="productImg">
                        <img src={product.img} />
                    </div>
                    <div className="productInfo">
                        <div className="productName">{product.name}</div>
                        <div className="displayFlex">
                            <div className="rateWrapper">
                                {this.state.rate}
                            </div>
                            <div className="soldAmount">
                                500 sold
                            </div>
                        </div>
                        <div className="productPrice"><i className="fas fa-dollar-sign"></i>{product.price}</div>
                        <div className="productIntro">
                            <p dangerouslySetInnerHTML={{ __html: product.desc }}></p>
                        </div>
                        <select className="sharedSelect" onChange={(event) => this.sizeOnchange(event)}>
                            <option value="large">Large</option>
                            <option value="medium">Medium</option>
                            <option value="small">Small</option>
                        </select>
                        <div className="amountSelect displayFlex">
                            <div onClick={(event) => this.reduceSelectedAmount()}>-</div>
                            <input className="sharedInput" type="text" name="amount" value={this.state.selectedAmount} onChange={(event) => this.selectedAmountOnchange(event)} />
                            <div onClick={(event) => this.addSelectedAmount()}>+</div>
                        </div>
                        <div className="avalibleAmount">
                            {this.state.avalibleAmount} piece available
                        </div>
                        <div className="sharedBtn">
                            Add To Cart
                        </div>
                    </div>
                </div>
                <SectionList sectionData={sectionList}></SectionList>
            </Aux>
        );
    }
}

export default Product;