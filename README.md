# Barista-Fullstack
This is a full-stack website that tracks live orders from the cashier screen to the display on the barista screen, and can check these orders for completeness.

# How It's Made:
Tech used: HTML, CSS, JavaScript, Node-JS, MongoDB, Express and Passport

The objective of this project was to create a coffee app that cashiers can send live pending orders to baristas. The baristas can see the live orders, and after completing the order they can click on the check icon to send the live order to the completed section of orders on the same screen.

On the barista page is the email and user id of the barista logged, and a list of pending orders and complete orders. The barista will receive the pending orders. Upon completion the barista can click on the check icon, setting the boolean value from false to true and send the order to the complete order list on their page and sent back to the cashiers completed order list.

# Installation
Clone repo
run npm install
# Usage
run node server.js
Navigate to localhost:8080
