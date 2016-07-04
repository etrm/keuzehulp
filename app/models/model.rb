require 'yaml'

class Model

  attr_reader :key, :properties, :name, :leaflet

  def initialize(key, attr)
    @key        = key
    @properties = attr['properties']
    @name       = attr['name']
    @leaflet    = attr['leaflet']
  end

  def as_json
    { key:        key,
      name:       name,
      properties: properties }
  end

  def inspect
    "#<#{ self.class.name } (key:#{ key })>"
  end

  def self.all
    models = []
    Dir.glob(Rails.root.join('data/models/*.yml')) do |path|
      key = path.split('.').first.split('/').last
      models << self.new(key, YAML.load_file(path))
    end
    models
  end

end
