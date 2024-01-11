# TeeBay

## Introduction


## Account Creation/Log In
Users are able to create an account using Bcrypt to hash their passwords. Passwords aren't saved directly onto the website. Instead, we keep the password digests and use built in Bcrypt methods to check if the credentials are correct. 

<img width="500" alt="Screen Shot 2023-08-07 at 12 01 53 PM" src="https://github.com/TheZayWay/TeeBay2/assets/121142977/6b2da5be-2000-45c4-9ae5-6326e440072d">


<details>
  <summary>Running TeeBay</summary>

  ## Getting Started

  1. **Clone this repository (only this branch):**

      ```bash
      git clone -b branch_name [https://github.com/TheZayWay/TeeBay2.git]
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
## Running TeeBay



