import { CityProps } from "@/services/getCityByNameService";
import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "./cityStorage";

const newCity: CityProps = {
  id: "1",
  name: "São Paulo",
  latitude: -23.5505,
  longitude: -46.6333,
};
describe("Storage: CityStorage:", () => {
  it("should be return null when don't have a city stored", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should be return city stored", async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be remove city storage", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});
