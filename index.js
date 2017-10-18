const postcss = require('postcss');
const BOM = new Buffer('\uFEFF');

module.exports = postcss.plugin('postcss-bom', () => (css, result) => {
    if (!css.nodes.length) {
        result.warn('File has no nodes');
        return;
    }
    const firstNodeBefore = css.nodes[0].raws.before;
    const buffer = new Buffer(firstNodeBefore);
    const stringWithBOM = Buffer.concat([BOM, buffer]).toString();
    css.nodes[0].raws.before = stringWithBOM;
});
