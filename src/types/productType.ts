interface ProductImagesType {
    images: string;
}

export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: ProductImagesType[];
}
