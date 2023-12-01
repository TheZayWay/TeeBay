from app.models import db, Teeshirt, Cart, environment, SCHEMA
from sqlalchemy.sql import text

def seed_carts_teeshirts(): 
    cart1 = Cart(users_id=1) #teeshirts_id=1/2/3
    cart2 = Cart(users_id=2)
    cart3 = Cart(users_id=3)

    teeshirt1 = Teeshirt(name="Nike Soccer Tee", type="Short Sleeve", description="Great for cold weather", brand="Nike", price=20.00, color="White", image_url="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6e4b2c60-8c1c-44b1-bf35-f4b538b28e64/mens-t-shirt-93lL4G.png", user_id=1)
    teeshirt2 = Teeshirt(name="Adidas White Long Sleeve", type="Long Sleeve", description="Great for cold weather", brand="Adidas", price=25.00, color="White", image_url="https://www.lifestylesports.com/dw/image/v2/BCDN_PRD/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dw25a683b7/images/74092300xlarge.jpg?sw=530", user_id=1)
    teeshirt3 = Teeshirt(name="Nike Fleece Long Sleeve", type="Fleece", description="Great for cold weather", brand="Nike",price=45.00, color="Black", image_url="https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/n/i/nibv2662-010_1.jpg", user_id=2)
    teeshirt4 = Teeshirt(name="Short Sleeve Ever Henley", type="Button Short Sleeve", description="Great for cold weather", brand="Nike",price=17.00, color="Black", image_url="https://cdn.shopify.com/s/files/1/1464/5034/products/henley_black_d35d09f9-ce8c-405d-905d-aba56cc98d22.jpg?v=1698962833&width=1536&height=1919&format=jpeg", user_id=2)
    teeshirt5 = Teeshirt(name="Blue Mountain Men Long Sleeve", type="Long Sleeve", description="Great for cold weather", brand="Blue Mountain",price=20.00, color="Black", image_url="https://m.media-amazon.com/images/I/61GFMntn+3L._AC_UY1000_.jpg", user_id=3)
    teeshirt6 = Teeshirt(name="White Thermal", type="Thermal", description="Great for cold weather", brand="Gallery Dept", price=122.00, color="White", image_url="https://gallerydept.com/cdn/shop/products/WHITETHERMALFRONT_1200x1200.jpg?v=1646427662", user_id=3)
    teeshirt7 = Teeshirt(name="Short Sleeve Swoosh", type="Short Sleeve", description="Nice black shirt", brand="Nike", price=30.00, color="Black", image_url="https://i.ebayimg.com/images/g/i1gAAOSwtGljQXGl/s-l1600.png", user_id=1 )
    teeshirt8 = Teeshirt(name="Drifit Crew Neck", type="Short Sleeve", description="drifit", brand="Nike", price=40.00, color="Black", image_url="https://i.ebayimg.com/images/g/9rwAAOSwb2Rjcp0n/s-l1600.jpg", user_id=1 )
    teeshirt9 = Teeshirt(name="Polo Bear", type="Short Sleeve", description="Polo", brand="Ralph Lauren", price=60.00, color="Blue", image_url="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1349857_lifestyle?$rl_pdp_mob_zoom$", user_id=1)
    teeshirt10 = Teeshirt(name="Globe Tee", type="Short Sleeve", description="Nice teeshirt", brand="Hellstar", price=20.00, color="Grey", image_url="https://megamart.subpop.com/cdn/shop/products/unnamed_5c407318-f06b-4155-9396-797201d7ecb5_grande.jpg?v=1629240017", user_id=1 )
    teeshirt11 = Teeshirt(name="Puma Essentials", type="Short Sleeve", description="Puma", brand="Puma", price=30.00, color="Black", image_url="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/530115/01/fnd/PNA/fmt/png/Classics-Kids'-Tee", user_id=1 )
    teeshirt12 = Teeshirt(name="Puma Figc Ftblcore", type="Short Sleeve", description="Soccer tee", brand="Puma", price=40.00, color="Blue", image_url="https://www.sportspar.de/media/image/bd/ed/07/767122-09-1.jpg", user_id=1 )
    teeshirt13 = Teeshirt(name="White Camo Waffle", type="Thermal", description="Saucey", brand="Ralph Lauren", price=100.00, color="Camo", image_url="https://i.ebayimg.com/images/g/j-0AAOSwE~thlIOd/s-l1600.jpg", user_id=1 )
    teeshirt14 = Teeshirt(name="SILKY WHITE GOLD SKULL", type="Button Long Sleeve", description="Very nice", brand="PREMIERE", price=50.00, color="White", image_url="https://i.ebayimg.com/images/g/0DAAAOSwvotgsTtw/s-l1600.png", user_id=1 )
    teeshirt15 = Teeshirt(name="Thinking of you", type="Short Sleeve", description="Nice shirt", brand="Gap", price=20.00, color="Grey", image_url="https://m.media-amazon.com/images/I/91IM87eeuCL._AC_CLa%7C2140%2C2000%7C816hhnMX2LL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY580_.png", user_id=2 )
    teeshirt16 = Teeshirt(name="Adidas Essential", type="Short Sleeve", description="Womans adidas", brand="Adidas", price=40.00, color="White", image_url="https://d2lhrgc5rek5ye.cloudfront.net/pub/media/catalog/product/cache/85a77bdaaa2c784352166a9ec6d7717d/h/t/ht1615_g01.jpg", user_id=2 )
    teeshirt17 = Teeshirt(name="Too Peopley", type="Short Sleeve", description="Funny shirt", brand="Gap", price=20.00, color="Black", image_url="https://res.cloudinary.com/teepublic/image/private/s--vznpxOik--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1674404108/production/designs/38628030_0.jpg", user_id=2 )
    teeshirt18 = Teeshirt(name="Plain Vest Top", type="undershirt", description="Nice undershirt", brand="Gap", price=12.00, color="Green", image_url="https://sbblues.org/wp-content/uploads/2018/05/10x12_mockup_Front_Flat_Envy.png", user_id=3 )
    teeshirt19 = Teeshirt(name="Soft EveryWear", type="Short Sleeve", description="Nice red shirt", brand="Old Navy", price=20.00, color="Red", image_url="https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw67b9cbed/images/large/130181028600_pp_01_image.jpg?sw=1600&sh=1600&sm=fit", user_id=3 )
    teeshirt20 = Teeshirt(name="Fashion V-neck", type="Thermal", description="Classy", brand="Gap", price=30.00, color="Red", image_url="https://cdn11.bigcommerce.com/s-jjm7kgkrrc/images/stencil/1280x1280/products/80482/6254177/01857__80631.1673422551.jpg?c=1", user_id=3 )


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