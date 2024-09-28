// app/admin/layout.js
import React from 'react';
// import './admin.css'; // Optional: Add your custom styles

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout">
            <header>
                <h1>Admin Panel</h1>
                <nav>
                    <ul>
                        <li><a href="/admin/orders">Manage Orders</a></li>
                        <li><a href="/admin/products">Manage Products</a></li>
                        <li><a href="/admin/users">Manage Users</a></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2024 Your Company Name</p>
            </footer>
        </div>
    );
};

export default AdminLayout;
