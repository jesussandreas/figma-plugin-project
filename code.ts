// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  if (msg.type === 'start-sesh') {
    // i declare the layers
    const layers = figma.currentPage.children;

    // get the layer array name
    const layerNames = layers.map(a => a.name);
    
    // compare against
    // const searchTerms = [
    //   { name: "Rectangle 1" },
    //   { name: "Frame" },
    //   { name: "Group" },
    //   { name: "Ellipse" },
    //   { name: "Line" },
    //   { name: "Polygon" },
    //   { name: "Star" },
    //   { name: "Lorem ipsum" },
    //   { name: "Vector" },
    //   { name: "Path" },
    // ]

    const searchTerms = [
      "Rectangle",
      "Frame",
      "Group",
      "Ellipse",
      "Line",
      "Polygon",
      "Star",
      "Lorem ipsum",
      "Vector",
      "Path",
    ]

    // const searchString = searchTerms.join(", ");
    
    let counter = 0;
    const result = layerNames.forEach(layer => { 

      searchTerms.forEach(keyword => {
        if (layer.includes(keyword)) {
          let increment = counter++; 
          console.log(counter);
      }

    })
    })

    if (counter > 5) {
      
    }
      
    console.log(result);
  }
};
