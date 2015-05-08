function traverse(node) {
    traverseNode(node, '');
    function traverseNode(node, spacing) {
        spacing = spacing || '  ';
        var id = "";
        var className1 = "";
        if (node.attributes.id !== undefined) {
            id = "id="+node.attributes.id.nodeValue;
        }
        if (node.className !== "") {
            className1 = "class=" + node.className;
        }
        console.log(spacing + node.nodeName+":"+className1+" "+id);
        for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
    }
}

traverse(BirdsWer);
