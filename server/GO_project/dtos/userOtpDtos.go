package dtos

type OtpRequest struct {
	
PhoneNumber string `json:"PhoneNumber" bson:"PhoneNumber"`
	OTP     string `json:"otp" bson:"otp"`
}
