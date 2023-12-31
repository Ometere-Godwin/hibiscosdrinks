export interface ProductsProps{
    _id: number,
    title: number,
    isNew: boolean,
    oldPrice: number,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: number,
    quantity: number,
};
// Instead of typing the PorductPrps all over again, simply say item: ProductProps
export interface ItemProps{
    item: ProductsProps;
}

// 
export interface StateProps{
    shopping:{
        productDate:[],
        userInfo:{},
        orderData: {
            order: ProductsProps[],
        };
    };
};

export interface DrinksProps{
    id: number,
    name: string,
    description: string,
    image: string,
    ingredients: string,
    rating: number,
};

export interface DrinksItemProps{
    item: DrinksProps;
}