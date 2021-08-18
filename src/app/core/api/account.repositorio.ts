import { axiosIntance } from '../config/AxiosConfig';

export const AccountRepository = {
    consultarAccount: async () =>
        await axiosIntance.get('/'),
}