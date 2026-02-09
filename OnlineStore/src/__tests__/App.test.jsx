import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "../App";
import { vi } from "vitest";

// local storage mocks
const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
};
global.localStorage = localStorageMock;



describe ('App displays without issue', () => {
    beforeEach(() => {
        // Clear all mock calls before each test
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.removeItem.mockClear();
        localStorageMock.clear.mockClear();
    });

    test('loads from localStorage', async () => {
        localStorageMock.getItem.mockReturnValue('[]');

        const {unmount} = render(<App />);

        const savedProduct = JSON.stringify([{id:1, name:'Grapes', price:2.99}]);

        localStorageMock.getItem.mockReturnValue(JSON.stringify(savedProduct));


        unmount();

        render(<App />);

        expect(localStorageMock.getItem).toHaveBeenCalledWith('products')
    
    });

    test('saves to localStorage when state changes', () => {
        render(<App />);
        expect(localStorageMock.setItem).toHaveBeenCalledWith('products', expect.any(String));
    });

   
});
