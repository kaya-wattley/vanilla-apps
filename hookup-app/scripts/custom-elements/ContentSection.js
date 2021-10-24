export class ContentSection extends HTMLElement {

  createSection() {
    const hooks = [
      'useState', 
      'useEffect', 
      'useContext', 
      'useReducer',
      'useCallback',
      'useMemo',
      'useRef',
      'useImperativeHandle',
      'useLayoutEffect',
      'useDebugValue'
    ];

    hooks.forEach((hook) => {
      this.innerHTML += `<section aria-label="${hook} section" class="note-section" id="${hook}-section">
                          <div class="hook-name">${hook} <toggle-button aria-label="${hook} toggle" id="${hook}" class="right"/></div>
                          <div aria-label="${hook} notes" id="${hook}-notes" class="note"></div>
                        </section>`
    });
  }

  constructor() {
    super();

    window.onload = () => {
      this.createSection();
    }
  }
}