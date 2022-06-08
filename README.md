# Winged Wheels

This is a full-stack Project based on MERN Full-Stack [Click here for Live Site Link](https://bicycle-manufacturer-website.web.app/)

Can also check Server Site Repo [Click here for Server Site Repo](https://github.com/programming-hero-web-course1/manufacturer-website-server-side-shova29)

For admin panel have to login with given email address and password:

- email address : admin30@admin.com
- password: admin301

## Features and Functionality:

- This is a full-stack website about Winged Wheels Manufacturer management website where bicycle parts that are stored and managed.
- The Home page is consists of header section, banner section, business summary section, featured products, what our beloved client says section, our team member, contact us section, our brand and footer section.
- The Portflio page provides the information about the developer.
- The Blogs page contains three questions and their answers.
- On the Purchase page, users will be able to change the order quantity (increase/decrease) in an input field. The initial value of the quantity will be the minimum order quantity. However, the user won't be able to reduce the quantity below the minimum order quantity mentioned on the tool/part. Also, the order quantity can not be higher than the available quantity.
- If a user is logged in, they will see another option on the header is called Dashboard. Inside the dashboard, a user (not an admin) will see options like My Orders, Add A Review, My Profile options on the side nav.
- If an admin logs in, they will not see the options that a user sees except My Profile. This means an admin will not see my orders and add a review link. Instead, an admin will see My Profile, Manage All Orders, Add A Product, Make Admin, Manage Products.
- An Admin should be able to make another user an admin. If an admin wants, they will be able to add a product on the add a product page. After adding the product, this product will appear on the home page.
- On the Manage All Orders page for the admin, the logged-in admin will see the orders placed by every user. If multiple users use this website to place orders, everyone's order will be displayed here. The orders that are not paid will show unpaid. And the orders that are paid, an Admin can update the status of a paid order. After placing an order and completing the payment, every order will have a default status: pending. On the Manage All Orders page, an admin will be able to update the status of the pending to shipped status.
- User can Create an Account using email/password-based authentication and also social signin authentication. Email will be verified and also reset the password.
- Here used mongodb atlas noSQL database for hosting parts data.
- Payment Integration.
- Fully responsive web app.
- Highly Protected Route.
- Used NoSQL Database

## Technology Used

Font-end

1. React JS
2. Tailwind Daisy
3. Tailwind flowbites
4. React Router
5. Firebase Authentication
6. React-Firebase-Hooks
7. React Toastify
8. React Icons
9. React-hook-form
10. React-rating
11. React-Query
12. React-Stripe-Js

Back-end

1. Node js
2. Express js
3. MongoDB

## Hosting

- Client Side Hosted by Firebase
- Server site hosted by Heroku
