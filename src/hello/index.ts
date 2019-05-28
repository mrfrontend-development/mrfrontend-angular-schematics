import { Rule, SchematicContext, Tree, url, apply, mergeWith, template } from '@angular-devkit/schematics'

import { Schema } from './schema'
import { strings } from '@angular-devkit/core'

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: Schema): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const sourceTemplates = url('./files')

		const sourceParameterizedTemplates = apply(sourceTemplates, [
			template({
				..._options,
				...strings
			})
		])

		return mergeWith(sourceParameterizedTemplates)(tree, _context)
	}
}
