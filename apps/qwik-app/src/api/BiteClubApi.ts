/**
 * Retrieve your bites.
 */
export const getBites = async () => {
  console.log("hello?");
  const response = await fetch("http://localhost:3000/v1/bites", {
    method: "GET",
  });
  const bites = await response.json();
  return bites;
};
