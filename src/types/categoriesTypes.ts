export interface CategoryType {
    id: number;
    name: string;
    visibleName: string;
    image: string;
}

export interface CategoryStateType {
    categories: CategoryType[];
    error?: string;
    isLoading: boolean;
}

export default CategoryType;
