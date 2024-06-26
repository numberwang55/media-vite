import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

export default function AlbumsListItem({ album }) {
  const [deleteAlbum, deleteAlbumResults] = useDeleteAlbumMutation()

  const handleDeleteAlbum = () => {
    deleteAlbum(album)
  }

  const header = (
    <>
      <Button onClick={handleDeleteAlbum} loading={deleteAlbumResults.isLoading} className="mr-2">
        <GoTrash />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album}/>
    </ExpandablePanel>
  );
}
