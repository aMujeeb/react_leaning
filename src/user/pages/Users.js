import React from "react";

import UsersList from "../components/UsersList";

const USERS = [
    {
        id: 'u1', name: 'Test Name 1', image: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max', places: 3
    },
    {
        id: 'u2', name: 'Test Name 2', image: 'https://techcrunch.com/wp-content/uploads/2024/05/alphafold-3-deepmind.jpg?resize=1200,675', places: 4
    },
    {
        id: 'u3', name: 'Test Name 3', image: 'https://i.abcnewsfe.com/a/025f0ca7-f27e-4bf7-950c-3082c2c18fdd/IMG_4047_1717970685751_hpMain_16x9.jpg?w=1600', places: 1
    }
];

const Users = () => {
    return <UsersList items={USERS} />;
};

export default Users;
