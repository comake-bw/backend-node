# Comake Node Database

There are two versions of the backend for this project. This repo contains only the version created with Node.js.

## Endpoints

---

### Posts (Issues)

url: `/api/posts`

|  Method  | url                | parameters        | payload                                     | returns                               |
| :------: | ------------------ | ----------------- | ------------------------------------------- | ------------------------------------- |
|  `GET`   | /                  | -                 | -                                           | all posts                             |
|  `GET`   | /z/:zipCode        | (string) zip code | -                                           | all posts for single location         |
|  `GET`   | /u/:username       | (string) username | -                                           | all posts by single user              |
|  `GET`   | /p/:postId/likes   | (int) post_id     | -                                           | all likes on a single post            |
|  `GET`   | /u/:username/likes | (string) username | -                                           | all posts liked by single user        |
|  `POST`  | /p/create          | -                 | { (string) description, (string) imageUrl } | creates new post, returns post        |
|  `PUT`   | /p/:postId         | (int) post_id     | whichever from above needs updated          | updates post, returns post            |
| `DELETE` | /p/:postId         | (int) post_id     | -                                           | deletes post, returns success message |

---
