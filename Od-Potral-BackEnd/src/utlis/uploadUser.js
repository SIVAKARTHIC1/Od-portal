const User = require("../Features/users/user.model");

async function createUsers(role, num) {
  const validRoles = ["student", "faculty"];
  if (!validRoles.includes(role)) {
    throw new Error(
      'Invalid role provided. Role must be either "student" or "faculty".'
    );
  }

  const users = Array.from({ length: num }, (_, i) => {
    return {
      name: `User ${i + 1}`,
      rollNo: `RollNo${Math.floor(Math.random() * 1000) + 1}`,
      year: Math.floor(Math.random() * 5) + 1, // Random year between 1 and 5
      batch: `Batch ${Math.floor(Math.random() * 10) + 1}`,
      department: `Department ${Math.floor(Math.random() * 5) + 1}`,
      email: `${role}${i + 1}@example.com`,
      role: role,
    };
  });

  await User.insertMany(users); // Insert the users into the database
}

module.exports = createUsers;
