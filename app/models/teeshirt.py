from .db import db, environment, SCHEMA, add_prefix_for_prod
from .brand import Brand
from collections import OrderedDict


    
carts_teeshirts = db.Table(
    "carts_teeshirts",
    db.Column("carts_id", db.Integer, db.ForeignKey(add_prefix_for_prod("carts.id")), primary_key=True),
    db.Column("teeshirts_id", db.Integer, db.ForeignKey(add_prefix_for_prod("teeshirts.id")), primary_key=True)
)
if environment == "production":
    carts_teeshirts.schema = SCHEMA


class Teeshirt(db.Model):
    __tablename__ = 'teeshirts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(150))
    brand = db.Column(db.String(50))
    image_url = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer)
    color = db.Column(db.String(20))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    # carts_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("carts.id")))
    # listings_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("carts.id")))
    

    carts = db.relationship(
        "Cart",
        secondary="carts_teeshirts",
        back_populates="teeshirts"
    )
    listings = db.relationship("Listing", back_populates="teeshirts")
    brands = db.relationship("Brand", back_populates="teeshirts")
    users = db.relationship("User", back_populates="teeshirts")

    def to_dict(self):
        # brand_names = [brand.name for brand in self.brands]
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'description': self.description,
            'image_url': self.image_url,
            'brand': self.brand,
            'price': self.price,
            'color': self.color,
            'user_id': self.user_id
            # 'users':       
        }
    
    