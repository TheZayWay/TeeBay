from flask import Blueprint, jsonify, session, request, render_template, redirect, url_for
from flask_login import current_user
from app.models import Review, db
from app.forms.review_form import ReviewForm

review_routes = Blueprint('reviews', __name__)

# #GET ALL REVIEWS
@review_routes.route('/', methods=['GET'])
def get_all_reviews():
    reviews = Review.query.all()
    for review in reviews: 
        return {'reviews' : [review.to_dict() for review in reviews]}
    
@review_routes.route('/<int:id>', methods=['GET'])
def get_review(id):
    review = Review.query.get(id)
    return review.to_dict()


@review_routes.route('/current', methods=['GET'])
def get_current_user_reviews():
    if current_user.is_authenticated: 
        userId = current_user.id
        reviews = Review.query.filter(Review.user_id == userId).all()
        return {'reviews': [review.to_dict() for review in reviews]}
    
# #POST A REVIEW
@review_routes.route('/<int:teeshirtId>/review/', methods=['POST'])
def create_a_review(teeshirtId):
    # if current_user.is_authenticated:
        form = ReviewForm()
        # form['csrf_token'].data = request.cookies['csrf_token']
        data = form.data
        review = Review(
            review = data['review'],
            teeshirt_id = teeshirtId,
            user_id = current_user.id
            )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()

# Test post route
@review_routes.route('/<int:teeshirtId>/review', methods=['GET'])
def render_review_form(teeshirtId):
    form = ReviewForm()
    return render_template('review_form.html', form=form, teeshirtId=teeshirtId)


# #EDIT A REVIEW
@review_routes.route('/<int:id>/update/', methods=['POST'])
def edit_review(id):
    # if current_user.is_authenticated:
        form = ReviewForm()
        # form['csrf_token'].data = request.cookies['csrf_token']       
        data = form.data
        review_to_update = Review.query.get(id)
        # if review_to_update.user_id == current_user.id:
        review_to_update.review = data['review']
        db.session.commit()
        return review_to_update.to_dict()


@review_routes.route('/<int:id>/update', methods=['GET'])
def render_update_form(id):
    form = ReviewForm()
    review_to_update = Review.query.get(id)
    form.review.data = review_to_update.review  # Pre-fill the form with existing data
    return render_template('update_review_form.html', form=form, id=id)


# #DELETE A REVIEW
@review_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete_review(id):
    # if (current_user.is_authenticated):
        review_to_delete = Review.query.get(id)
        # if review_to_delete.user_id == current_user.id:
        db.session.delete(review_to_delete)
        db.session.commit()
        return {'review': 'your review has been deleted'}
