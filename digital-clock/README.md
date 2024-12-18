<h2>useEffect Hook</h2>
<p>useEffect Hook is used to handle side effects in functional components.</p>
<p>The useEffect in ReactJS is used to handle the side effects such as fetching data and updating DOM. </p>
<h3>Syntax:</h3>
<p>
useEffect(() => {
    // Side effect logic goes here
    return () => {
         // Cleanup logic (optional)
  };
}, [dependencies]);
<ul>
<li>Effect function: This is where your side effect code runs.</li>
<li>Cleanup function: This optional return function cleans up side effects like subscriptions or timers when the component unmounts.</li>
<li>Dependencies array: React re-runs the effect if any of the values in this array change.</li>
</ul>
</p>

<h3>Why choose useEffect hook?</h3>
<p>useEffect hook is used to handle side effects in functional components, such as fetching data, updating the DOM, and setting up subscriptions or timers.</p>