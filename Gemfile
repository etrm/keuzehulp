ruby '2.4.2'
source 'https://rubygems.org'

gem 'rails',        '~> 5.1'
gem 'haml'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder',     '~> 2.0'
gem 'sdoc',         '~> 0.4.0', group: :doc

group :assets do
  gem 'sass-rails'
  gem 'therubyracer', platforms: :ruby
  gem 'execjs'
  gem 'uglifier'
  gem 'coffee-rails'
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
  gem 'capistrano3-puma',       '~> 5.1.1', require: false
end

group :production do
  gem 'puma'
end
