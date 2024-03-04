export interface ICategoryDetail {
    title: string
    subTitle?: string
    description?: string
    categoryItems?: ICategoryItem[]
  
  }
 export  interface ICategoryItem {
    imageUrl: string
    categoryTitle: string
  }

