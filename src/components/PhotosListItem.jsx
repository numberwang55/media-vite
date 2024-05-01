export default function PhotosListItem({ photo }) {
  return <div className="relative m-2">
    <img src={photo.url} alt="" className="h-20 w-20" />
  </div>
}
