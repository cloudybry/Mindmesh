// public/trace.js
export function decay(nodes, lifespan = 30000) {
  const now = Date.now();
  return nodes.filter(node => {
    if (!node.timestamp) node.timestamp = now;
    return now - node.timestamp < lifespan;
  });
}