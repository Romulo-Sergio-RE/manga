import { useApi } from "@/hooks/useApi";
import { ReactNode, createContext, use, useContext, useEffect, useState } from "react";

type ApiContextProps = {
    children: ReactNode
}

type ContextProps = {
    randomManga: any[]
    getRandomManga: (teste: []) => Promise<void>
}

const ApiMangaContext = createContext<ContextProps>(null!)

const ApiMangaProvider = ({ children }: ApiContextProps) => {
    const [randomManga, setRandomManga] = useState([]);
    const api = useApi();

    const ArrayNameManga = ["one-piece", "Bungou-Stray-Dogs", "Haikyuu", "kimetsu-no-yaiba"];

    const getRandomManga = async () => {
        let randomManga = 0
        setRandomManga([]);
        randomManga = Math.floor(Math.random() * (ArrayNameManga.length - 1))
        const res = await api.getMangas(ArrayNameManga[randomManga]);
        setRandomManga(res.data);
    }
    useEffect(() => {
        getRandomManga();
    }, [])
    return (
        <ApiMangaContext.Provider value={{ randomManga, getRandomManga }}>
            {children}
        </ApiMangaContext.Provider>
    )
}
function useApiManga() {
    const context = useContext(ApiMangaContext)
    return context
}
export { useApiManga, ApiMangaProvider }