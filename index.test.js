const postcss = require('postcss');

const plugin = require('./');
const BOM = new Buffer('\uFEFF');

function run(input, output, opts) {
    return postcss([plugin(opts)])
        .process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

const str = `
        @media screen and (min-width: 480px) {
            body {
                background-color: lightgreen;
            }
        }

        #main {
            border: 1px solid black;
        }

        ul li {
            padding: 5px;
        }
    `;
const buffer = new Buffer(str);
const withBOM = Buffer.concat([BOM, buffer]).toString();

it('does something', () => {
    return run(str, withBOM, {});
});
