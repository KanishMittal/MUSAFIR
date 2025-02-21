import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                const result = await res.json();
                setData(result.data);
                setError(null); // Clear any previous errors
            } catch (err) {
                setError(err.message); 
                alert(err.message); 
            } finally {
                setLoading(false); // Reset loading state
            }
        };

        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;