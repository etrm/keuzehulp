source 'https://rubygems.org'

gem 'rails',        '4.2.6'
gem 'haml'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder',     '~> 2.0'
gem 'sdoc',         '~> 0.4.0', group: :doc
gem 'tooltipster-rails'

group :assets do
  gem 'sass-rails',   '~> 5.0'
  gem 'therubyracer', platforms: :ruby
  gem 'execjs'
  gem 'uglifier'
  gem 'coffee-rails', '~> 4.1.0'
end

group :development do
  gem 'spring'
  gem 'pry-rails'
  gem 'better_errors'
  gem 'binding_of_caller'

  gem 'capistrano',             '~> 3.0',   require: false
  gem 'capistrano-rbenv',       '~> 2.0',   require: false
  gem 'capistrano-rails',       '~> 1.1',   require: false
  gem 'capistrano-bundler',     '~> 1.1',   require: false
  gem 'capistrano3-unicorn',    '~> 0.2',   require: false
end

group :production do
  gem 'unicorn'
end
