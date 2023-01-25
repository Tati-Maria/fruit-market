import {createSlice} from "@reduxjs/toolkit";
import apple from "../images/apple.jpg";
import orange from "../images/orange.jpg";
import strawberry from "../images/strawberry.jpg";
import grapes from "../images/uva.jpg";
import banana from "../images/banana.jpg";
import pineapple from "../images/pineapple.jpg";

export interface Product{
    id: number,
    name: string,
    price: number,
    image: string,
    desc: string,
}

export interface ProductState {
    products: Product[]
}

const initialState: ProductState = {
    products: [{
        id: 1,
        name: "Banana",
        price: 20,
        image: banana,
        desc: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.'
    },
    {
        id: 2,
        name: "Orange",
        price: 50,
        image: orange,
        desc: "An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange."
    },
    {
        id: 3,
        name: "Apple",
        price: 30,
        image: apple,
        desc: 'An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today."'
    },
    {
        id: 4,
        name: "Pineapple",
        price: 100,
        image: pineapple,
        desc: "The pineapple is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries."
    },
    {
        id: 5,
        name: "Grapes",
        price: 150,
        image: grapes,
        desc: "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters. The cultivation of grapes began perhaps 8,000 years ago, and the fruit has been used as human food over history."
    },
    {
        id: 6,
        name: "Strawberry",
        price: 30,
        image: strawberry,
        desc: "What are the health benefits of strawberries? Strawberries are good for your whole body. They naturally deliver vitamins, fiber, and particularly high levels of antioxidants known as polyphenols -- without any sodium, fat, or cholesterol. They are among the top 20 fruits in antioxidant capacity and are a good source of manganese and potassium."
    }
],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    }
});

export default productSlice.reducer;