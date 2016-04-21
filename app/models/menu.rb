require 'yaml'

class Menu

  def initialize
    @menu = YAML.load_file(Rails.root.join('menu_structure.yml'))
  end

  def html
  end

  def dump!
    @menu
  end

end
