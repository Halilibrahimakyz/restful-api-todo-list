
# TO DO

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/todolist/ | `GET` | Empty | List all todolist. |
| /api/todolist/ | `POST` | {'todoID':"id",'userID':'id',datetime:30.04.2021-00:42:00, 'description':'toplantı', 'complete':false,'month':'5','day':'1'} | Create a new todo |
| /api/todolist/id/:todo_id | `GET` | Empty | Get a todo. |
| /api/todolist/id/:todo_id | `PUT` | {datetime:01.05.2021-00:42:00, 'description':'akşam yemeği', 'complete':true,'month':'5','day':'1'}} | Update a todo with new info. |
| /api/todolist/id/:todo_id | `DELETE` | Empty | Delete a  todo. |
| /api/todolist/:month/:day | `GET` | Empty | List to do by date. |
| /api/todolist/:month | `GET` | Empty | List to do by date. |

# USERS

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | {username:'admin', password:'12345'} | Create a new user. |
| /authenticate | `POST` | { username: 'admin', password:'12345' } | Generate a token. |

# Demo
[Live demo on Heroku](https://restful-api-todo-list.herokuapp.com/)
