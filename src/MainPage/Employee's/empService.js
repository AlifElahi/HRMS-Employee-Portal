import axios from "axios";

export const searchEmployee = async (seacrOptions, token) => {
    console.log(seacrOptions);
    try {
        let res = await axios.get('',

            {
                params: seacrOptions,
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            }
        );
        return res.data
    } catch (error) {
        return data
    }
}