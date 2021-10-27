export const useState = () => {
  return (
    `The <span class="function">useState</span> hook is used to return a stateful value, and a function that can be used to update it.
      <div class="code-block-small">
        <code class="syntax">
          <span class="variable">const</span> [state, setState] = <span class="function">useState</span>(initialState);
        </code>
      </div>
      <ul>
        <li><code>state</code> in the snippet above, is really just a variable whose state can be updated</li>
        <li><code>setState</code> is the function that updates the <code>state</code> variable</li>
        <li><code>initialState</code> is the initial value to be assigned the <code>state</code> variable</li>
      </ul>
      <div>Example:</div>
      <div class="code-block">
        <code class="syntax">
          <pre>
            <span class="statement">import</span> React, { <span class="function">useState</span> } <span class="statement">from</span> 'react';
            
            <span class="variable">const</span> HpStatus = () => {           
              <span class="variable">const</span> [hp, setHp] = <span class="function">useState</span>(0);
            
              <span class="variable">const</span> decrement = () => {
                <span class="function">setHp</span>(prevState => prevState + 1);           
              };        
                        
              <span class="statement">return</span> (          
                &lt<span class="tag">div</span>&gt           
                  &lt<span class="tag">button</span> onClick={decrement}&gt             
                    Attack           
                  &lt/<span class="tag">button</span>&gt           
                &lt/<span class="tag">div</span>&gt           
              );          
            }
          </pre>
        </code>
      </div>`
  );
}

export const useEffect = () => {
  return (
    `The <span class="function">useEffect</span> hook is that will run any function placed within it whenever the page is on is rendered. 
     You can also set the <span class="function">useEffect</span> to only run functions when a specific value has been changed.
      <div class="code-block-small">
        <code class="syntax">
          <span class="variable">const</span> <span class="function">useEffect</span>(<span class="function">functionToBeCalled</span>);
        </code>
      </div>
      <ul>
        <li>
          As the name suggests, <code>functionToBeCalled</code> in the snippet above, represents a function that can be called within the useEffect on render
          of a page.
        </li>
      </ul>
      <div>Example:</div>
      <div class="code-block">
        <code class="syntax">
          <pre>
            <span class="statement">import</span> React, { <span class="function">useState</span>, <span class="function">useEffect</span> } <span class="statement">from</span> 'react';
              
            <span class="variable">const</span> HpStatus = () => {           
              <span class="variable">const</span> [hp, setHp] = <span class="function">useState</span>(0);
            
              <span class="function">useEffect</span>(() => {            
                <span class="function">fillHpBar</span>();            
                <span class="function">setHp</span>(350);
              });

              <span class="variable">const</span> decrement = () => {
                <span class="function">setHp</span>(prevState => prevState + 1);           
              };        
                        
              <span class="statement">return</span> (          
                &lt<span class="tag">div</span>&gt           
                  &lt<span class="tag">button</span> onClick={decrement}&gt             
                    Attack           
                  &lt/<span class="tag">button</span>&gt           
                &lt/<span class="tag">div</span>&gt           
              );          
            }
          </pre>
        </code>
      </div>`
  );
}

export const useContext = () => {
  return (
    `The <span class="function">useContext</span> hook is used to tap into the context api. Allowing you to share and scope values throughout 
     the entire component tree.
      <div class="code-block-small">
        <code class="syntax">
          <span class="variable">const</span> value = <span class="function">useContext</span>(<span class="tag">MyContext</span>);
        </code>
      </div>
      <ul>
        <li><code>MyContext</code> is the context object that houses the values to be provided to a component</li>
        <li>
          In order to use the <code>MyContext</code> object, you'll first need to create it using the <span class="function">createContext</span> 
          function as seen in the example below
        </li>
      </ul>
      <div>Example:</div>
      <div class="code-block">
        <code class="syntax">
          <pre>
            <span class="statement">import</span>  React, { <span class="function">createContext</span>, <span class="function">useContext</span> } <span class="statement">from</span> 'react';

            <span class="variable">const</span> seasons = {
              winter: {
                foreground: "#fff",
                background: "#000080"
              },
              spring: {
                foreground: "#000",
                background: "#4F96D8"
              },
              summer: {
                foreground: "#000",
                background: "#FFCC1E"
              },
              fall: {
                foreground: "#fff",
                background: "#AC5341"
              }
            };
            
            <span class="variable">const</span> SeasonContext = <span class="function">createContext</span>(seasons);
            
            <span class="variable">const</span> App = () => {
              <span class="statement">return</span> (
                &lt<span class="tag">SeasonContext.Provider</span> value={seasons.fall}&gt
                  &lt<span class="tag">Toolbar</span> /&gt
                &lt/<span class="tag">SeasonContext.Provider</span>&gt
              );
            }
            
            <span class="variable">const</span> Toolbar = (props) => {
              <span class="statement">return</span> (
                &lt<span class="tag">div</span>&gt  
                  &lt<span class="tag">SeasonedLogo</span>/&gt
                &lt/<span class="tag">div</span>&gt  
              );
            }
            
            <span class="variable">const</span> SeasonedLogo = () => {
              <span class="variable">const</span> theme = <span class="function">useContext</span>(<span class="tag">SeasonContext</span>);

              <span class="statement">return</span> (
                &lt<span class="tag">div</span> 
                  style={{ background: theme.background, 
                           color: theme.foreground }}
                &gt
                  It's Fall!
                &lt/<span class="tag">div</span>&gt  
              );
            }
          </pre>
        </code>
      </div>`
  )
}