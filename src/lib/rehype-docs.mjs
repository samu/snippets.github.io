// Small presentation adjustments to Astro's rendered Markdown. Runs only at build/dev time.
export default function rehypeDocs() {
  return tree => {
    function visit(parent) {
      for (let index = 0; index < (parent.children?.length || 0); index++) {
        const node = parent.children[index];
        visit(node);
        if (node.type !== 'element') continue;
        if (/^h[2-4]$/.test(node.tagName) && node.properties.id) {
          node.children = [{ type: 'element', tagName: 'a', properties: { className: ['heading-link'], href: '#' + node.properties.id }, children: node.children }];
        }
        if (node.tagName === 'table') {
          parent.children[index] = { type: 'element', tagName: 'div', properties: { className: ['table-scroll'], tabIndex: 0 }, children: [node] };
        }
        if (node.tagName === 'pre') {
          const code = node.children.find(child => child.tagName === 'code');
          const language = code?.properties?.className?.find(name => name.startsWith('language-'))?.slice(9);
          node.properties.tabIndex = 0;
          parent.children[index] = {
            type: 'element', tagName: 'div', properties: { className: ['code-panel'] }, children: [
              { type: 'element', tagName: 'div', properties: { className: ['code-label'] }, children: [{ type: 'text', value: language?.toUpperCase() || 'Code' }] },
              node,
            ],
          };
        }
      }
    }
    visit(tree);
  };
}
