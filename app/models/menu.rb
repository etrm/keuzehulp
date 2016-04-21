require 'yaml'

class Menu

  def initialize
    @menu = YAML.load_file(Rails.root.join('menu_structure.yml'))
  end

  def hash
    @menu
  end

end
