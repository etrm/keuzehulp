# frozen_string_literal: true

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
    Pathname.glob(Rails.root.join('data/models/*.yml'))
      .map { |path| new(path.basename('.yml').to_s, YAML.load_file(path)) }
      .sort_by(&:name)
  end
end
