import { useApi } from "@/hooks/useApi";
import { ReactNode, createContext, useContext, useState } from "react";

type ApiContextProps = {
    children: ReactNode
}

type ContextProps = {

}

const ApiMangaContext = createContext<ContextProps>(null!)

const ApiMangaProvider = ({ children }: ApiContextProps) => {
    const [AllMangas, setAllMangas] = useState([]);
    const api = useApi();

    return (
        <ApiMangaContext.Provider value={{}}>
            {children}
        </ApiMangaContext.Provider>
    )
}
function useApiManga() {
    const context = useContext(ApiMangaContext)
    return context
}
export { useApiManga, ApiMangaProvider }