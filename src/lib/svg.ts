interface Attributes {
    height: string;
}

export const svg = (styles: string, html: string, attributes: Attributes) => {
    return /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <foreignObject width="100%" height='${attributes.height}'>
              <div xmlns="http://www.w3.org/1999/xhtml">
                  <style>${styles}</style>
                  ${html}
              </div>
          </foreignObject>
      </svg>`;
};
