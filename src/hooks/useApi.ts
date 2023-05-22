import api from "@/service/api";
///manga?filter[slug]=
export const useApi = () => ({
  getMangas: async (nameManga: string) => {
    const url = `/manga?filter[slug]=${nameManga}`;
    const res = await api.get(url);
    return res.data;
  },
});
