# from app.models import db, Listing, environment, SCHEMA
# from sqlalchemy.sql import text

# def seed_listings():
#     listing1 = Listing(teeshirts_id=1) #users_id=1 /2/ 3
#     listing2 = Listing(teeshirts_id=2)
#     listing3 = Listing(teeshirts_id=3)

#     db.session.add(listing1)
#     db.session.add(listing2)
#     db.session.add(listing3)
#     db.session.commit()
#     print("Listings have been seeded.")

# def undo_seed_listings():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.listings RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute(text("DELETE FROM listings"))
        
#     db.session.commit()
#     print("Listings have been unseeded.")