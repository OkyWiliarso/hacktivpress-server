# Hacktivpress - Simple Blogging Platform
Sebuah blogging system sederhana dengan menggunakan framework Express JS, dan database MongoDB

## REST API
List of routes:

| **Route**                        | **HTTP**  | **Description**                                        |
| -------------------------------- | --------- | ------------------------------------------------------ |
| api/users/signup                 | POST      | Sign up with new user info                             |
| api/users/login                  | POST      | Sign in while get an access token based on credentials |
| api/articles/add                 | POST      | Input article                                          |
| api/articles/list                | GET       | Get list of all articles                               |
| api/articles/category/:category  | GET       | Get list of all articles based on category             |
| api/articles/author/:author      | GET       | Get list of all articles based on author               |
| api/articles/edit/:id            | PUT       | Edit a specific article                                |
| api/articles/delete/:id          | DELETE    | Delete a specific article                              |

## How to use :
With only npm:

```
npm install
npm start
```

## REQUIRE

.env
```
dbusername={ your mlab db username }
dbpassword={ your mlab db password }
key={ salt key }
```

Access the API via `https://hacktivpress-server.okywiliarso.me/`