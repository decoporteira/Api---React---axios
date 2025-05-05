import { useState, useEffect } from "react";
import axios from "axios";

const baseURl = 'https://jsonplaceholder.typicode.com/users'

export default function getUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(baseURl).then((response) => {
            setUsers(response.data);
            setLoading(false);
        }).catch((error) => {
            setError('Error ao solicitar dados');
            setLoading(false);
        })
    }, []);

    

    return { users, loading, error };
}

