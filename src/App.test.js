import {render, screen} from '@testing-library/react';
import App from './App';
import MainApp from "./App";
import {unmountComponentAtNode} from "react-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<MainApp/>, div);
    unmountComponentAtNode(div);
});