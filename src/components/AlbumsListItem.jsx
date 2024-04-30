import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";

export default function AlbumsListItem({ album }) {
  const [deleteAlbum, deleteAlbumResults] = useDeleteAlbumMutation()

  const handleDeleteAlbum = () => {
    deleteAlbum(album)
  }

  const header = (
    <div>
      <Button onClick={handleDeleteAlbum} loading={deleteAlbumResults.isLoading}>
        <GoTrash />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}
