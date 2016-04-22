require 'yaml'

class Menu

  attr_reader :hash

  def initialize
    @hash = YAML.load_file(Rails.root.join('data/menu_structure.yml'))
  end

end
