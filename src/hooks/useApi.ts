import api from "@/service/api";

export const useApi = () => ({
  getMangas: async (nameManga: string) => {
    const url = process.env.API_KEY;
    const res = await api.get(`${url}${nameManga}`);
    return res.data;
  },
});
