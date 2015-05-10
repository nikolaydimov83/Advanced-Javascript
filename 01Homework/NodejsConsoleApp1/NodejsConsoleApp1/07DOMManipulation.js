var domManipulation = function () {
    
    function traverse(node) {
        var nodes=[];
        traverseNode(node, '');
        function traverseNode(node, spacing) {
            spacing = spacing || '  ';
            //nodes.push(node);
            for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
                var child = node.childNodes[i];
                if (child.nodeType === document.ELEMENT_NODE) {
                    traverseNode(child, spacing + '  ');
                }
            }
            nodes.push(node);
        }
        return nodes;
    }
    
    return {
        appendChild: function appendChild(element, child) {
            var elements;
            if (typeof child === "string") {
                elements = document.querySelectorAll(child);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].appendChild(element);
                }
            }
            else {
                child.appendChild(element);
            } 
            
        },
        removeChild: function removeChild(element, child) {
            var elements;
            var elementsToRemove;
            if (typeof element === "string") {
                elements = document.querySelectorAll(element);
        
            }
            else {
                elements.push(element);
            }
            for (var indexEl in elements) {
                if (indexEl === "length"|| indexEl === "item") {
                    continue;
                }
                var nodes = traverse(elements[indexEl]);
                var breakNodesCicle = false;
                
                for (var indexNode in nodes) {
                    if (breakNodesCicle === true) {
                        break;
                    }
                    
                    if (typeof child === "string") {
                        elementsToRemove = nodes[indexNode].querySelectorAll(child);
                    }
                    else {
                        elementsToRemove.push(child);
                    }
                    for (var indexToRemove in elementsToRemove) {
                        if (elementsToRemove.length > 0) {
                            nodes[indexNode].removeChild(elementsToRemove[indexToRemove]);
                            breakNodesCicle = true;
                            break;
                        }
                    }
                }
              }
        },
        addHandler: function addHandler(element, eventType, eventHandler) {
            var elements;
            if (typeof element === "string") {
                elements = document.querySelectorAll(element);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].addEventListener(eventType, eventHandler);
                }
            }
           else {
                element.addEventListener(eventType, eventHandler);
            }
            
        }
    };
}();



var liElement = document.createElement("li");
var ulElement = document.getElementById("BirdsWer");
// Appends a list item to ul.birds-list
domManipulation.appendChild(liElement, ".birds-list");
domManipulation.appendChild(liElement, ulElement);
domManipulation.removeChild("ul.birds-list", "li:first-child");
domManipulation.addHandler("li.bird", 'click', function () { alert("I'm a bird!") });

