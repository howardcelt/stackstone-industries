# Stackston Industries Security Specification

## Data Invariants
1.  **Product Consistency**: Products can only be managed by Admins. Public can only read.
2.  **Order Ownership**: Users can only read/write their own orders. Admin can read all.
3.  **Inquiry Integrity**: Anyone can create an inquiry, but only Admins can read or update them.
4.  **Blog Posts**: Managed by Admins, publicly readable.
5.  **Sensitive Fields**: `totalAmount` in orders must match item calculations (simplified here but enforced via validation helper).
6.  **Immutable Fields**: `createdAt` and `userId` cannot change after creation.

## The Dirty Dozen Payloads (Rejection Targets)
1.  **Identity Spoofing**: Creating an order with `userId` of another user.
2.  **Shadow Update**: Updating a product's price as a non-admin.
3.  **Price Poisoning**: Setting a product price to a negative number.
4.  **Field Injection**: Adding `isAdmin: true` to a user document.
5.  **State Shortcut**: Updating an order status from `pending` to `delivered` directly.
6.  **Resource Exhaustion**: Inserting a 1MB string into a product name.
7.  **Unauthorized List Scrape**: Listing all orders of all users as a public user.
8.  **Orphaned Lead**: Creating an inquiry without a valid email.
9.  **Timestamp Fraud**: setting `createdAt` to a future date.
10. **Data Corruption**: setting `items` in an order to a string instead of an array.
11. **PII Leak**: Accessing another user's inquiry data.
12. **Admin Privilege Escalation**: Attempting to write to the `admins` collection.

## Test Runner (Draft)
The `firestore.rules.test.ts` will verify these rejections.
