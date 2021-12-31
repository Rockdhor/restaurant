const buildText = (tag, text) => {
    let element = document.createElement(tag);
    element.textContent = text;
    return element;
}

export default buildText;