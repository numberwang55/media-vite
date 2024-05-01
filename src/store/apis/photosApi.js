import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: "/photos",
            // default is GET, could be omitted
            method: "GET",
            params: {
              albumId: album.id
            }
          }
        }
      }),
      addPhoto: builder.mutation({
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.urlLoremFlickr({ category: 'abstract', height: 150, width: 150 })
            }
          }
        }
      }),
      deletePhoto: builder.mutation({
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE"
          }
        }
      })
    }
  }
})

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation
} = photosApi
export { photosApi }