import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack'
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin'

const isDev = process.env.NODE_ENV === 'development'
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      babelLoaderOptions(opts) {
        opts.plugins?.unshift('babel-plugin-react-compiler')
      }
    })
  ],
  tools: {
    rspack: (config: any) => {
      if (process.env.RSDOCTOR) {
        config.plugins.push(new RsdoctorRspackPlugin({}))
      }
      config.optimization.usedExports = false

      if (isDev) {
        config.optimization.providedExports = false
      }
      config.plugins.push(
        TanStackRouterRspack({
          target: 'react',
          autoCodeSplitting: true,
          routesDirectory: './src/routes',
          generatedRouteTree: './src/routeTree.gen.ts',
          routeFileIgnorePrefix: '-',
          routeFileIgnorePattern: '.ts$|components'
        })
      )
      return config
    }
  }
})
