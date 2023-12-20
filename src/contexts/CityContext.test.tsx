import { act, renderHook, waitFor } from "@testing-library/react-native";

import { useCity } from "@/hooks/useCity";
import { CityProvider } from "@/contexts/CityContext";

describe("Context: cityContext", () => {
  it("should be change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    // waitFor aguarda a função async ser concluída
    await waitFor(() =>
      // lida com o useState e o useEffect
      // o act garante que a renderização seja feita dentro do contexto
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "São Paulo",
          latitude: 123,
          longitude: 456,
        })
      )
    );

    expect(result.current.city?.name).toBe("São Paulo");
  });
});
