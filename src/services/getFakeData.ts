import { ApiResponse } from "@/types";
import { faker } from "@faker-js/faker";

const getImage = (): string => faker.image.avatar();
const getType = (): string => {
  const animalTypes = ["dog", "cat", "horse", "bird", "sheep"];
  return animalTypes[Math.floor(Math.random() * animalTypes.length)];
};
const getUrl = (): string => faker.internet.url();
const getText = (): string => faker.lorem.sentences();

const animalTitles: Record<string, () => string> = {
  dog: faker.animal.dog,
  cat: faker.animal.cat,
  horse: faker.animal.horse,
  bird: faker.animal.bird,
};

const getTitle = (type: string): string => {
  const animalTitleFunction = animalTitles[type];
  return animalTitleFunction ? animalTitleFunction() : "No Title";
};

export const generateData = (query: string): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [...new Array(100)].map((item, index) => {
        const type = getType();
        return {
          type,
          id: index + 1,
          url: getUrl(),
          title: getTitle(type),
          description: getText(),
          image: getImage(),
        };
      });

      const filteredData = data.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase())
      );

      resolve(filteredData);
    }, 1000);
  });
};
