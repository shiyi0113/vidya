// Rewrite relative .md links in canon markdown to clean Astro routes.
// `career/foo.md` → `${base}/canon/career/foo/`
// `README.md` → `${base}/canon/`
export function rewriteCanonLinks({ base = '/' } = {}) {
  const prefix = base.endsWith('/') ? base : base + '/';
  return (tree) => {
    walk(tree);
    function walk(node) {
      if (!node) return;
      if (node.type === 'link' && typeof node.url === 'string') {
        const original = node.url;
        if (
          !/^(https?:|mailto:|tel:|#|\/)/.test(original) &&
          /\.md(#|$)/.test(original)
        ) {
          const [path, hash = ''] = original.split('#');
          let cleaned = path.replace(/\.md$/, '').replace(/^\.\//, '');
          if (cleaned === 'README' || cleaned === 'index') cleaned = '';
          const suffix = cleaned ? `${cleaned}/` : '';
          node.url = `${prefix}canon/${suffix}${hash ? '#' + hash : ''}`;
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    }
  };
}
