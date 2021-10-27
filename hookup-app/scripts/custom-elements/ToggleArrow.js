import * as reactContent from "../hook-content/react-content";

export class ToggleArrow extends HTMLElement {

  content(hookName) {
    let noContent = '<div>Coming Soon</div>';
    let getNotes =  {
      'useState': reactContent.useState(),
      'useEffect': reactContent.useEffect(),
      'useContext': reactContent.useContext()
    };

    let hookContent = getNotes[hookName];

    return hookContent !== undefined ? hookContent : noContent;
  };

  constructor() {
    super();

    this.setAttribute('role', 'togglebutton');
    this.ariaRoleDescription = 'toggle hook content';
    this.ariaLabel = 'Toggle';

    this.onclick = e => {
      let hook = e.target.id;
      const noteSection = document.getElementById(`${hook}-notes`);
      const hookSection = document.getElementById(`${hook}-section`);

      noteSection.innerHTML = this.content(hook);

      if (!this.classList.toggle('down')) {
        noteSection.style.display = 'none';
        hookSection.style.paddingBottom = '20px';
      } else {
        noteSection.style.display = 'block';
      }
    };
  }
}