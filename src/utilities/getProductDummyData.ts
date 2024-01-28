import productCardData from "@/data/productCardData";

const getProductDummyData = (numberOfItems: number) => {
  if (numberOfItems > productCardData.length) {
    throw new Error(
      "Number of items requested is greater than the array length."
    );
  }

  const shuffledArray = productCardData.slice(); // Create a copy to avoid modifying the original array
  const randomItems = [];

  for (let i = 0; i < numberOfItems; i++) {
    const randomIndex = Math.floor(Math.random() * shuffledArray.length);
    const randomItem = shuffledArray.splice(randomIndex, 1)[0];
    randomItems.push(randomItem);
  }

  return randomItems;
};

export default getProductDummyData;
