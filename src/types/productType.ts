interface ProductImagesType {
    images: string;
}

export interface ProductType {
    id: number;
    title: string;
    price: number;
    rating?: number;
    description: string;
    categoryId: number;
    images: ProductImagesType[];
}
