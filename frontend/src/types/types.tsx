export interface BourbonType {
   name: string;
   distillery: string;
   description: string;
   averagePurchasePrice: number;
   thumbnailImg: string;
   averageStars: number;
   reviews: BourbonReviewType[];
}

export interface BourbonReviewType {
   reviewDate: Date;
   purchasePrice: number;
   stars: number;
   review: string;
}
