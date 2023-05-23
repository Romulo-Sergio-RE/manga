import { useApi } from "@/hooks/useApi";
import { ReactNode, createContext, use, useContext, useEffect, useState } from "react";

type ApiContextProps = {
    children: ReactNode
}

type ContextProps = {
    allMangas: any[]
    randomManga: any[]
}

const ApiMangaContext = createContext<ContextProps>(null!)

const ApiMangaProvider = ({ children }: ApiContextProps) => {
    const [allMangas, setAllMangas] = useState<any[]>([]);
    const [randomManga, setRandomManga] = useState([]);
    const api = useApi();

    const ArrayNameManga = ["one-piece", "Bungou-Stray-Dogs", "Haikyuu", "kimetsu-no-yaiba"];

    const getAllManga = async () => {
        setAllMangas([]);
        for (let i = 0; i < ArrayNameManga.length; i++) {
            const res = await api.getMangas(ArrayNameManga[i]);
            setAllMangas((oldServices: any) => [...oldServices, res.data]);
        }
    }
    const getRandomManga = () => {
        let randomManga = Math.floor(Math.random() * (allMangas.length - 1))
        setRandomManga(allMangas[randomManga])
    }

    // let randomManga = Math.floor(Math.random() * (allMangas.length - 1))
    // setRandomManga(allMangas[randomManga])
    useEffect(() => {
        //getAllManga();
    }, [])

    return (
        <ApiMangaContext.Provider value={{ allMangas, randomManga }}>
            {children}
        </ApiMangaContext.Provider>
    )
}
function useApiManga() {
    const context = useContext(ApiMangaContext)
    return context
}
export { useApiManga, ApiMangaProvider }