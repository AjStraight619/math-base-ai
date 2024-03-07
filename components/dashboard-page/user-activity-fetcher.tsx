import UserActivity from "./user-activity";

type UserActivityFetcherProps = {
  query: string;
};

const UserActivityFetcher = ({ query }: UserActivityFetcherProps) => {
  return (
    <div>
      <UserActivity />
    </div>
  );
};

export default UserActivityFetcher;
