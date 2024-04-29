import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";

export default function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      {
        <Button className="mr-3" onClick={handleClick} loading={isLoading}>
          <GoTrash />
        </Button>
      }
      {error && <div>Error deleting user</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>CONTENT</ExpandablePanel>;
}
