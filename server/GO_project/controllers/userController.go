package controllers

import (
	"context"
	"fmt"
	"os"
	"time"

	// "fmt"
	"go_project/dtos"
	"go_project/models"
	"go_project/services"

	// "go_project/utils"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"

	// "github.com/golang-jwt/jwt/v5"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type UserController struct {
	UserService *services.UserService
}

func NewUserController(userService *services.UserService) *UserController {
	return &UserController{
		UserService: userService,
	}
}
func (s *UserController) SignUp(ctx *gin.Context) {
	var payload dtos.SignUpRequest
	err := ctx.ShouldBindJSON(&payload)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if  payload.PhoneNumber == ""  {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"data":    nil,
			"message": "Fields should not be empty, all the fields are required",
			"success": false,
		})
		return
	}
	existingUserbyPhone, err := s.UserService.FindUserByPhone(context.Background(), payload.PhoneNumber)
	if err == nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"data":    existingUserbyPhone,
			"message": "User already registered by this phone number",
			"success": false,
		})
		return
	}


	user := &models.User{
		ID:          primitive.NewObjectID(),
		
		PhoneNumber: payload.PhoneNumber,
		
	}

	errr := s.UserService.CreateUser(context.Background(), user)
	if errr != nil {
		log.Printf("UserController: error inserting user data: %v", errr)
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"data":    nil,
			"message": "not able to create a new user",
			"success": false,
			"error":   errr.Error(),
		})
	} else {
		ctx.AbortWithStatusJSON(http.StatusCreated, gin.H{
			"data":    user,
			"message": "successfully created a new user",
			"success": true,
			"error":   nil,
		})
	}
	log.Println("UserController: user created successfully")

}

func (s *UserController) SignIn(ctx *gin.Context) {
	var payload dtos.SignInRequest
	err := ctx.ShouldBindJSON(&payload)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if payload.PhoneNumber == "" {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			
			"success": false,
			"error":   err,
		})
		return
	}
	existingUserbyPhone, err := s.UserService.FindUserByPhone(context.Background(), payload.PhoneNumber)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			
			"success": false,
			"error":   err,
		})
		return
	}
	ctx.AbortWithStatusJSON(http.StatusOK, gin.H{
		"data":    existingUserbyPhone,
		"message": "User found by this number",
		"success": true,
	})

}

func (s *UserController) VerifyOtp(ctx *gin.Context) {
	var otpPayload dtos.OtpRequest
	err := ctx.ShouldBindJSON(&otpPayload)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error":   err.Error(),
			"success": false,
		})
	}
	existingUser, err := s.UserService.FindUserByPhone(context.Background(), otpPayload.PhoneNumber)

	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error":   err,
			"message": "user not found",
			"data":    nil,
			"success": false,
		})
		return
	}
	if otpPayload.OTP == "" {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"data":    nil,
			"message": "Enter the OTP",
			"success": false,
		})
		return
	}

	if otpPayload.OTP != "123456" {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"message": "Enter correct OTP",
			"success": false,
			"error":   "Incorrect OTP",
		})
		return
	}

	if otpPayload.OTP == "123456" {
		if otpPayload.PhoneNumber== "" {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
				"message": "Please enter email",
				"success": false,
			})
			return
		}
		
		accessToken, refreshToken, err := createToken(existingUser)
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		ctx.SetCookie("accessToken", accessToken, 600, "/", "localhost", false, false)

		ctx.SetCookie("refreshToken", refreshToken, 7*24*3600, "/", "localhost", false, false)

		ctx.AbortWithStatusJSON(http.StatusOK, gin.H{
			
			"success": true,
			"error":   nil,
		})
		return
	}

	// ctx.JSON(http.StatusOK, gin.H{
	// 	"message": "successfully verified user",
	// 	"success": true,
	// 	"error":   nil,
	// })
}

func createToken(user *models.User) (string, string, error) {

	godotenv.Load(".env")
	SECRET := os.Getenv("JWT_SECRET")
	SECRET_KEY := []byte(SECRET)
	access_token_claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"_id":       user.ID,
	
		"phone":     user.PhoneNumber,
		"exp":       time.Now().Add(time.Minute * 10).Unix(),
	})

	refresh_token_claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"_id":       user.ID,
		
		"phone":     user.PhoneNumber,
		"exp":       time.Now().Add(30 * 24 * time.Hour).Unix(),
	})

	accessTokenString, err := access_token_claims.SignedString(SECRET_KEY)
	if err != nil {
		return "", "", err
	}

	refreshTokenString, err := refresh_token_claims.SignedString(SECRET_KEY)
	if err != nil {
		return "", "", err
	}

	fmt.Printf("AccessToken claims added: %+v\n", access_token_claims)
	fmt.Printf("RefreshToken claims added: %+v\n", refresh_token_claims)
	return accessTokenString, refreshTokenString, nil
}

func (s *UserController) RefreshToken(ctx *gin.Context) {
	refreshTokenString, err := ctx.Cookie("refreshToken")
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err, "message": "Refresh token is missing"})
		return
	}
	godotenv.Load(".env")
	SECRET := os.Getenv("JWT_SECRET")
	SECRET_KEY := []byte(SECRET)

	refreshToken, err := jwt.Parse(refreshTokenString, func(refreshToken *jwt.Token) (interface{}, error) {
		if _, ok := refreshToken.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", refreshToken.Header["alg"])
		}
		return SECRET_KEY, nil
	})

	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error":   err,
			"message": "Not able to parse refresh token",
			"success": false,
		})
		return

	}

	if !refreshToken.Valid {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error":   err,
			"message": "Invalid refresh token",
			"success": false,
		})
		return
	}

	claims, ok := refreshToken.Claims.(jwt.MapClaims)
	if !ok {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error":   err,
			"message": "invalid token claims",
			"success": false,
		})
		return
	}

	if exp, ok := claims["exp"].(float64); ok {
		if time.Unix(int64(exp), 0).Before(time.Now()) {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
				"error":   err,
				"message": "refresh token has expired",
				"success": false,
			})
			return
		}
	} else {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error":   err,
			"message": "expiration time not found in token",
			"success": false,
		})
		return
	}

	userPhone := refreshToken.Claims.(jwt.MapClaims)["phone"].(string)
	existingUserbyPhone, err := s.UserService.FindUserByPhone(context.Background(), userPhone)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error":   err,
			"message": "user not found",
			"success": false,
		})
		return
	}
	newAccessToken, newRefreshToken, err := createToken(existingUserbyPhone)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err, "message": "token not found"})
		return
	}

	ctx.SetCookie("accessToken", newAccessToken, 3600, "/", "localhost", false, true)

	ctx.SetCookie("refreshToken", newRefreshToken, 30*24*3600, "/", "localhost", false, true)

	ctx.AbortWithStatusJSON(http.StatusOK, gin.H{
		"message": "successfully verified user",
		"success": true,
		"error":   nil,
	})

}

func (s *UserController) FetchUserById(ctx *gin.Context) {
	id := ctx.Param("id")

	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "Invalid User ID"})
		return
	}

	user, err := s.UserService.FindUserById(context.Background(), objID)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"data":    nil,
			"message": "unable to fetch User",
			"success": false,
			"error":   err,
		})
		return
	}
	ctx.AbortWithStatusJSON(http.StatusOK, gin.H{
		"data":    user,
		"message": "fetched User successfully",
		"success": true,
		"error":   nil,
	})

}
func (s *UserController) Logout(ctx *gin.Context) {
    // Clear cookies by setting them to expire or deleting them
    ctx.SetCookie("accessToken", "", -1, "/", "localhost", false, true)
    ctx.SetCookie("refreshToken", "", -1, "/", "localhost", false, true)

    ctx.JSON(http.StatusOK, gin.H{
        "message": "Logout successful",
        "success": true,
    })
}
