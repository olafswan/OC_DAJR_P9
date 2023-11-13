export const unformatDate = (formattedDateStr) => {
  //   console.log(
  //     "🚀 ~ file: unformat.js:2 ~ unformatDate ~ formattedDateStr:",
  //     formattedDateStr
  //   );
  // Split the formatted date into its components
  const parts = formattedDateStr.split(" ");

  if (parts.length !== 3) {
    // If the input is not in the expected format, return it as is
    console.log("format error");
    return formattedDateStr;
  }

  const day = parts[0];
  //   console.log("🚀 ~ file: unformat.js:15 ~ unformatDate ~ day:", day);
  const month = parts[1];
  //   console.log("🚀 ~ file: unformat.js:17 ~ unformatDate ~ month:", month);
  const year = parts[2];
  //   console.log("🚀 ~ file: unformat.js:19 ~ unformatDate ~ year:", year);

  // Map the month abbreviation back to its numerical representation
  const monthAbbreviations = [
    "Jan.",
    "Fév.",
    "Mar.",
    "Avr.",
    "Mai.",
    "Jui.",
    "Jui.",
    "Aoû.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Déc.",
  ];
  const monthNumber = monthAbbreviations.indexOf(month) + 1;

  if (monthNumber === 0 || isNaN(day) || isNaN(monthNumber) || isNaN(year)) {
    // If any of the components cannot be parsed, return the input as is
    console.log("format error");
    return formattedDateStr;
  }

  // Use the components to construct the unformatted date string
  return `${year}-${monthNumber.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
};
