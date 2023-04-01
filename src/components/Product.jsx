import React, { Fragment, useEffect, useState } from "react";
import classes from './Product.module.css';

const Products = () => {

    const [allProduct, setAllProduct] = useState([])

    let data;

    let apiHandler = async () => {
        try {
            let result = await fetch('http://3.7.252.58:4001/product/getAllProduct', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            data = await result.json();
            // console.log(data)

            const transformData = data.map((item) => {
                return {
                    name: item.name,
                    slugName: item.slugName,
                    price: item.price,
                    productBrandId: item.productBrandId,
                    productCategoryId: item.productCategoryId,
                    discountAmount: item.discountAmount,
                    description: item.description,
                    imageUrl: item.imageUrl,
                    isActive: item.isActive,
                    rating: item.rating,
                    reviewCount: item.reviewCount
                }
            })
            setAllProduct(transformData)
            console.log(allProduct)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        apiHandler()
    }, [])

    const productList = allProduct.map((items) => {
        return (
            //    console.log(items.name)
            <div className={classes.box}>
                <div>
                    <label className={classes.label} htmlFor="name">Name: </label>
                    <ul className={classes.ul} >{items.name} </ul>
                    <label className={classes.label} htmlFor="name">SlugName: </label>
                    <ul> {items.slugName} </ul>
                    <label className={classes.label} htmlFor="name">Price: </label>
                    <ul> {items.price}</ul>
                    <label className={classes.label} htmlFor="name">Product Brand Id: </label>
                    <ul>{items.productBrandId}</ul>
                    <label className={classes.label} htmlFor="name">Product Category Id: </label>
                    <ul>{items.productCategoryId}</ul>
                    <label className={classes.label} htmlFor="name">Discount Amount: </label>
                    <ul>{items.discountAmount}</ul>
                    <label className={classes.label} htmlFor="name">Description: </label>
                    <ul>{items.description}</ul>
                    <ul> <img src={items.imageUrl} alt="" height='280px' /></ul>
                    <label className={classes.label} htmlFor="name">IsActive: </label>
                    <ul>{items.isActive}</ul>
                    <label className={classes.label} htmlFor="name">Rating: </label>
                    <ul>{items.rating}</ul>
                    <label className={classes.label} htmlFor="name">ReviewCount: </label>
                    <ul>{items.reviewCount}</ul>
                </div>
            </div>
        )
    })


    return (
        <Fragment>
            <h1 className={classes.heading}>Product Page</h1>
            <div>
                {productList}
            </div>
        </Fragment>
    )

}

export default Products;