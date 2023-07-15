from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class SellingForm(FlaskForm):
    #Fields produced to sell a tee
    name = StringField('Name', validators=[DataRequired()])
    type = SelectField(
        'Type', 
        choices=[('Short Sleeve', 'Short Sleeve'),('Long Sleeve', 'Long Sleeve'),('Fleece','Fleece'),
                 ('Button Short Sleeve','Button Short Sleeve'),('Button Long Sleeve','Button Long Sleeve'),
                 ('Thermal','Thermal'),('Undershirt','Undershirt')]
    )
    description = TextAreaField('Description', validators=[DataRequired()])
    image_url = StringField('Image Url', validators=[DataRequired()])
    brand = StringField('Brand Name')
    price = IntegerField('Price', validators=[DataRequired()])
    create_listing = SubmitField('Create a Listing')
