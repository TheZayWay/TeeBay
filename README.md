# TeeBay

<img width="1280" alt="Screen Shot 2024-01-11 at 11 52 29 AM" src="https://github.com/TheZayWay/TeeBay2/assets/121142977/5028eabc-60c7-4e9c-bb0d-49797e1c9d3a">


## Introduction

TeeBay is a full-stack e-commerce platform designed exclusively for teeshirt enthusiast. Explore our extensive collection of high-quality merchandise, showcasing a diverse range of teeshirts from around the globe. TeeBay is not just a marketplace; it's a vibrant community where you can find inspiration, explore various teeshirts, and elevate your teeshirt swag.

### Getting Started

1. **Explore TeeBay:**
   - Visit [TeeBay](https://teebay2.onrender.com/) to explore our comprehensive collection of teeshirts.

2. **Create an Account:**
   - Sign up on TeeBay to unlock this seamless shopping experience.

3. **Find Your Inspiration:**
   - Dive into our diverse product categories to find the perfect teeshirt that resonates with you.


<details open>
  <summary>Features</summary>
  
   
   [MVP Feature List](https://github.com/TheZayWay/TeeBay2/wiki/MVP-Feature-List)
</details>

## Development
<details open>
  <summary>Running TeeBay</summary>
  
   1. **Clone this repository (only this branch):**

      ```bash
      git clone -b branch_name https://github.com/TheZayWay/TeeBay2.git
      cd TeeBay
      ```

  2. **Install dependencies:**

      ```bash
      pipenv install -r requirements.txt
      ```

  3. **Create a `.env` file:**

      Create a **.env** file based on the example with proper settings for your development environment. Make sure the SQLite3 database connection URL is in the **.env** file.

  4. **Configure the Database Schema:**

      This starter organizes all tables inside the `flask_schema` schema, defined by the `SCHEMA` environment variable. Replace the value for `SCHEMA` with a unique name, **making sure you use the snake_case convention**.

  5. **Migrate and Seed the Database, Run the Flask App:**

      ```bash
      # Activate virtual environment
      pipenv shell

      # Migrate your database
      flask db upgrade

      # Seed your database
      flask seed all

      # Run your Flask app
      flask run
      ```

</details>
