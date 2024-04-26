import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";

export default function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {error && <div>Error deleting user</div>}
        {
          <Button onClick={handleClick} loading={isLoading}>
            <GoTrash />
          </Button>
        }
        {user.name}
      </div>
    </div>
  );
}
