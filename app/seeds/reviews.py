from app.models import db, Review, Cart, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        review="This teeshirt is so cool", user_id=1, teeshirt_id=3)
    review2 = Review(
        review="I could do without it.", user_id=2, teeshirt_id=1)
    review3 = Review(
        review="This teeshirt is so the bomb!", user_id=3, teeshirt_id=2)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.commit()
    print("Reviews have been seeded.")

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()
    print("Reviews have been unseeded.")