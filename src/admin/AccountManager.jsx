import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);

  useEffect(() => {
    fetch("https://user-api-6rny.onrender.com/users") 
      .then((res) => res.json())
      .then((data) => {
        // Simulate users with passwords (for demo)
        const formatted = data.map((u, i) => ({
          id: u.id,
          username: u.username,
          email: u.email,
          password: u.password,
        }));
        setUsers(formatted);
      })
      .catch((err) => console.error("Error fetching users:", err));

    // Load blocked users from localStorage
    const storedBlocked = JSON.parse(localStorage.getItem("blockedUsers")) || [];
    setBlockedUsers(storedBlocked);
  }, []);

  // Toggle block/unblock
  const toggleBlock = (username) => {
    let updatedBlocked = [...blockedUsers];

    if (blockedUsers.includes(username)) {
      updatedBlocked = updatedBlocked.filter((u) => u !== username);
      alert(`${username} has been unblocked.`);
    } else {
      updatedBlocked.push(username);
      alert(`${username} has been blocked.`);
    }

    setBlockedUsers(updatedBlocked);
    localStorage.setItem("blockedUsers", JSON.stringify(updatedBlocked));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow rounded-lg mt-16">
      <h2 className="text-2xl font-bold mb-4 text-center">User Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="p-2 border">Username</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Password</th>
              <th className="p-2 border text-center">Status</th>
              <th className="p-2 border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const isBlocked = blockedUsers.includes(user.username);
              return (
                <tr
                  key={user.id}
                  className={isBlocked ? "bg-red-100" : "hover:bg-gray-100"}
                >
                  <td className="p-2 border">{user.username}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.password}</td>
                  <td className="p-2 border text-center font-semibold">
                    {isBlocked ? "Blocked" : "Active"}
                  </td>
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => toggleBlock(user.username)}
                      className={`px-3 py-1 rounded text-white ${
                        isBlocked ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {isBlocked ? "Unblock" : "Block"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

};

export default UserList;
