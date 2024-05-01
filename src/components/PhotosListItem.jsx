export default function PhotosListItem({ photo }) {
  return <div>
    <img src={photo.url} alt="" className="h-20 w-20" />
  </div>
}
