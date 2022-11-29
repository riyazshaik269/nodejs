To create a RESTful API(using Express) with Node.js including exceptional handling for an
eCommerce company which does the following operations.
Mongo Database is recommended.
1. Create a new order by accepting the following JSON payload as a POST request, validate for
duplicate orders based on order_id.
Enpoint : /orders/create
{
"order_id": "123",
"item_name":"Samsung Mobile",
"cost":"400",
"order_date":"2020/12/01",
"delivery_date":"2020/12/11"
}
2. Update the order for a specific order ID to update the delivery_date based on the updated
value provided to the API, can be GET or POST method.
Endpoint : /orders/update
3. List all orders for a given date in yyyy/mm/dd format.
Endpoint : /orders/list
4. Query for a specific order with Order ID, can be GET or POST method.
Endpoint : /orders/search
5. Delete an order with Order ID.
Endpoint : /orders/delete