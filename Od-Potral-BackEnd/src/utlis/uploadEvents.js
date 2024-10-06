const eventModel = require("../Features/Events/event.model");

async function uploadEvents(num) {
  const today = new Date(); // Get the current date
  today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison

  const events = Array.from({ length: num }, (_, i) => {
   
    const fromDate = new Date(
      today.getFullYear(),
      Math.floor(Math.random() * 12), // Random month
      Math.floor(Math.random() * 28) + 1 // Random day between 1 and 28
    );

    // Ensure fromDate is in the future
    if (fromDate <= today) {
      fromDate.setFullYear(fromDate.getFullYear() + 1); // Move to next year if it's before today
    }

    // Generate a valid toDate that is on or after fromDate
    const toDate = new Date(
      fromDate.getFullYear(),
      fromDate.getMonth(),
      fromDate.getDate() + Math.floor(Math.random() * 5) // Randomly add 0-4 days
    );

    return {
      name: `Event ${i + 1}`,
      fromDate: fromDate,
      toDate: toDate,
      organiser: `College ${Math.floor(Math.random() * 100 + 1)}`,
      location: `City ${Math.floor(Math.random() * 50 + 1)}`,
    };
  });

  console.log("Uploading events...");
  await eventModel.insertMany(events);
  console.log("Events uploaded successfully.");
}

module.exports = uploadEvents;
