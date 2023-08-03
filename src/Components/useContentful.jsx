import { createClient } from 'contentful';

const useContentful = () => {

    const client = createClient({
        space: process.env.REACT_APP_space,
        accessToken: process.env.REACT_APP_accessToken,
        host: process.env.REACT_APP_host
    });

    const getAuthors = async () => {
        try {
            const entires = await client.getEntries({
                content_type: 'author',
                select: 'fields',
            });

            const sanitizedEntries = entires.items.map((item) => {
                const avatar = item.fields.avatar.fields;
                return {
                    ...item.fields,
                    avatar
                };
            });
            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching author: ${error}`);
        }
    };

    return { getAuthors }
};

export default useContentful;