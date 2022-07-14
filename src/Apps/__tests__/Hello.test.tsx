import { render, unmountComponentAtNode } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Hello } from '../Hello';

describe("Test Hello Component", () => {
    let container: any = null;
    let root: any = null;

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        //unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    test("render senza nome", () => {
        act(() => {
            root = createRoot(container);
            root.render(<Hello name='' />);
        });

        expect(container.textContent).toBe("Hello Stranger");
    });

    test("render con nome", () => {
        act(() => {
            root = createRoot(container);
            root.render(<Hello name='Bob' />);
        });

        expect(container.textContent).toBe("Hello Bob");
    });
});