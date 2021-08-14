module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
	plugins: [
	  'stylelint-scss',
	  'stylelint-order',
	  'stylelint-declaration-block-no-ignored-properties'
	],
	rules: {
	  'order/order': [
		 'custom-properties',
		 'dollar-variables',
		 {
			'type': 'at-rule',
			'name': 'include',
			'hasBlock': false
		 },
		 'declarations',
		 {
			'type': 'rule',
			'selector': '&::before'
		 },
		 {
			'type': 'rule',
			'selector': '&::after'
		 },
		 'rules',
		 {
			'type': 'rule',
			'selector': '&:link'
		 },
		 {
			'type': 'rule',
			'selector': '&:visited'
		 },
		 {
			'type': 'rule',
			'selector': '&:focus'
		 },
		 {
			'type': 'rule',
			'selector': '&:hover'
		 },
		 {
			'type': 'rule',
			'selector': '&:active'
		 },
		 {
			'type': 'rule',
			'selector': '&:disabled'
		 },
		 {
			'type': 'rule',
			'selector': '&:first-child'
		 },
		 {
			'type': 'rule',
			'selector': '&:last-child'
		 },
		 {
			'type': 'rule',
			'selector': '&:nth-child.+'
		 },
		 {
			'type': 'rule',
			'selector': '&\\[[^\\[\\]]+\\]'
		 },
		 {
			'type': 'rule',
			'selector': '&\\..+'
		 },
		 {
			'type': 'rule',
			'selector': '&--.+'
		 },
		 {
			'type': 'rule',
			'selector': '.* &'
		 },
		 {
			'type': 'at-rule',
			'name': 'include',
			'hasBlock': true
		 },
		 'at-rules'
	  ],
	  'order/properties-alphabetical-order': null,
	  'order/properties-order': [
		 [
			'all',
			'print-color-adjust',
			'appearance',
			'counter-increment',
			'counter-reset',
			'content',
			'quotes',
			'position',
			'left',
			'right',
			'top',
			'bottom',
			'z-index',
			'display',
			'columns',
			'column-width',
			'column-count',
			'column-fill',
			'column-gap',
			'column-rule',
			'column-rule-style',
			'column-rule-width',
			'column-rule-color',
			'column-span',
			'break-after',
			'break-before',
			'break-inside',
			'page-break-after',
			'page-break-before',
			'page-break-inside',
			'orphans',
			'widows',
			'flex',
			'flex-grow',
			'flex-shrink',
			'flex-basis',
			'flex-flow',
			'flex-direction',
			'flex-wrap',
			'place-content',
			'place-items',
			'place-self',
			'align-content',
			'align-items',
			'align-self',
			'justify-content',
			'justify-items',
			'justify-self',
			'order',
			'clear',
			'float',
			'grid',
			'grid-area',
			'grid-auto-columns',
			'grid-auto-flow',
			'grid-auto-rows',
			'grid-column',
			'grid-column-end',
			'grid-column-gap',
			'grid-column-start',
			'grid-gap',
			'grid-row',
			'grid-row-end',
			'grid-row-gap',
			'grid-row-start',
			'grid-template',
			'grid-template-areas',
			'grid-template-columns',
			'grid-template-rows',
			'list-style',
			'list-style-type',
			'list-style-position',
			'list-style-image',
			'caption-side',
			'empty-cells',
			'table-layout',
			'vertical-align',
			'clip-path',
			'mask',
			'mask-clip',
			'mask-composite',
			'mask-image',
			'mask-mode',
			'mask-origin',
			'mask-position',
			'mask-position-x',
			'mask-position-y',
			'mask-repeat',
			'mask-repeat-x',
			'mask-repeat-y',
			'mask-size',
			'mask-type',
			'shape-image-threshold',
			'shape-margin',
			'shape-outside',
			'contain',
			'overflow',
			'overflow-x',
			'overflow-y',
			'overflow-anchor',
			'overflow-wrap',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'margin-before',
			'margin-end',
			'margin-after',
			'margin-start',
			'margin-collapse',
			'margin-top-collapse',
			'margin-bottom-collapse',
			'margin-before-collapse',
			'margin-after-collapse',
			'outline',
			'outline-style',
			'outline-width',
			'outline-color',
			'outline-offset',
			'outline-radius',
			'outline-radius-topleft',
			'outline-radius-topright',
			'outline-radius-bottomright',
			'outline-radius-bottomleft',
			'border',
			'border-style',
			'border-width',
			'border-color',
			'border-top',
			'border-top-style',
			'border-top-width',
			'border-top-color',
			'border-right',
			'border-right-style',
			'border-right-width',
			'border-right-color',
			'border-bottom',
			'border-bottom-style',
			'border-bottom-width',
			'border-bottom-color',
			'border-left',
			'border-left-style',
			'border-left-width',
			'border-left-color',
			'border-before',
			'border-before-style',
			'border-before-width',
			'border-before-color',
			'border-end',
			'border-end-style',
			'border-end-width',
			'border-end-color',
			'border-after',
			'border-after-style',
			'border-after-width',
			'border-after-color',
			'border-start',
			'border-start-style',
			'border-start-width',
			'border-start-color',
			'border-collapse',
			'border-image',
			'border-image-source',
			'border-image-slice',
			'border-image-width',
			'border-image-outset',
			'border-image-repeat',
			'border-radius',
			'border-top-left-radius',
			'border-top-right-radius',
			'border-bottom-right-radius',
			'border-bottom-left-radius',
			'border-spacing',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'padding-before',
			'padding-end',
			'padding-after',
			'padding-start',
			'width',
			'height',
			'min-width',
			'min-height',
			'max-width',
			'max-height',
			'box-decoration-break',
			'box-shadow',
			'box-sizing',
			'src',
			'font',
			'font-family',
			'font-weight',
			'font-style',
			'font-display',
			'font-feature-settings',
			'font-kerning',
			'font-smoothing',
			'font-stretch',
			'font-synthesis',
			'font-variant',
			'font-variant-alternates',
			'font-variant-caps',
			'font-variant-east-asian',
			'font-variant-ligatures',
			'font-variant-numeric',
			'font-variant-position',
			'font-size',
			'font-size-adjust',
			'unicode-bidi',
			'unicode-range',
			'line-break',
			'line-height',
			'letter-spacing',
			'word-break',
			'word-spacing',
			'word-wrap',
			'white-space',
			'hyphens',
			'tab-size',
			'text-align',
			'text-align-last',
			'text-combine-upright',
			'text-decoration',
			'text-decoration-style',
			'text-decoration-line',
			'text-decoration-color',
			'text-decoration-skip',
			'text-emphasis',
			'text-emphasis-style',
			'text-emphasis-color',
			'text-emphasis-position',
			'text-fill-color',
			'text-indent',
			'text-justify',
			'text-orientation',
			'text-overflow',
			'text-rendering',
			'text-security',
			'text-shadow',
			'text-size-adjust',
			'text-stroke',
			'text-stroke-width',
			'text-stroke-color',
			'text-transform',
			'text-underline-position',
			'direction',
			'writing-mode',
			'ruby-align',
			'ruby-position',
			'color',
			'caret-color',
			'tap-highlight-color',
			'd',
			'x',
			'y',
			'cx',
			'cy',
			'r',
			'rx',
			'ry',
			'fill',
			'fill-opacity',
			'fill-rule',
			'stroke',
			'stroke-dasharray',
			'stroke-dashoffset',
			'stroke-linecap',
			'stroke-linejoin',
			'stroke-miterlimit',
			'stroke-opacity',
			'stroke-width',
			'alignment-baseline',
			'baseline-shift',
			'dominant-baseline',
			'clip-rule',
			'color-interpolation',
			'color-interpolation-filters',
			'color-rendering',
			'flood-color',
			'flood-opacity',
			'lighting-color',
			'marker',
			'marker-end',
			'marker-mid',
			'marker-start',
			'paint-order',
			'shape-rendering',
			'stop-color',
			'stop-opacity',
			'text-anchor',
			'offset',
			'offset-position',
			'offset-path',
			'offset-distance',
			'offset-anchor',
			'offset-rotate',
			'background',
			'background-image',
			'background-position',
			'background-position-x',
			'background-position-y',
			'background-size',
			'background-repeat',
			'background-repeat-x',
			'background-repeat-y',
			'background-origin',
			'background-clip',
			'background-attachment',
			'background-color',
			'background-blend-mode',
			'image-orientation',
			'image-rendering',
			'object-fit',
			'object-position',
			'opacity',
			'visibility',
			'filter',
			'isolation',
			'mix-blend-mode',
			'zoom',
			'backface-visibility',
			'perspective',
			'perspective-origin',
			'perspective-origin-x',
			'perspective-origin-y',
			'transform',
			'transform-box',
			'transform-origin',
			'transform-origin-x',
			'transform-origin-y',
			'transform-origin-z',
			'transform-style',
			'transition',
			'transition-property',
			'transition-duration',
			'transition-delay',
			'transition-timing-function',
			'animation',
			'animation-name',
			'animation-duration',
			'animation-delay',
			'animation-timing-function',
			'animation-iteration-count',
			'animation-direction',
			'animation-fill-mode',
			'animation-play-state',
			'will-change',
			'cursor',
			'pointer-events',
			'touch-action',
			'user-drag',
			'user-focus',
			'user-select',
			'user-zoom',
			'resize',
			'scroll-behavior',
			'scroll-snap-coordinate',
			'scroll-snap-destination',
			'scroll-snap-type',
			'scroll-snap-type-x',
			'scroll-snap-type-y'
		 ],
		 {
			'unspecified': 'bottomAlphabetical'
		 }
	  ],
	  'at-rule-blacklist': [
		 'extend'
	  ],
	  'at-rule-empty-line-before': [
		 'always',
		 {
			'except': [
			  'blockless-after-same-name-blockless',
			  'first-nested'
			],
			'ignore': [
			  'after-comment'
			],
			'ignoreAtRules': [
			  'else'
			]
		 }
	  ],
	  'at-rule-name-case': 'lower',
	  'at-rule-name-newline-after': null,
	  'at-rule-name-space-after': 'always-single-line',
	  'at-rule-no-unknown': null,
	  'at-rule-no-vendor-prefix': true,
	  'at-rule-semicolon-newline-after': 'always',
	  'at-rule-semicolon-space-before': 'never',
	  'at-rule-whitelist': null,
	  'block-closing-brace-empty-line-before': 'never',
	  'block-closing-brace-newline-after': [
		 'always',
		 {
			'ignoreAtRules': [
			  'if',
			  'else'
			]
		 }
	  ],
	  'block-closing-brace-newline-before': 'always-multi-line',
	  'block-closing-brace-space-after': 'always-single-line',
	  'block-closing-brace-space-before': 'always-single-line',
	  'block-no-empty': [
		 true,
		 {
			'severity': 'warning'
		 }
	  ],
	  'block-opening-brace-newline-after': 'always-multi-line',
	  'block-opening-brace-newline-before': 'never-single-line',
	  'block-opening-brace-space-after': 'always-single-line',
	  'block-opening-brace-space-before': 'always',
	  'color-hex-case': 'lower',
	  'color-hex-length': 'short',
	  'color-named': 'never',
	  'color-no-hex': null,
	  'color-no-invalid-hex': true,
	  'comment-empty-line-before': [
		 'always',
		 {
			'except': [
			  'first-nested'
			],
			'ignore': [
			  'after-comment',
			  'stylelint-commands'
			]
		 }
	  ],
	  'comment-no-empty': true,
	  'comment-whitespace-inside': 'always',
	  'comment-word-blacklist': null,
	  'custom-media-pattern': null,
	  'custom-property-empty-line-before': [
		 'always',
		 {
			'except': [
			  'after-custom-property',
			  'first-nested'
			],
			'ignore': [
			  'after-comment',
			  'inside-single-line-block'
			]
		 }
	  ],
	  'custom-property-pattern': null,
	  'declaration-bang-space-after': 'never',
	  'declaration-bang-space-before': 'always',
	  'declaration-block-no-duplicate-properties': true,
	  'declaration-block-no-redundant-longhand-properties': true,
	  'declaration-block-no-shorthand-property-overrides': true,
	  'declaration-block-semicolon-newline-after': 'always-multi-line',
	  'declaration-block-semicolon-newline-before': 'never-multi-line',
	  'declaration-block-semicolon-space-after': 'always-single-line',
	  'declaration-block-semicolon-space-before': 'never',
	  'declaration-block-single-line-max-declarations': 0,
	  'declaration-block-trailing-semicolon': 'always',
	  'declaration-colon-newline-after': 'always-multi-line',
	  'declaration-colon-space-after': 'always-single-line',
	  'declaration-colon-space-before': 'never',
	  'declaration-empty-line-before': [
		 'always',
		 {
			'except': [
			  'after-declaration',
			  'first-nested'
			],
			'ignore': [
			  'after-comment',
			  'inside-single-line-block'
			]
		 }
	  ],
	  'declaration-no-important': [
		 true,
		 {
			'severity': 'warning'
		 }
	  ],
	  'declaration-property-unit-blacklist': null,
	  'declaration-property-unit-whitelist': null,
	  'declaration-property-value-blacklist': null,
	  'declaration-property-value-whitelist': null,
	  'font-family-name-quotes': 'always-unless-keyword',
	  'font-family-no-duplicate-names': true,
	  'font-weight-notation': 'numeric',
	  'function-blacklist': null,
	  'function-calc-no-unspaced-operator': true,
	  'function-comma-newline-after': 'always-multi-line',
	  'function-comma-newline-before': 'never-multi-line',
	  'function-comma-space-after': 'always-single-line',
	  'function-comma-space-before': 'never',
	  'function-linear-gradient-no-nonstandard-direction': true,
	  'function-max-empty-lines': 0,
	  'function-name-case': 'lower',
	  'function-parentheses-newline-inside': 'always-multi-line',
	  'function-parentheses-space-inside': 'never-single-line',
	  'function-url-no-scheme-relative': true,
	  'function-url-quotes': 'always',
	  'function-url-scheme-blacklist': null,
	  'function-url-scheme-whitelist': null,
	  'function-whitelist': null,
	  'function-whitespace-after': 'always',
	  'indentation': 2,
	  'keyframe-declaration-no-important': true,
	  'length-zero-no-unit': true,
	  'max-empty-lines': 1,
	  'max-line-length': 120,
	  'max-nesting-depth': null,
	  'media-feature-colon-space-after': 'always',
	  'media-feature-colon-space-before': 'never',
	  'media-feature-name-blacklist': null,
	  'media-feature-name-case': 'lower',
	  'media-feature-name-no-unknown': true,
	  'media-feature-name-no-vendor-prefix': true,
	  'media-feature-name-whitelist': null,
	  'media-feature-parentheses-space-inside': 'never',
	  'media-feature-range-operator-space-after': 'always',
	  'media-feature-range-operator-space-before': 'always',
	  'media-query-list-comma-newline-after': 'always-multi-line',
	  'media-query-list-comma-newline-before': 'never-multi-line',
	  'media-query-list-comma-space-after': 'always-single-line',
	  'media-query-list-comma-space-before': 'never',
	  'no-descending-specificity': null,
	  'no-duplicate-selectors': true,
	  'no-empty-source': [
		 true,
		 {
			'severity': 'warning'
		 }
	  ],
	  'no-eol-whitespace': true,
	  'no-extra-semicolons': true,
	  'no-invalid-double-slash-comments': true,
	  'no-missing-end-of-source-newline': null,
	  'no-unknown-animations': true,
	  'number-leading-zero': 'always',
	  'number-max-precision': 5,
	  'number-no-trailing-zeros': true,
	  'property-blacklist': null,
	  'property-case': 'lower',
	  'property-no-unknown': [
		 true,
		 {
			'checkPrefixed': true
		 }
	  ],
	  'property-no-vendor-prefix': true,
	  'property-whitelist': null,
	  'rule-empty-line-before': [
		 'always-multi-line',
		 {
			'except': [
			  'first-nested'
			],
			'ignore': [
			  'after-comment'
			]
		 }
	  ],
	  'selector-attribute-brackets-space-inside': 'never',
	  'selector-attribute-operator-blacklist': null,
	  'selector-attribute-operator-space-after': 'never',
	  'selector-attribute-operator-space-before': 'never',
	  'selector-attribute-operator-whitelist': null,
	  'selector-attribute-quotes': 'always',
	  'selector-class-pattern': null,
	  'selector-combinator-space-after': 'always',
	  'selector-combinator-space-before': 'always',
	  'selector-descendant-combinator-no-non-space': true,
	  'selector-id-pattern': null,
	  'selector-list-comma-newline-after': 'always',
	  'selector-list-comma-newline-before': 'never-multi-line',
	  'selector-list-comma-space-after': 'always-single-line',
	  'selector-list-comma-space-before': 'never',
	  'selector-max-attribute': null,
	  'selector-max-class': null,
	  'selector-max-combinators': null,
	  'selector-max-compound-selectors': null,
	  'selector-max-empty-lines': 0,
	  'selector-max-id': 1,
	  'selector-max-specificity': null,
	  'selector-max-type': null,
	  'selector-max-universal': null,
	  'selector-nested-pattern': null,
	  'selector-no-qualifying-type': null,
	  'selector-no-vendor-prefix': true,
	  'selector-pseudo-class-blacklist': null,
	  'selector-pseudo-class-case': 'lower',
	  'selector-pseudo-class-no-unknown': true,
	  'selector-pseudo-class-parentheses-space-inside': 'never',
	  'selector-pseudo-class-whitelist': null,
	  'selector-pseudo-element-case': 'lower',
	  'selector-pseudo-element-colon-notation': 'double',
	  'selector-pseudo-element-no-unknown': true,
	  'selector-type-case': 'lower',
	  'selector-type-no-unknown': true,
	  'shorthand-property-no-redundant-values': true,
	  'string-no-newline': true,
	  'string-quotes': 'double',
	  'time-min-milliseconds': 10,
	  'unit-blacklist': [
		 'ch',
		 'cm',
		 'ex',
		 'in',
		 'mm',
		 'pc',
		 'pt',
		 'q'
	  ],
	  'unit-case': 'lower',
	  'unit-no-unknown': true,
	  'unit-whitelist': null,
	  'value-keyword-case': 'lower',
	  'value-list-comma-newline-after': 'always-multi-line',
	  'value-list-comma-newline-before': 'never-multi-line',
	  'value-list-comma-space-after': 'always-single-line',
	  'value-list-comma-space-before': 'never',
	  'value-list-max-empty-lines': 0,
	  'value-no-vendor-prefix': true,
	  'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
	  'scss/at-else-closing-brace-space-after': 'always-intermediate',
	  'scss/at-else-empty-line-before': 'never',
	  'scss/at-else-if-parentheses-space-before': 'always',
	  'scss/at-extend-no-missing-placeholder': null,
	  'scss/at-function-parentheses-space-before': 'never',
	  'scss/at-function-pattern': null,
	  'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
	  'scss/at-if-closing-brace-space-after': 'always-intermediate',
	  'scss/at-import-no-partial-leading-underscore': true,
	  'scss/at-import-partial-extension-blacklist': null,
	  'scss/at-import-partial-extension-whitelist': null,
	  'scss/at-mixin-argumentless-call-parentheses': 'never',
	  'scss/at-mixin-parentheses-space-before': 'never',
	  'scss/at-mixin-pattern': null,
	  'scss/at-rule-no-unknown': true,
	  'scss/declaration-nested-properties': 'never',
	  'scss/declaration-nested-properties-no-divided-groups': null,
	  'scss/dollar-variable-colon-newline-after': 'always-multi-line',
	  'scss/dollar-variable-colon-space-after': 'always-single-line',
	  'scss/dollar-variable-colon-space-before': 'never',
	  'scss/dollar-variable-empty-line-before': [
		 'always',
		 {
			'except': [
			  'after-dollar-variable',
			  'first-nested'
			],
			'ignore': [
			  'after-comment',
			  'inside-single-line-block'
			]
		 }
	  ],
	  'scss/dollar-variable-no-missing-interpolation': null,
	  'scss/dollar-variable-pattern': null,
	  'scss/double-slash-comment-empty-line-before': [
		 'always',
		 {
			'except': [
			  'first-nested'
			],
			'ignore': [
			  'between-comments',
			  'stylelint-commands'
			]
		 }
	  ],
	  'scss/double-slash-comment-inline': null,
	  'scss/double-slash-comment-whitespace-inside': 'always',
	  'scss/media-feature-value-dollar-variable': null,
	  'scss/operator-no-newline-after': null,
	  'scss/operator-no-newline-before': null,
	  'scss/operator-no-unspaced': true,
	  'scss/partial-no-import': null,
	  'scss/percent-placeholder-pattern': null,
	  'scss/selector-no-redundant-nesting-selector': true,
	  'plugin/declaration-block-no-ignored-properties': [
		 true,
		 {
			'severity': 'warning'
		 }
	  ]
	},
	ignoreFiles: ['./assets/zeroing.scss']
 }