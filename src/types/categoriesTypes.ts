export interface CategoryType {
    id: number;
    name: string;
    visibleName: string;
    description: string;
    image: string;
}

export interface CategoryStateType {
    categories: CategoryType[];
    error?: string;
    isLoading: boolean;
}

export default CategoryType;
