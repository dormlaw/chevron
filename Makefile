install: install-deps global

install-deps:
	npm ci

global:
	chmod +x bin/chevron.js

publish:
	npm publish --dry-run
	npm link

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

chevron:
	npm start
