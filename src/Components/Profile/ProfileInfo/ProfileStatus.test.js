import ProfileStatus from "./ProfileStatus";
import {create} from 'react-test-renderer'
import React from "react";

describe("ProfileStatus component", () => {
    test("After creation <span> must be displayed", () => {
        const component = create(<ProfileStatus status="Lexa"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("After creation <input> mustn't be displayed", () => {
        const component = create(<ProfileStatus status="Lexa"/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("After creation <span> must be displayed with correct status", () => {
        const component = create(<ProfileStatus status="status"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("status");
    });
    test("<input> must be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status="status"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("status");
    });
});