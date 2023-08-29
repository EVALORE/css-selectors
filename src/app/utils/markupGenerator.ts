function generateMarkup(markup: string) {
  const finalMarkup = `
  &lt;div class="table"&gt;
  ${markup.replaceAll('<', '<div>&lt;').replaceAll('/>', '&#47;&gt;</div>')}
  &lt;&#47;div&gt;`;
  return finalMarkup;
}

export default generateMarkup;
