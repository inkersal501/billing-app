# BillingPro

## Overview
BillingPro app is a multi-role platform designed to manage shop subscriptions, product catalogs, and billing efficiently. It supports role-based access for admins, customer success managers (CSMs), shop admins, and shop staff.

## Tech Stack
- Frontend: React.js  
- Backend: Node.js + Express  
- Database: MongoDB  
- Authentication: JWT  

## Modules & Role-Based Access

### Admin
- Login and secure authentication
- Plans management
- Shops management
- Admin users management (Staff, CSM)

### Admin CSM/User
- Login and secure authentication
- Plans management
- Shops management

### Shop Admin
- Login and secure authentication
- Dashboard with graphical visualization of sales and product analytics
- Billing management
- Shop staff management

### Shop Staff
- Login and secure authentication
- Billing management

## Shared Modules (across roles)
- User Authentication & Authorization (JWT-based)
- Product Management
- Reports & Analytics (role-appropriate dashboards and sales/product visualizations)
- Plans for Shops (Admin, CSM)
