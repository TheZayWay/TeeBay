from app.models import db, Teeshirt, Cart, environment, SCHEMA
from sqlalchemy.sql import text

def seed_carts_teeshirts(): 
    cart1 = Cart(users_id=1) #teeshirts_id=1/2/3
    cart2 = Cart(users_id=2)
    cart3 = Cart(users_id=3)

    teeshirt1 = Teeshirt(name="Nike Soccer Tee", type="Short Sleeve", description="Great for cold weather", brand="Nike", price=20.00, color="White", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbRRjrAsC0qxUhbt-F8rRzl0dAndbCPcaWw&usqp=CAU", user_id=1)
    teeshirt2 = Teeshirt(name="Adidas White Long Sleeve", type="Long Sleeve", description="Great for cold weather", brand="Adidas", price=25.00, color="White", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GO6YTXGr1IAmWy7HyuuJiSjSDuMV0Jw9IA&usqp=CAU", user_id=1)
    teeshirt3 = Teeshirt(name="Nike Fleece Long Sleeve", type="Fleece", description="Great for cold weather", brand="Nike",price=45.00, color="Black", image_url="https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/n/i/nibv2662-010_1.jpg", user_id=2)
    teeshirt4 = Teeshirt(name="Short Sleeve Ever Henley", type="Button Short Sleeve", description="Great for cold weather", brand="Nike",price=17.00, color="Black", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsur4ih1fh7S_b_HEXD09OKhgSahJFDQNbw&usqp=CAU", user_id=2)
    teeshirt5 = Teeshirt(name="Blue Mountain Men Long Sleeve", type="Long Sleeve", description="Great for cold weather", brand="Blue Mountain",price=20.00, color="Black", image_url="https://media.tractorsupply.com/is/image/TractorSupplyCompany/1294733?$456$", user_id=3)
    teeshirt6 = Teeshirt(name="White Thermal", type="Thermal", description="Great for cold weather", brand="Hanes", price=22.00, color="White", image_url="https://i5.walmartimages.com/asr/f4ae820e-f55c-43f6-9555-e1cbc9897c3c.aef02fd3e7131997b02209193317fcce.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", user_id=3)
    teeshirt7 = Teeshirt(name="Short Sleeve Swoosh", type="Short Sleeve", description="Nice black shirt", brand="Nike", price=30.00, color="Black", image_url="https://i.ebayimg.com/images/g/i1gAAOSwtGljQXGl/s-l1600.png", user_id=1 )
    teeshirt8 = Teeshirt(name="Drifit Crew Neck", type="Short Sleeve", description="drifit", brand="Nike", price=40.00, color="Black", image_url="https://i.ebayimg.com/images/g/9rwAAOSwb2Rjcp0n/s-l1600.jpg", user_id=1 )
    teeshirt9 = Teeshirt(name="Polo Bear", type="Short Sleeve", description="Polo", brand="Ralph Lauren", price=60.00, color="Blue", image_url="https://i.ebayimg.com/images/g/xQQAAOSwtQFkHtYf/s-l500.jpg", user_id=1)
    teeshirt10 = Teeshirt(name="Globe Tee", type="Short Sleeve", description="Nice teeshirt", brand="Hellstar", price=20.00, color="Grey", image_url="https://i.ebayimg.com/images/g/3r4AAOSw2LRkO7s-/s-l500.png", user_id=1 )
    teeshirt11 = Teeshirt(name="Puma Essentials", type="Short Sleeve", description="Puma", brand="Puma", price=30.00, color="Black", image_url="https://i.ebayimg.com/images/g/ClEAAOSwPa9jRJnY/s-l500.jpg", user_id=1 )
    teeshirt12 = Teeshirt(name="Puma Figc Ftblcore", type="Short Sleeve", description="Soccer tee", brand="Puma", price=40.00, color="Blue", image_url="https://i.ebayimg.com/images/g/FFwAAOSwj~BjyHmM/s-l500.jpg", user_id=1 )
    teeshirt13 = Teeshirt(name="White Camo Waffle", type="Thermal", description="Saucey", brand="Ralph Lauren", price=100.00, color="Camo", image_url="https://i.ebayimg.com/images/g/j-0AAOSwE~thlIOd/s-l1600.jpg", user_id=1 )
    teeshirt14 = Teeshirt(name="SILKY WHITE GOLD SKULL", type="Button Long Sleeve", description="Very nice", brand="PREMIERE", price=50.00, color="White", image_url="https://i.ebayimg.com/images/g/0DAAAOSwvotgsTtw/s-l1600.png", user_id=1 )
    teeshirt15 = Teeshirt(name="Thinking of you", type="Short Sleeve", description="Nice shirt", brand="Gap", price=20.00, color="Grey", image_url="https://i.ebayimg.com/images/g/qIsAAOSwaQFjTccZ/s-l500.jpg", user_id=2 )
    teeshirt16 = Teeshirt(name="Adidas Essential", type="Short Sleeve", description="Womans adidas", brand="Adidas", price=40.00, color="White", image_url="https://i.ebayimg.com/images/g/r40AAOSw43dkrt2F/s-l500.jpg", user_id=2 )
    teeshirt17 = Teeshirt(name="Too Peopley", type="Short Sleeve", description="Funny shirt", brand="Gap", price=20.00, color="Black", image_url="https://i.ebayimg.com/images/g/Od8AAOSwvapkSawK/s-l500.jpg", user_id=2 )
    teeshirt18 = Teeshirt(name="Plain Vest Top", type="undershirt", description="Nice undershirt", brand="Gap", price=12.00, color="Green", image_url="https://i.ebayimg.com/images/g/vn8AAOSwywpkgpiY/s-l500.jpg", user_id=3 )
    teeshirt19 = Teeshirt(name="Soft EveryWear", type="Short Sleeve", description="Nice red shirt", brand="Old Navy", price=20.00, color="Red", image_url="https://i.ebayimg.com/images/g/fJIAAOSwNh9i9ohx/s-l500.png", user_id=3 )
    teeshirt20 = Teeshirt(name="Fashion V-neck", type="Thermal", description="Classy", brand="Gap", price=30.00, color="Red", image_url="https://i.ebayimg.com/thumbs/images/g/JYgAAOSw-8djjuks/s-l300.webp", user_id=3 )


    cart1.teeshirts.extend([teeshirt1, teeshirt2, teeshirt7, teeshirt8, teeshirt9, teeshirt10, teeshirt11, teeshirt12, teeshirt13, teeshirt14])
    cart2.teeshirts.extend([teeshirt3, teeshirt4, teeshirt15, teeshirt16, teeshirt17])
    cart3.teeshirts.extend([teeshirt5, teeshirt6, teeshirt18, teeshirt19, teeshirt20])

    db.session.add_all([
        cart1, cart2, cart3, teeshirt1, teeshirt2, teeshirt3, teeshirt4,
        teeshirt5, teeshirt6, teeshirt7, teeshirt8, teeshirt9, teeshirt10,
        teeshirt11, teeshirt12, teeshirt13, teeshirt14, teeshirt15, teeshirt16,
        teeshirt17, teeshirt18, teeshirt19, teeshirt20
    ])
    db.session.commit()
    print("carts_teeshirts have been seeded.")


def undo_seed_carts_teeshirts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.carts_teeshirts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM carts_teeshirts"))
        
    db.session.commit()
    print("carts_teeshirts have been unseeded.")

def undo_seed_carts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM carts"))
        
    db.session.commit()
    print("Carts have been unseeded.")











# def seed_carts():
#     cart1 = Cart(users_id=1)
#     cart2 = Cart(users_id=2)
#     cart3 = Cart(users_id=3)

#     db.session.add(cart1)
#     db.session.add(cart2)
#     db.session.add(cart3)
#     db.session.commit()
#     print("Carts have been seeded.")