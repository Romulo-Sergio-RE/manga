import { useApi } from "@/hooks/useApi";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type ApiContextProps = {
    children: ReactNode
}

type ContextProps = {
    AllMangas: never[]
}

const ApiMangaContext = createContext<ContextProps>(null!)

const ApiMangaProvider = ({ children }: ApiContextProps) => {
    const [AllMangas, setAllMangas] = useState<any>([]);
    const api = useApi();

    const ArrayNameManga = ["one-piece", "Bungou-Stray-Dogs", "Haikyuu", "kimetsu-no-yaiba"]
    const getAllManga = async () => {
        for (let i = 0; i < ArrayNameManga.length; i++) {
            const res = await api.getMangas(ArrayNameManga[i]);
            setAllMangas((oldServices: any) => [...oldServices, res.data]);
        }
    }
    useEffect(() => {
        setAllMangas([]);
        getAllManga();
    }, [])

    return (
        <ApiMangaContext.Provider value={{ AllMangas }}>
            {children}
        </ApiMangaContext.Provider>
    )
}
function useApiManga() {
    const context = useContext(ApiMangaContext)
    return context
}
export { useApiManga, ApiMangaProvider }