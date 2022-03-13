exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: { fallback: { url: false } },
    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: "@mdx-js/loader",
              /** @type {import('@mdx-js/loader').Options} */
              options: {},
            },
          ],
        },
        // {
        //   test: /\.less$/,
        //   use: [
        //     // You don't need to add the matching ExtractText plugin
        //     // because gatsby already includes it and makes sure it's only
        //     // run at the appropriate stages, e.g. not in development
        //     loaders.miniCssExtract(),
        //     loaders.css({ importLoaders: 1 }),
        //     // the postcss loader comes with some nice defaults
        //     // including autoprefixer for our configured browsers
        //     loaders.postcss(),
        //     `less-loader`,
        //   ],
        // },
      ],
    },
    // plugins: [
    //   plugins.define({
    //     __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
    //   }),
    // ],
  });
};
