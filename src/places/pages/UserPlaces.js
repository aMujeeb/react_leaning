import React from "react";
import { useParams } from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Sahara Desert',
        description: 'Worlds largest Desert',
        imageUrl: 'https://apicms.thestar.com.my/uploads/images/2024/06/11/2741969.jpg',
        address: 'Sahara Highway, Nigeria',
        location: {
            lat: 2.2838233,
            lng: -11.5405709
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Gobi Desert',
        description: 'Worlds second Largest Desert',
        imageUrl: 'https://img.etimg.com/thumb/msid-110887958,width-1200,height-630,imgsize-35530,overlay-ettech/photo.jpg',
        address: 'Mongolia',
        location: {
            lat: 41.9879811,
            lng: 95.5015442
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={
        loadedPlaces
    } />;
};

export default UserPlaces;