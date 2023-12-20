import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from "./SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      {
        id: "1",
        name: "São Paulo",
        latitude: -23.5505,
        longitude: -46.6333,
      },
      {
        id: "2",
        name: "Rio de Janeiro",
        latitude: -22.9028,
        longitude: -43.2075,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/São Paulo/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
