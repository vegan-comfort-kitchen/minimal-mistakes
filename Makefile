haml-lint:
	bundle exec haml-lint source

rubocop:
	bundle exec rubocop

lint: rubocop haml-lint
