// Function to call when the element is added
function elementRendered() {
    console.log('Element with specific class has been rendered');

    // Your code here
  }
  
  // Set up a MutationObserver to watch for changes in the document
  const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
      if(mutation.type === 'childList') {
        let addedNodes = [...mutation.addedNodes];
        let element = addedNodes.find(node => node.nodeType === 1 && node.classList.contains('hs-form-iframe'));
        if(element) {
          elementRendered();
          element.styles.height = "100vh";
          element.styles.background = "white";

          // Optional: Disconnect observer if you only need to know once
          //observer.disconnect();
        }
      }
    }
  });
  
  // Start observing the document body and subtree for added nodes
  observer.observe(document.body, { childList: true, subtree: true });
  