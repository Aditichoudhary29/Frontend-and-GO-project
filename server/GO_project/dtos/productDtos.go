package dtos

type ProductRequest struct {
	BuyerName    string  `json:"BuyerName" bson:"BuyerName"`
	SellerName   string  `json:"SellerName" bson:"SellerName"`
	UnitPrice    int     `json:"UnitPrice" bson:"UnitPrice"`
	TotalUnits   int     `json:"TotalUnits" bson:"TotalUnits"`
	Tenure       int     `json:"Tenure" bson:"Tenure"`

	Xirr         float64 `json:"Xirr" bson:"Xirr"`
	Repayment    string  `json:"Repayment" bson:"Repayment"`
	RemainingUnits int    `json:"RemainingUnits" bson:"RemainingUnits"`  
	BuyerImage     string             `json:"BuyerImage" bson:"BuyerImage"`
	SellerImage     string             `json:"SellerImage" bson:"SellerImage"`
}
