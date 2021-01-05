# Comake Node Database

There are two versions of the backend for this project. This repo contains only the version created with Node.js

## Endpoints

### Posts (Issues)

/api/posts

`GET` /

returns all posts

---

`GET` /z/:zipCode

returns all posts for a single location

---

`GET` /u/:username

returns all posts by a single user

---

`GET` /p/:postId/likes

returns all likes on a single post

---

`GET` /u/:username/liked

returns all posts like by a single user

---

`POST` /p/create

payload: description, imageUrl

creates new post, returns post

---

`PUT` /p/:postId

payload: description, imageUrl (whichever needs updated)

---

`DELETE` /p/:postId

deletes post, returns success message
