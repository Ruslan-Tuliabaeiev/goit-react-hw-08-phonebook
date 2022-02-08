
 import {createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react'


export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://61f99add69307000176f7361.mockapi.io/api/v1/' }),
    
    tagTypes: ['CONTACT'],

    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['CONTACT'],
           
        }) ,
        createContact: builder.mutation({ query: newContact  => ({
    url: `/contacts`,
    method: 'POST',
            body: {
                name: newContact.name,
                number: newContact.number,

    },
}),
            invalidatesTags: ['CONTACT'],

        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `./contacts/${contactId}`,
                method: 'DELETE',
        
            }),
            invalidatesTags: ['CONTACT'],
})
})
})
export const { useFetchContactsQuery, useCreateContactMutation, useDeleteContactMutation} = contactApi



