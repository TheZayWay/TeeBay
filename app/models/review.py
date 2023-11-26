from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(50))
    teeshirt_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("teeshirts.id")))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))

    users = db.relationship("User", back_populates="reviews")
    teeshirts = db.relationship("Teeshirt", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'user_id': self.user_id,
            'teeshirt_id': self.teeshirt_id,
            'User' : {
                'id': self.users.id,
                'first_name': self.users.first_name
            }
            # ,'Teeshirt' : {
            #     'id': self.teeshirts.id
            # }                  
        }
    