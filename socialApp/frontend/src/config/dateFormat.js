export const TimestampDisplay = (timestamp) => {
  const date = new Date(timestamp);

  // Format options
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZone: "UTC",
    // timeZoneName: "short",
  };

  // Format the date
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate
};

