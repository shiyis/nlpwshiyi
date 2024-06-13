document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('.franklin-content pre>code');

  codeBlocks.forEach(codeBlock => {
    // Create a button element
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';

    // Append the button to the parent of codeBlock (which is <pre>)
    const pre = codeBlock.parentElement;
    pre.classList.add('code-block'); // Add a class for styling
    pre.style.position = 'relative'; // Ensure the parent is positioned relatively
    pre.insertBefore(button, codeBlock);

    // Add click event listener to the button
    button.addEventListener('click', () => {
      // Copy the text content of the code block
      const textToCopy = codeBlock.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Provide feedback to the user
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});
