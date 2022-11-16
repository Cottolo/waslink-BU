package repositories

import (
	"server/models"

	"gorm.io/gorm"
)

type UserRepository interface {
	UpdateUser(user models.User) (models.User, error)
	DeleteUser(user models.User, ID int) (models.User, error)
	GetUsers(ID int) (models.User, error)
}

func RepositoryUser(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) GetUsers(ID int) (models.User, error) {
	var user models.User
	err := r.db.First(&user, ID).Error

	return user, err
}

func (r *repository) UpdateUser(user models.User) (models.User, error) {
	err := r.db.Save(&user).Error

	return user, err
}

func (r *repository) DeleteUser(user models.User, ID int) (models.User, error) {
	err := r.db.Delete(&user).Error

	return user, err
}
