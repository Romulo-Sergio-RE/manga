import { useApi } from "@/hooks/useApi";
import { ReactNode, createContext, use, useContext, useEffect, useState } from "react";

type ApiContextProps = {
    children: ReactNode
}

type ContextProps = {
    allMangas: any[]
    randomManga: any[]
    teste: (link: string) => Promise<any>
    testeOne: undefined
}

const ApiMangaContext = createContext<ContextProps>(null!)

const ApiMangaProvider = ({ children }: ApiContextProps) => {
    const [allMangas, setAllMangas] = useState<any[]>([]);
    const [randomManga, setRandomManga] = useState([]);
    const [testeOne, setTesteOne] = useState();
    const api = useApi();

    const ArrayNameManga = ["one-piece", "Bungou-Stray-Dogs", "Haikyuu", "kimetsu-no-yaiba"];

    const getRandomManga = () => {
        let randomManga = Math.floor(Math.random() * (allMangas.length - 1))
        setRandomManga(allMangas[randomManga])
    }
    const getAllManga = async () => {
        setAllMangas([]);
        for (let i = 0; i < ArrayNameManga.length; i++) {
            const res = await api.getMangas(ArrayNameManga[i]);
            setAllMangas((oldServices: any) => [...oldServices, res.data[0]]);
        }
    }
    const teste = async (link: string) => {
        const res = await api.getMangas(link);
        setTesteOne(res)
    }
    useEffect(() => {
        getAllManga();
    }, [])
    return (
        <ApiMangaContext.Provider value={{ allMangas, randomManga, teste, testeOne }}>
            {children}
        </ApiMangaContext.Provider>
    )
}
function useApiManga() {
    const context = useContext(ApiMangaContext)
    return context
}
export { useApiManga, ApiMangaProvider }