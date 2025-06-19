export const Header = (props) => {
  const navLinksHtml = props.navLinks.map(link => `<a href="${link.href}">${link.text}</a>`).join('');

  return `
    <header>
      <h1 class="site-title">${props.title}</h1>
      <nav>
        ${navLinksHtml}
      </nav>
    </header>
  `;
};
