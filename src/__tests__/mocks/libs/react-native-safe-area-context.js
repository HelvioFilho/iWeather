//https://github.com/th3rdwave/react-native-safe-area-context

import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";

jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);
