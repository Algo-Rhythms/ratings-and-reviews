# ratings-and-reviews

-- All pathways routed using Express.js -- Please build this project using the following scripts: "npm run build" will start Webpack "npm start" will boot up the server

::API PATHS::

Returns a list of reviews for a particular product. This list does not include any reported reviews.
GET /reviews/:product_id/list

Returns review metadata for a given product.
GET /reviews/:product_id/meta

Adds a review for the given product.
POST /reviews/:product_id

Updates a review to show it was found helpful.
PUT /reviews/helpful/:review_id

Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request.
PUT /reviews/report/:review_id
