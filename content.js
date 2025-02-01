document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      // Send selected text to the background script or directly to the backend
      chrome.runtime.sendMessage({ type: 'selectedText', text: selectedText });
    }
  });
  