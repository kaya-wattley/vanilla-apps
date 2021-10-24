export const useState = () => {
  return (
    `The <span class="function">useState</span> hook is used to return a stateful value, and a function that can be used to update it.
      <div class="code-block-small">
        <code class="syntax">
          <variable>const</variable> [state, setState] = <span class="function">useState</span>(initialState);
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
          <pre><span class="statement">import</span> React, { useState } <span class="statement">from</span> 'react';
          <span class="code-line-no-margin"><span class="variable">const</span> HpStatus = () => {</span>
            <span class="code-line"><span class="variable">const</span> [hp, setHp] = <span class="function">useState</span>(0);</span>
            <span class="code-line"><span class="variable">const</span> decrement = () => {</span>
            <span class="code-line tab-2 no-padding"><span class="function">setHp</span>(prevState => prevState + 1);</span>
            <span class="code-line">};</span>
          
            <span class="code-line"><span class="statement">return</span> (</span>
            <span class="code-line tab-2 no-padding">&lt;<span class="tag">div</span>&gt;</span>
            <span class="code-line tab-3 no-padding">&lt;<span class="tag">button</span> onClick={decrement}&gt;</span>
            <span class="code-line tab-4 no-padding">Attack</span>
            <span class="code-line tab-3 no-padding">&lt;/<span class="tag">button</span>&gt;</span>
            <span class="code-line tab-2 no-padding">&lt;/<span class="tag">div</span>&gt;</span>
            <span class="code-line">);</span>

            <span class="code-line-no-margin code-margin no-padding"">}</span>
          </pre>
        </code>
      </div>`
  );
}

export const useEffect = () => {
  return (
    `The <span class="function">useEffect</span> hook is that will run any function placed within it whenever the page is on is rendered.
      You can also set the useEffect to only run functions when a specific value has been changed.
      <div class="code-block-small">
        <code class="syntax">
          <variable>const</variable> <span class="function">useEffect</span>(<span class="function">functionToBeCalled</span>);
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
          <pre><span class="statement">import</span> React, { useState, useEffect } <span class="statement">from</span> 'react';
          <span class="code-line-no-margin"><span class="variable">const</span> HpStatus = () => {</span>
            <span class="code-line"><span class="variable">const</span> [hp, setHp] = <span class="function">useState</span>(0);</span>

            <span class="code-line"><span class="function">useEffect</span>(() => {</span>
            <span class="code-line tab-2 no-padding"><span class="function">fillHpBar</span>();</span>
            <span class="code-line tab-2 no-padding"><span class="function">setHp</span>(350);</span>
            <span class="code-line">});</span>

            <span class="code-line"><span class="variable">const</span> decrement = () => {</span>
            <span class="code-line tab-2 no-padding"><span class="function">setHp</span>(prevState => prevState + 1);</span>
            <span class="code-line">};</span>
          
            <span class="code-line"><span class="statement">return</span> (</span>
            <span class="code-line tab-2 no-padding">&lt;<span class="tag">div</span>&gt;</span>
            <span class="code-line tab-3 no-padding">&lt;<span class="tag">button</span> onClick={decrement}&gt;</span>
            <span class="code-line tab-4 no-padding">Attack</span>
            <span class="code-line tab-3 no-padding">&lt;/<span class="tag">button</span>&gt;</span>
            <span class="code-line tab-2 no-padding">&lt;/<span class="tag">div</span>&gt;</span>
            <span class="code-line">);</span>

            <span class="code-line-no-margin code-margin no-padding"">}</span>
          </pre>
        </code>
      </div>`
  );
}