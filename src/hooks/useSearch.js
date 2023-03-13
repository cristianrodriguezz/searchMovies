import { useEffect, useRef, useState } from "react";

 const useSearch = () =>{
    
    const [query, setQuery] = useState("")
    const [error, setError] = useState("")
    const isFirsInput = useRef(true);

    useEffect(() => {
        if (isFirsInput.current) {
            isFirsInput.current = query === ''
            return
        }
        if (query === '') {
            setError("No se puede buscar una película vacía")
            setTimeout(() => {
                setError(null)
            }, 1500);
            return
        }
        if (query.match(/^\d+$/)){
            setError("No se puede buscar una película con número")
            return
        }
        setError(null)
    }, [query]);

return { error, query , setQuery}
}
export default useSearch;
