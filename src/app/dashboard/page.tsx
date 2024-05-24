import { db } from "../../server/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const users = await db.user.findMany();

  return (
    <div className="flex flex-col gap-4">
      <div>
        List of users from the DB:
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}
